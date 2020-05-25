import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { RichText, Date } from 'prismic-reactjs'
import style from "../sass/modules/archive.module.sass"
import Img from "gatsby-image"

const Archive = ({ data }) => {
  return (
    <Layout>
      <SEO title={RichText.asText(data.prismic.archive.title)} />
      <div className={style.archiveContentWrapper}>
        <Img className={style.heroImage} fluid={data.prismic.archive.hero_imageSharp.childImageSharp.fluid} alt={data.prismic.archive.hero_image.alt}/>
        <div className={style.bodyContentWrapper}>
          <div className={style.bodyContent}>
            <div className={style.aside}>
              <p>{data.prismic.archive.archive_number && <>◊ {data.prismic.archive.archive_number}<br /></> }Archived {Date(data.prismic.archive.year).getFullYear()}</p>
              {data.prismic.archive.services && <>{RichText.render(data.prismic.archive.services)}</>}
            </div>
            <div className={style.body}>
              {RichText.render(data.prismic.archive.title)}
              {data.prismic.archive.location && <>{RichText.render(data.prismic.archive.location)}</>}
              <p>{Date(data.prismic.archive.year).getFullYear()}</p>
              <div className={style.bodyCopy}>
                {RichText.render(data.prismic.archive.body)}
              </div>
            </div>
            <div className={style.footerContent}>
              {data.prismic.archive.collaborators &&
                <><p className={style.collaborators}>Collaborators</p>
                {RichText.render(data.prismic.archive.collaborators)}</>
              }
              {data.prismic.archive.production &&
                <><p className={style.production}>Production</p>
                {RichText.render(data.prismic.archive.production)}</>
              }
            </div>
          </div>
          <Img className={style.sideImage} fluid={data.prismic.archive.side_imageSharp.childImageSharp.fluid} alt={data.prismic.archive.side_image.alt}/>
        </div>
      </div>
      <div className={style.gallery}>
        {data.prismic.archive.gallery.map(image => {
          return (
            <Img className={style.galleryImage} fluid={image.gallery_imageSharp.childImageSharp.fluid} alt={image.gallery_image.alt} key={image.gallery_imageSharp.id} />
          )
        })}
      </div>
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
        archive_number
        side_image
        side_imageSharp {
          childImageSharp {
            id
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        services
        location
        hero_image
        hero_imageSharp {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        collaborators
        body
        gallery {
          gallery_image
          gallery_imageSharp {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
