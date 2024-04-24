import React from "react"
import { graphql } from "gatsby"
import {GatsbyImage} from "gatsby-plugin-image"
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
      <div className={style.image}><GatsbyImage className={style.sideImage} image={data.prismicAbout.data.side_image.gatsbyImageData} alt={data.prismicAbout.data.side_image.alt} /></div>
      <GatsbyImage className={style.fullWidthImage} image={data.prismicAbout.data.full_width_image.gatsbyImageData} alt={data.prismicAbout.data.full_width_image.alt} />
    </div>
  </Layout>
)


export const query = graphql`
  {
    prismicAbout {
      data {
        about_body {
          html
          richText
          text
        }
        full_width_image {
          alt
          gatsbyImageData
        }
        page_title {
          text
          richText
          html
        }
        side_image {
          alt
          gatsbyImageData
        }
      }
    }
  }
`

export default AboutPage