// var fs = require('fs');
// var dir = "./.cache/caches/gatsby-source-prismic"

// exports.onPreBootstrap = () => {
//   if (!fs.existsSync(dir)) {
//     fs.mkdirSync(dir);
//   }
// }

const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    {
      allPrismicArchive{
        edges {
          node {
            data {
              year
              body {
                text
                html
                raw
              }
              location {
                text
                raw
                html
              }
              title {
                raw
                text
                html
              }
              services {
                text
                raw
                html
              }
              hero_image {
                alt
                fluid {
                  src
                  aspectRatio
                  base64
                  sizes
                  srcSet
                  srcSetWebp
                  srcWebp
                }
              }
              collaborators {
                html
                raw
                text
              }
              production {
                html
                raw
                text
              }
              side_image {
                alt
                fluid {
                  aspectRatio
                  base64
                  sizes
                  src
                  srcSet
                  srcSetWebp
                  srcWebp
                }
              }
            }
            uid
            id
          }
        }
      }
    }
  `)

  const archive = path.resolve("src/templates/work.js")

  pages.data.allPrismicArchive.edges.forEach(edge => {
    createPage({
      path: `/work/${edge.node.uid}`,
      component: archive,
      context: {
        uid: edge.node.uid,
      },
    })
  })
}
