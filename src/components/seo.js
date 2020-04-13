/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import ogImage from "../images/og.png"

const SEO = ( { description, lang, meta, link, title } ) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )
  

  const metaDescription = description || `Striving for clarity, reduction, and functionality, our design process will emphasize your brand’s messaging and values. Our desire is to create brand symbols, systems, and languages that are full of meaning, convey trust, and last for many years to come. We are a research-driven, disciplined, and passionate group of individuals that function much like a band. Each member plays their own unique instrument, and each is integral to the overall sound, but we all play in unison.`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      // titleTemplate={`%s | ${site.siteMetadata.title}`}
      titleTemplate={`%s | Studio Gurr`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: ogImage,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          // content: site.siteMetadata.author,
          content: `@studiogurr`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
      link={[
        {
          rel: "stylesheet",
          type: "text/css",
          charset: "UTF-8",
          href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css",
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css",
        },
      ].concat(link)}
    />
  )
}

SEO.defaultProps = {
  lang: `en-US`,
  meta: [],
  link: [],
  description: `This is the description for the website`,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  author: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  link: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
