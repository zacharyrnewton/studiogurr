import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ( { data } ) => (
  <Layout>
    <SEO title="Home" />
    <h1>Coming soon</h1>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query SliderData {
    prismic {
      allArchives {
        edges {
          node {
            title
            hero_image
            _meta {
              id
              uid
            }
          }
        }
      }
    }
  }
`
