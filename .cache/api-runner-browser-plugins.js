module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Studio Gurr","short_name":"StudioGurr","start_url":"/","background_color":"#000000","theme_color":"#000000","display":"minimal-ui","icon":"src/images/favicon.png"},
    },{
      plugin: require('../node_modules/gatsby-source-prismic-graphql/gatsby-browser.js'),
      options: {"plugins":[],"repositoryName":"studiogurr","accessToken":"MC5YbUdZMEJNQUFDQUFNUkpx.77-977-9Xe-_vV3vv73vv73vv73vv71t77-9Iu-_vWPvv73vv73vv71IPu-_vSbvv73vv71W77-977-9Bifvv73vv71A77-9","path":"/preview","previews":true},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
