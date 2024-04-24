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
                richText
              }
              location {
                text
                richText
                html
              }
              title {
                richText
                text
                html
              }
              services {
                text
                richText
                html
              }
              hero_image {
                alt
                gatsbyImageData
              }
              collaborators {
                html
                richText
                text
              }
              production {
                html
                richText
                text
              }
              side_image {
                alt
                gatsbyImageData
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
