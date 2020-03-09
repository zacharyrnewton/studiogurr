import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { RichText } from 'prismic-reactjs'



const Archive = ({ data }) => {
  return (
    <Layout>
      <SEO title={RichText.asText(data.prismic.archive.title)} />
      {RichText.render(data.prismic.archive.title)}
    </Layout>
  )
}
export default Archive

export const pageQuery = graphql`
  query MyQuery($uid: String!) {
    prismic {
      archive(uid: $uid, lang: "en-us") {
        _linkType
        production
        year
        title
        side_image
        services
        location
        hero_image
        collaborators
        body
      }
    }
  }
`
