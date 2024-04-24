import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as style from "../sass/modules/archiveIndex.module.sass"
import { Date } from 'prismic-reactjs'
import {GatsbyImage} from "gatsby-plugin-image"

const Archives = ({ archives }) => {
  if (!archives) return null
  return (
    <div className={style.archiveWrapper}>
      {archives.map(archive => {
        return (
          <Link to={'/work/' + archive.node.uid} key={archive.node.id} className={style.archive}>
            <GatsbyImage className={style.thumbnail} image={archive.node.data.hero_image.gatsbyImageData} alt={archive.node.data.hero_image.alt} />
            <div>
              <h2>{archive.node.data.title.text}</h2>
              <p>{archive.node.data.location.text}</p>
              <p>{Date(archive.node.data.year).getFullYear()}</p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

const Work = ({ data }) => {
  const archives = data.allPrismicArchive.edges

  return (
    <Layout>
      <Seo title="Work" />
      <Archives archives={archives} />
    </Layout>
  )
}

export default Work;

export const pageQuery = graphql`
  query ArchiveIndex {
    allPrismicArchive(sort: {data: {year: DESC}}) {
      edges {
        node {
          data {
            archive_number
            year
            body {
              text
              html
              richText
            }
            location {
              text
              richText
              html
            }
            title {
              richText
              text
              html
            }
            services {
              text
              richText
              html
            }
            hero_image {
              alt
              gatsbyImageData
            }
          }
          uid
          id
        }
      }
    }
  }
`
