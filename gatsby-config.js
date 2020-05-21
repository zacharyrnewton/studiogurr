const path = require(`path`)
const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
console.log(`Using environment config: '${activeEnv}'`)

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    title: `Studio Gurr`,
    description: `A graphic design and branding studio located in Boca Raton, Florida`,
    author: `@studiogurr`,
    url: process.env.SITE_URL,
    siteUrl: process.env.SITE_URL,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/src/fonts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: process.env.PLUGIN_SHARP_MOZ_JPEG,
        stripMetadata: true,
        defaultQuality: process.env.PLUGIN_SHARP_QUALITY,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Studio Gurr`,
        short_name: `Studio Gurr`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-cname`,
    {
      resolve: `gatsby-source-prismic-graphql`,
      options: {
        repositoryName: process.env.PRISMIC_REPOSITORY_NAME, // (REQUIRED, replace with your own)
        accessToken: process.env.PRISMIC_ACCESS_TOKEN, // (optional API access token)
        path: '/preview', // (optional preview path. Default: /preview)
        previews: true, // (optional, activated Previews. Default: false)
        pages: [{ // (optional, builds pages dynamically)
          type: 'Archive',         // TypeName from prismic
          match: '/work/:uid',  // Pages will be generated under this pattern
          path: '/work/draft',        // Placeholder page for unpublished documents
          component: require.resolve('./src/templates/work.js'),
        }],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  pathPrefix:  ``,
}
