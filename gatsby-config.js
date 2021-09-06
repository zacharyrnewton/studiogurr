const path = require(`path`)
const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
console.log(`Using environment config: '${activeEnv}'`)

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    title: `Studio Gurr`,
    description: `A graphic design and branding studio located in Boca Raton, Florida.`,
    author: `@studiogurr`,
    url: process.env.SITE_URL,
    siteUrl: process.env.SITE_URL,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-M8ZVRP7D3G",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: process.env.PLUGIN_SHARP_MOZ_JPEG,
        stripMetadata: true,
        defaultQuality: process.env.PLUGIN_SHARP_QUALITY,
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/src/fonts`,
      },
      __key: "fonts",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: 'studiogurr',
        accessToken: 'MC5YcElrS2hBQUFDSUFPYkhm.77-9Xe-_ve-_ve-_vQjvv73vv73vv70t77-9Ugsl77-977-977-9be-_vQrvv73vv71n77-9L--_vTt0Inbvv70T',
        customTypesApiToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoibWFjaGluZTJtYWNoaW5lIiwiZGJpZCI6InN0dWRpb2d1cnItZjk0YzdjYzEtMTQ3Yi00YzIyLWE5MmItM2RkYmYzZjMwYmJmXzMiLCJkYXRlIjoxNjMwODg1NDIxLCJkb21haW4iOiJzdHVkaW9ndXJyIiwiaWF0IjoxNjMwODg1NDIxfQ.liQNCPt-klSbbm79hP9XykRkULmwSBUU01ebr8SbFt8'
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
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        excludes: [`/preview`],
      }
    },
  ],
  pathPrefix: ``
};
