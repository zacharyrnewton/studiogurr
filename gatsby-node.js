/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
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

  const archive = path.resolve("src/templates/archive.js")

  pages.data.prismic.allArchives.edges.forEach(edge => {
    createPage({
      path: `/archive/${edge.node._meta.uid}`,
      component: archive,
      context: {
        uid: edge.node._meta.uid,
      },
    })
  })
}
