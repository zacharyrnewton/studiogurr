/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

var fs = require('fs');
var dir = "./.cache/caches/gatsby-source-prismic-graphql"

exports.onPreBootstrap = () => {
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    } 
 }

const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    {
      prismic {
        allArchives {
          edges {
            node {
              hero_image
              title
              location
              year
              body
              side_image
              services
              collaborators
              production
              _linkType
              _meta {
                id
                uid
              }
            }
          }
        }
      }
    }
  `)

  const archive = path.resolve("src/templates/work.js")

  pages.data.prismic.allArchives.edges.forEach(edge => {
    createPage({
      path: `/work/${edge.node._meta.uid}`,
      component: archive,
      context: {
        uid: edge.node._meta.uid,
      },
    })
  })
}
