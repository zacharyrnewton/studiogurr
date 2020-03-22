import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "../sass/modules/archiveIndex.module.sass"
import { RichText, Date } from 'prismic-reactjs'


const Archives = ( { archives } ) => {
  if (!archives) return null
  return (
    <div className={style.archiveWrapper}>
      {archives.map(archive => {
        return (
          <Link to={'/archive/' + archive.node._meta.uid} key={archive.node._meta.id} className={style.archive}>
            <img src={archive.node.hero_image.url} alt={archive.node.hero_image.alt}/>
            <div>
              <h2>{RichText.asText(archive.node.title)}</h2>
              <p>{RichText.asText(archive.node.location)}</p>
              <p>{Date(archive.node.year).getFullYear()}</p>
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
      allArchives(sortBy: year_DESC) {
        edges {
          node {
            title
            location
            year
            services
            hero_image
            hero_imageSharp {
              id
              uid
              childImageSharp {
                id
                fluid {
                  base64
                  tracedSVG
                  srcWebp
                  srcSetWebp
                  originalImg
                  originalName
                  presentationWidth
                  presentationHeight
                  srcSet
                  src
                  sizes
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
