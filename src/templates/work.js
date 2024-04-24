import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Date, RichText } from 'prismic-reactjs'
import * as style from "../sass/modules/archive.module.sass"
import {GatsbyImage} from "gatsby-plugin-image"

const Archive = ({ data }) => {
  return (
    <Layout>
      <Seo title={data.prismicArchive.data.title.text} />
      <div className={style.archiveContentWrapper}>
        <GatsbyImage className={style.heroImage} image={data.prismicArchive.data.hero_image.gatsbyImageData} alt={data.prismicArchive.data.hero_image.alt} />
        <div className={style.bodyContentWrapper}>
          <div className={style.bodyContent}>
            <div className={style.aside}>
              <p>{data.prismicArchive.data.archive_number && <>◊ {data.prismicArchive.data.archive_number}<br /></>}Archived {Date(data.prismicArchive.data.year).getFullYear()}</p>
              {data.prismicArchive.data.services && <><RichText render={data.prismicArchive.data.services.richText} /></>}
            </div>
            <div className={style.body}>
              <RichText render={data.prismicArchive.data.title.richText} />
              {data.prismicArchive.data.location && <><RichText render={data.prismicArchive.data.location.richText} /></>}
              <p>{Date(data.prismicArchive.data.year).getFullYear()}</p>
              <div className={style.bodyCopy}>
                {data.prismicArchive.data.body.text}
              </div>
            </div>
            <div className={style.footerContent}>
              {data.prismicArchive.data.collaborators &&
                <><p className={style.collaborators}>Collaborators</p>
                  <RichText render={data.prismicArchive.data.collaborators.richText} /></>
              }
              {data.prismicArchive.data.production &&
                <><p className={style.production}>Production</p>
                  <RichText render={data.prismicArchive.data.production.richText} /></>
              }
            </div>
          </div>
          <GatsbyImage className={style.sideImage} image={data.prismicArchive.data.side_image.gatsbyImageData} alt={data.prismicArchive.data.side_image.alt} />
        </div>
      </div>
      <div className={style.gallery}>
        {data.prismicArchive.data.gallery.map(image => {
          return (
            <GatsbyImage className={style.galleryImage} image={image.gallery_image.gatsbyImageData} alt={image.gallery_image.alt} key={image.gallery_image.url} />
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
          richText
          text
        }
        collaborators {
          text
          richText
          html
        }
        gallery {
          gallery_image {
            alt
            url
            gatsbyImageData
          }
        }
        hero_image {
          alt
          gatsbyImageData
        }
        location {
          html
          richText
          text
        }
        production {
          text
          richText
          html
        }
        services {
          text
          richText
          html
        }
        side_image {
          alt
          gatsbyImageData
        }
        title {
          html
          richText
          text
        }
        year
      }
    }
  }
`
