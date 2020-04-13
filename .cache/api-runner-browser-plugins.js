module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Studio Gurr","short_name":"Studio Gurr","start_url":"/","background_color":"#000000","theme_color":"#0000FF","display":"minimal-ui","icon":"src/images/favicon.png"},
    },{
      plugin: require('../node_modules/gatsby-source-prismic-graphql/gatsby-browser.js'),
      options: {"plugins":[],"repositoryName":"studiogurr","path":"/preview","previews":true},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
