import React from "react"
import PropTypes from "prop-types"
import Navigation from "./navigation"
import Footer from "./footer"
import * as config from "../sass/config/config.sass"
import * as style from "../sass/modules/layout.module.sass"

// Window Resize Animation Stopper
if (typeof document !== 'undefined') {
  let resizeTimer;
  window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove("resize-animation-stopper");
    }, 400);
  });
};
// Smooth Scroll
// if (typeof window !== "undefined") {
//   // eslint-disable-next-line global-require
//   require("smooth-scroll")('a[href*="#"]')
// }

const Layout = ({ children }) => {
  return (
    <>
      <div className={style.layoutGrid} id="pageTop">
        <Navigation />
        <main className={config.main}>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
