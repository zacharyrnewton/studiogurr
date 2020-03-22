import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import style from "../sass/modules/404.module.sass"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1 className={style.errorTitle}>404, Page not found</h1>
    <p>You just hit a URL that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
