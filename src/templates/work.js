import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Date, RichText } from 'prismic-reactjs'
import * as style from "../sass/modules/archive.module.sass"
import Img from "gatsby-image"

const Archive = ({ data }) => {
  return (
    <Layout>
      <Seo title={data.prismicArchive.data.title.text} />
      <div className={style.archiveContentWrapper}>
        <Img className={style.heroImage} fluid={data.prismicArchive.data.hero_image.fluid} alt={data.prismicArchive.data.hero_image.alt} />
        <div className={style.bodyContentWrapper}>
          <div className={style.bodyContent}>
            <div className={style.aside}>
              <p>{data.prismicArchive.data.archive_number && <>◊ {data.prismicArchive.data.archive_number}<br /></>}Archived {Date(data.prismicArchive.data.year).getFullYear()}</p>
              {data.prismicArchive.data.services && <><RichText render={data.prismicArchive.data.services.raw} /></>}
            </div>
            <div className={style.body}>
              <RichText render={data.prismicArchive.data.title.raw} />
              {data.prismicArchive.data.location && <><RichText render={data.prismicArchive.data.location.raw} /></>}
              <p>{Date(data.prismicArchive.data.year).getFullYear()}</p>
              <div className={style.bodyCopy}>
                {data.prismicArchive.data.body.text}
              </div>
            </div>
            <div className={style.footerContent}>
              {data.prismicArchive.data.collaborators &&
                <><p className={style.collaborators}>Collaborators</p>
                  <RichText render={data.prismicArchive.data.collaborators.raw} /></>
              }
              {data.prismicArchive.data.production &&
                <><p className={style.production}>Production</p>
                  <RichText render={data.prismicArchive.data.production.raw} /></>
              }
            </div>
          </div>
          <Img className={style.sideImage} fluid={data.prismicArchive.data.side_image.fluid} alt={data.prismicArchive.data.side_image.alt} />
        </div>
      </div>
      <div className={style.gallery}>
        {data.prismicArchive.data.gallery.map(image => {
          return (
            <Img className={style.galleryImage} fluid={image.gallery_image.fluid} alt={image.gallery_image.alt} key={image.gallery_image.url} />
          )
        })}
      </div>
    </Layout>
  )
}
export default Archive

export const pageQuery = graphql`
  query MyQuery($uid: String!) {
    prismicArchive(uid: {eq: $uid}, lang: {eq: "en-us"}) {
      data {
        archive_number
        body {
          html
          raw
          text
        }
        collaborators {
          text
          raw
          html
        }
        gallery {
          gallery_image {
            alt
            url
            fluid {
              aspectRatio
              base64
              sizes
              src
              srcSet
              srcSetWebp
              srcWebp
            }
          }
        }
        hero_image {
          alt
          fluid {
            aspectRatio
            base64
            sizes
            src
            srcSet
            srcSetWebp
            srcWebp
          }
        }
        location {
          html
          raw
          text
        }
        production {
          text
          raw
          html
        }
        services {
          text
          raw
          html
        }
        side_image {
          alt
          fluid {
            aspectRatio
            base64
            sizes
            src
            srcSet
            srcSetWebp
            srcWebp
          }
        }
        title {
          html
          raw
          text
        }
        year
      }
    }
  }
`
