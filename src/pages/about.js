import React from "react"
import Img from "gatsby-image"
import about from "../images/david-gurr.png"

import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "../sass/modules/about.module.sass"

const IndexPage = () => (
  <Layout>
    <SEO title="About" />
    <div className={style.aboutWrapper}>
      <div className={style.content}>
        <p>Striving for clarity, reduction, and functionality, our design process will emphasize your brand’s messaging and values. Our desire is to create brand symbols, systems, and languages that are full of meaning, convey trust, and last for many years to come. We are a research-driven, disciplined, and passionate group of individuals that function much like a band. Each member plays their own unique instrument, and each is integral to the overall sound, but we all play in unison.</p>
        <a href="mailto:david@studiogurr.com" target="_blank" rel="noopener noreferrer">Let’s work together, ay?</a>
      </div>
      <img src={about} alt="Profile Photo" width="500px" />
    </div>
  </Layout>
)

export default IndexPage
