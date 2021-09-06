import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as style from "../sass/modules/about.module.sass"

const AboutPage = ({ data }) => (
  <Layout>
    <Seo title="About" />
    <div className={style.aboutWrapper}>
      <div className={style.content}>
        <p>{data.prismicAbout.data.about_body.text}</p>
        <a className={style.contact} href="mailto:david@studiogurr.com" target="_blank" rel="noopener noreferrer">Let’s work together, ay?</a>
      </div>
      <div className={style.image}><Img className={style.sideImage} fluid={data.prismicAbout.data.side_image.fluid} alt={data.prismicAbout.data.side_image.alt} /></div>
      <Img className={style.fullWidthImage} fluid={data.prismicAbout.data.full_width_image.fluid} alt={data.prismicAbout.data.full_width_image.alt} />
    </div>
  </Layout>
)


export const query = graphql`
  {
    prismicAbout {
      data {
        about_body {
          html
          raw
          text
        }
        full_width_image {
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
        page_title {
          text
          raw
          html
        }
        side_image {
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
      }
    }
  }
`

export default AboutPage