import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "../sass/modules/archiveIndex.module.sass"
import { RichText, Date } from 'prismic-reactjs'
import Img from "gatsby-image"

const Archives = ( { archives } ) => {
  if (!archives) return null
  return (
    <div className={style.archiveWrapper}>
      {archives.map(archive => {
        return (
          <Link to={'/archive/' + archive.node._meta.uid} key={archive.node._meta.id} className={style.archive}>
            <Img className={style.thumbnail} fluid={archive.node.hero_imageSharp.childImageSharp.fluid} alt={archive.node.hero_image.alt}/>
            <div>
              <h2>{RichText.asText(archive.node.title)}</h2>
              <p>{RichText.asText(archive.node.location)}</p>
        <p>{archive.node.archive_number && <>◊ {archive.node.archive_number}</> }{archive.node.year && <> Archived {Date(archive.node.year).getFullYear()}</>}</p>
              {RichText.render(archive.node.services)}
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default ({ data }) => {
  const archives = data.prismic.allArchives.edges

  return (
    <Layout>
      <SEO title="Archive" />
      <Archives archives={archives} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query ArchiveIndex {
    prismic {
      allArchives(sortBy: archive_number_DESC) {
        edges {
          node {
            title
            location
            year
            archive_number
            services
            hero_image
            hero_imageSharp {
              id
              uid
              childImageSharp {
                id
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
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
