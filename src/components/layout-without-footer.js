/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

// import Header from "./header"
import Navigation from "./navigation"

import "../sass/config/config.sass"
import style from "../sass/modules/layout.module.sass"

// if (typeof window !== "undefined") {
//   // eslint-disable-next-line global-require
//   require("smooth-scroll")('a[href*="#"]')
// }

const LayoutWithoutFooter = ({ children }) => {
  return (
    <>
      <div className={style.layoutGrid} id="pageTop">
        <Navigation/>
        <main className={style.main}>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutWithoutFooter
