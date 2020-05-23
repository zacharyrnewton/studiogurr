const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-source-prismic-graphql-components-preview-page-js": hot(preferDefault(require("A:\\studiogurr\\node_modules\\gatsby-source-prismic-graphql\\components\\PreviewPage.js"))),
  "component---src-templates-work-js": hot(preferDefault(require("A:\\studiogurr\\src\\templates\\work.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("A:\\studiogurr\\src\\pages\\404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("A:\\studiogurr\\src\\pages\\about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("A:\\studiogurr\\src\\pages\\contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("A:\\studiogurr\\src\\pages\\index.js"))),
  "component---src-pages-work-js": hot(preferDefault(require("A:\\studiogurr\\src\\pages\\work.js")))
}

