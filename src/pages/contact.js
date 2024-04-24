import React from "react"
import { graphql } from "gatsby"
import {GatsbyImage} from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as style from "../sass/modules/contact.module.sass"

const ContactPage = ({ data }) => (
  <Layout>
    <Seo title="Contact" />
    <div className={style.contactWrapper}>
      <div className={style.content}>
        <p>
          <a href="tel:+1833-638-4877" target="_blank" rel="noopener noreferrer">+1 (833) 638-4877</a>
          <br />
          <a href="mailto:david@studiogurr.com" target="_blank" rel="noopener noreferrer">David@StudioGurr.com</a>
          <br />
          <br />
          {/* <a href="https://goo.gl/maps/NhrRK2anwCBh4A6U7" target="_blank" rel="noopener noreferrer">1016 Clare Ave Suite 5<br />West Palm Beach, FL 33401</a> */}
          "The Sunshine State"<br />West Palm Beach, Florida
          <br />
          <br />
          <a href="https://instagram.com/studiogurr" target="_blank" rel="noopener noreferrer">@StudioGurr</a>
        </p>
        <a className={style.contact} href="mailto:david@studiogurr.com" target="_blank" rel="noopener noreferrer">Let’s work together, ay?</a>
      </div>
      <div className={style.image}><GatsbyImage className={style.sideImage} image={data.prismicContact.data.side_image.gatsbyImageData} alt={data.prismicContact.data.side_image.alt} /></div>
      <GatsbyImage className={style.fullWidthImage} image={data.prismicContact.data.full_width_image.gatsbyImageData} alt={data.prismicContact.data.full_width_image.alt} />
    </div>
  </Layout>
)

export const query = graphql`
  {
    prismicContact {
      data {
        full_width_image {
          gatsbyImageData
          alt
        }
        page_title {
          text
          richText
          html
        }
        side_image {
          gatsbyImageData
          alt
        }
      }
    }
  }
`

export default ContactPage
