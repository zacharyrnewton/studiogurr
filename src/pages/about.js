import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "../sass/modules/about.module.sass"

const AboutPage = (data) => (
  <Layout>
    <SEO title="About" />
    <div className={style.aboutWrapper}>
      <div className={style.content}>
        <p>Striving for clarity, reduction, and functionality, our design process will emphasize your brand’s messaging and values. Our desire is to create brand symbols, systems, and languages that are full of meaning, convey trust, and last for many years to come. We are a research-driven, disciplined, and passionate group of individuals that function much like a band. Each member plays their own unique instrument, and each is integral to the overall sound, but we all play in unison.</p>
        <a className={style.contact} href="mailto:david@studiogurr.com" target="_blank" rel="noopener noreferrer">Let’s work together, ay?</a>
      </div>
      <StaticQuery
      query={
        graphql`
          query About {
            allFile(filter: {relativePath: {eq: "david-gurr.jpg"}}) {
              edges {
                node {
                  id
                  name
                  relativePath
                  birthTime
                  childImageSharp {
                    fluid {
                      base64
                      aspectRatio
                      src
                      srcSet
                      srcWebp
                      srcSetWebp
                      sizes
                      originalImg
                      originalName
                      presentationWidth
                      presentationHeight
                    }
                  }
                }
              }
            }
          }
        `
      }
      render={data => (
        <div className={style.image}>{ data.allFile.edges.map((edge) => (<Img fluid={edge.node.childImageSharp.fluid} alt={edge.node.name} key={edge.node.id} />)) }</div>
      )}
    />
    </div>
  </Layout>
)


export default AboutPage
