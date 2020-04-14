import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "../sass/modules/contact.module.sass"

const ContactPage = ( { data } ) => (
  <Layout>
    <SEO title="Contact" />
    <div className={style.contactWrapper}>
      <div className={style.content}>
        <p><a href="tel:+1833-638-4877" target="_blank" rel="noopener noreferrer">+1 (833) 638-4877</a><br /><a href="mailto:david@studiogurr.com" target="_blank" rel="noopener noreferrer">David@StudioGurr.com</a><br /><br /><a href="https://goo.gl/maps/2iCcVYhYfqkwpkcq5" target="_blank" rel="noopener noreferrer">980 N Federal HWY<br />Suite 110<br />Boca Raton, Florida, USA<br />33432</a><br /><br /><a href="https://instagram.com/studiogurr" target="_blank" rel="noopener noreferrer">@StudioGurr</a></p>
        <a className={style.contact} href="mailto:david@studiogurr.com" target="_blank" rel="noopener noreferrer">Let’s work together, ay?</a>
      </div>
      <div className={style.image}><Img className={style.sideImage} fluid={data.prismic.allContacts.edges[0].node.side_imageSharp.childImageSharp.fluid} alt={data.prismic.allContacts.edges[0].node.side_image.alt} /></div>
      <Img className={style.fullWidthImage} fluid={data.prismic.allContacts.edges[0].node.full_width_imageSharp.childImageSharp.fluid} alt={data.prismic.allContacts.edges[0].node.full_width_image.alt} />
    </div>
  </Layout>
)

export const query = graphql`
  {
    prismic {
      allContacts {
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
            _linkType
          }
        }
      }
    }
  }
`

export default ContactPage
