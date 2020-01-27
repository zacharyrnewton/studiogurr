module.exports = {
  siteMetadata: {
    title: `Studio Gurr`,
    description: `Striving for clarity, reduction, and functionality, our design process will emphasize your brand’s messaging and values. Our desire is to create brand symbols, systems, and languages that are full of meaning, convey trust, and last for many years to come. We are a research-driven, disciplined, and passionate group of individuals that function much like a band. Each member plays their own unique instrument, and each is integral to the overall sound, but we all play in unison.`,
    author: `@studiogurr`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
        name:  `fonts`,
        path: `${__dirname}/src/fonts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Studio Gurr`,
        short_name: `StudioGurr`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  pathPrefix:  `/studiogurr`,
}
