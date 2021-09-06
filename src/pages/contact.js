import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as style from "../sass/modules/contact.module.sass"

const ContactPage = ({ data }) => (
  <Layout>
    <Seo title="Contact" />
    <div className={style.contactWrapper}>
      <div className={style.content}>
        <p><a href="tel:+1833-638-4877" target="_blank" rel="noopener noreferrer">+1 (833) 638-4877</a><br /><a href="mailto:david@studiogurr.com" target="_blank" rel="noopener noreferrer">David@StudioGurr.com</a><br /><br /><a href="https://goo.gl/maps/NhrRK2anwCBh4A6U7" target="_blank" rel="noopener noreferrer">1016 Clare Ave Suite 5<br />West Palm Beach, FL 33401</a><br /><br /><a href="https://instagram.com/studiogurr" target="_blank" rel="noopener noreferrer">@StudioGurr</a></p>
        <a className={style.contact} href="mailto:david@studiogurr.com" target="_blank" rel="noopener noreferrer">Let’s work together, ay?</a>
      </div>
      <div className={style.image}><Img className={style.sideImage} fluid={data.prismicContact.data.side_image.fluid} alt={data.prismicContact.data.side_image.alt} /></div>
      <Img className={style.fullWidthImage} fluid={data.prismicContact.data.full_width_image.fluid} alt={data.prismicContact.data.full_width_image.alt} />
    </div>
  </Layout>
)

export const query = graphql`
  {
    prismicContact {
      data {
        full_width_image {
          fluid {
            aspectRatio
            base64
            srcWebp
            srcSetWebp
            srcSet
            src
            sizes
          }
          alt
        }
        page_title {
          text
          raw
          html
        }
        side_image {
          fluid {
            aspectRatio
            base64
            sizes
            src
            srcSet
            srcSetWebp
            srcWebp
          }
          alt
        }
      }
    }
  }
`

export default ContactPage
