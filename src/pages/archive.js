import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "../sass/modules/archiveIndex.module.sass"

const ArchivePage = (data) => (
  <Layout>
    <SEO title="Archive" />
    <h1 className={style.header}>Archive Index</h1>
  </Layout>
)


export default ArchivePage
