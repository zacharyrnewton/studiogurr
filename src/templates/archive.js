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
        <Img fluid={data.prismic.archive.hero_imageSharp.childImageSharp.fluid} alt={data.prismic.archive.hero_image.alt}/>
        <div className={style.bodyContentWrapper}>
          <div className={style.bodyContent}>
            <div className={style.aside}>
              <p>◊ <br />Archived {Date(data.prismic.archive.year).getFullYear()}</p>
              {RichText.render(data.prismic.archive.services)}
            </div>
            <div className={style.body}>
              {RichText.render(data.prismic.archive.title)}
              {RichText.render(data.prismic.archive.location)}
              <div className={style.bodyCopy}>
                {RichText.render(data.prismic.archive.body)}
              </div>
            </div>
            <div className={style.footerContent}>
              <p>Collaborators</p>
              {RichText.render(data.prismic.archive.collaborators)}
              <p className={style.production}>Production</p>
              {RichText.render(data.prismic.archive.production)}
            </div>
          </div>
          <Img fluid={data.prismic.archive.side_imageSharp.childImageSharp.fluid} alt={data.prismic.archive.side_image.alt}/>
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
        side_image
        side_imageSharp {
          id
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
          id
          childImageSharp {
            id
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
            id
            childImageSharp {
              id
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
