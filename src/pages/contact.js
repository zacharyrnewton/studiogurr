import React from "react"
import Img from "gatsby-image"
import contact from "../images/contact.png"

import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "../sass/modules/contact.module.sass"

const IndexPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div className={style.contactWrapper}>
      <div className={style.content}>
        <p><a href="tel:+1954-632-6367" target="_blank" rel="noopener noreferrer">+1 (954) 632-6367</a><br /><a href="mailto:david@studiogurr.com" target="_blank" rel="noopener noreferrer">David@StudioGurr.com</a><br /><br /><a href="https://goo.gl/maps/2iCcVYhYfqkwpkcq5" target="_blank" rel="noopener noreferrer">980 N Federal HWY<br />Suite 110<br />Boca Raton, Florida, USA<br />33432</a><br /><br /><a href="https://instagram.com/studiogurr" target="_blank" rel="noopener noreferrer">@StudioGurr</a></p>
        <a href="mailto:david@studiogurr.com" target="_blank" rel="noopener noreferrer">Let’s work together, ay?</a>
      </div>
      <img src={contact} alt="Profile Photo" width="500px" />
    </div>
  </Layout>
)

export default IndexPage
