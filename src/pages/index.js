import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "../sass/modules/index.module.sass"
import { RichText, Date } from "prismic-reactjs"
import Img from "gatsby-image"

const FeaturedArchive = ( { archives } ) => {
  if (!archives) return null
  return (
    <>
      {archives.map(archive => {
        return (
          <Link to={'/archive/' + archive.node._meta.uid} key={archive.node._meta.id} className={style.featuredArchive}>
            <Img className={style.image} fluid={archive.node.hero_imageSharp.childImageSharp.fluid} alt={archive.node.hero_image.alt}/>
            <div className={style.text}>
              <h2>{RichText.asText(archive.node.title)}</h2>
              <p>{archive.node.archive_number && <>◊ Project {archive.node.archive_number}</> }{archive.node.year && <> <br/>Archived {Date(archive.node.year).getFullYear()}</>}</p>
            </div>
          </Link>
        )
      })}
    </>
  )
}


export default ({ data }) => {
  const archives = data.prismic.allArchives.edges

  return (
    <Layout>
      <SEO title="Home" />
      <FeaturedArchive archives={archives} /> 
    </Layout>
  )
}


export const pageQuery = graphql`
  query SliderData {
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
