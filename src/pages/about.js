import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { RichText } from 'prismic-reactjs'

import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "../sass/modules/about.module.sass"

const AboutPage = ( { data } ) => (
  <Layout>
    <SEO title="About" />
    <div className={style.aboutWrapper}>
      <div className={style.content}>
        <p>{RichText.render(data.prismic.allAbouts.edges[0].node.about_body)}</p>
        <a className={style.contact} href="mailto:david@studiogurr.com" target="_blank" rel="noopener noreferrer">Let’s work together, ay?</a>
      </div>
      <div className={style.image}><Img className={style.sideImage} fluid={data.prismic.allAbouts.edges[0].node.side_imageSharp.childImageSharp.fluid} alt={data.prismic.allAbouts.edges[0].node.side_image.alt} /></div>
      <Img className={style.fullWidthImage} fluid={data.prismic.allAbouts.edges[0].node.full_width_imageSharp.childImageSharp.fluid} alt={data.prismic.allAbouts.edges[0].node.full_width_image.alt} />
      
    </div>

  </Layout>
)


export const query = graphql`
  {
    prismic {
      allAbouts {
        edges {
          node {
            page_title
            full_width_image
            full_width_imageSharp {
              childImageSharp {
                id
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            side_image
            side_imageSharp {
              childImageSharp {
                id
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            about_body
            _linkType
          }
        }
      }
    }
  }
`

export default AboutPage


