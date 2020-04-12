var plugins = [{
      plugin: require('/Users/zacharyrnewton/Desktop/studiogurr/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/zacharyrnewton/Desktop/studiogurr/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Studio Gurr","short_name":"StudioGurr","start_url":"/","background_color":"#000000","theme_color":"#000000","display":"minimal-ui","icon":"src/images/favicon.png"},
    },{
      plugin: require('/Users/zacharyrnewton/Desktop/studiogurr/node_modules/gatsby-source-prismic-graphql/gatsby-ssr'),
      options: {"plugins":[],"repositoryName":"studiogurr","accessToken":"MC5YbUdZMEJNQUFDQUFNUkpx.77-977-9Xe-_vV3vv73vv73vv73vv71t77-9Iu-_vWPvv73vv73vv71IPu-_vSbvv73vv71W77-977-9Bifvv73vv71A77-9","path":"/preview","previews":true},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
