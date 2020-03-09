import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "../sass/modules/archiveIndex.module.sass"

const ArchivePage = (data) => (
  <Layout>
    <SEO title="Archive" />
    <h1 className={style.header}>Archive Index</h1>
    <StaticQuery
    query={graphql`
      {
        prismic {
          allArchives {
            edges {
              node {
                title
              }
            }
          }
        }
      }
    `}
    render={data => <p>{JSON.stringify(data, null, 4)}</p>}
  ></StaticQuery>
  </Layout>
)


export default ArchivePage
