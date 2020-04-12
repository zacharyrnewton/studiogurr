module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Studio Gurr","short_name":"StudioGurr","start_url":"/","background_color":"#000000","theme_color":"#000000","display":"minimal-ui","icon":"src/images/favicon.png"},
    },{
      plugin: require('../node_modules/gatsby-source-prismic-graphql/gatsby-browser.js'),
      options: {"plugins":[],"repositoryName":"studiogurr","accessToken":"MC5YcElrS2hBQUFDSUFPYkhm.77-9Xe-_ve-_ve-_vQjvv73vv73vv70t77-9Ugsl77-977-977-9be-_vQrvv73vv71n77-9L--_vTt0Inbvv70T","path":"/preview","previews":true},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
