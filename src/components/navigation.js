import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import style from "../sass/modules/navigation.module.sass"


function mobileNavToggle() {
  const navItems = document.getElementById('navItems');
  const body = document.body;
  if (navItems.className === style.navigation) {
    navItems.className = style.navigation + ' ' + style.active;
    body.className = 'active';
  } else {
    navItems.className = style.navigation;
    body.className = ' ';
  }
}

function closeNav() {
  const body = document.body;
  body.className = ' ';
}

const Navigation = () => (
  <nav className={style.navigation} id="navItems">
    <Link to="/" aria-label="Home" className={style.logo} onClick={closeNav}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 73.515">
        <g transform="translate(0)">
          <path d="M-47.854-54.833a7.342,7.342,0,0,1-7.352,7.351h-8.871a7.3,7.3,0,0,1-7.3-7.351v-19.6a7.3,7.3,0,0,1,7.3-7.351h8.871a7.342,7.342,0,0,1,7.352,7.351h-4.9a2.5,2.5,0,0,0-2.451-2.5h-8.871a2.459,2.459,0,0,0-2.4,2.5v19.6a2.416,2.416,0,0,0,2.4,2.45h8.871a2.457,2.457,0,0,0,2.451-2.45v-7.352h-6.861v-4.9h11.763Z" transform="translate(71.379 81.789)"/>
        </g>
        <g transform="translate(28.426)">
          <path d="M-47.854-54.833a7.342,7.342,0,0,1-7.352,7.351h-8.822a7.341,7.341,0,0,1-7.351-7.351V-81.789h4.9v26.956a2.49,2.49,0,0,0,2.45,2.45h8.822a2.49,2.49,0,0,0,2.451-2.45V-81.789h4.9Z" transform="translate(71.379 81.789)"/>
        </g>
        <g transform="translate(0 39.208)">
          <path d="M-47.854-22.431a8.575,8.575,0,0,1-6.715,8.38l5.342,6.519A5.111,5.111,0,0,1-47.8-3.562V.849h-4.9v-4.9l-8.087-9.8h-5.686V.849h-4.9V-33.458h14.948a8.555,8.555,0,0,1,8.577,8.577Zm-4.9-2.45a3.713,3.713,0,0,0-3.676-3.725H-66.478v9.851h10.047a3.7,3.7,0,0,0,3.676-3.676Z" transform="translate(71.379 33.458)"/>
        </g>
        <g transform="translate(28.426 39.208)">
          <path d="M-47.854-22.431a8.575,8.575,0,0,1-6.715,8.38l5.342,6.519A5.111,5.111,0,0,1-47.8-3.562V.849h-4.9v-4.9l-8.087-9.8h-5.686V.849h-4.9V-33.458h14.948a8.555,8.555,0,0,1,8.577,8.577Zm-4.9-2.45a3.713,3.713,0,0,0-3.676-3.725H-66.478v9.851h10.047a3.7,3.7,0,0,0,3.676-3.676Z" transform="translate(71.379 33.458)"/>
        </g>
      </svg>
    </Link>
    <ul>
      <li><Link to="/" className={style.navigationListTitle} onClick={closeNav}><span className={style.line}></span><b>Home</b></Link></li>
      <li><Link to="/work" className={style.navigationListTitle} onClick={closeNav}><span className={style.line}></span><b>Work</b></Link></li>
      {/*<li><Link to="/blog" className={style.navigationListTitle}><span className={style.line}></span><b>Blog</b></Link></li>*/}
      <li><Link to="/about" className={style.navigationListTitle} onClick={closeNav}><span className={style.line}></span><b>About</b></Link></li>
      <li><Link to="/contact" className={style.navigationListTitle} onClick={closeNav}><span className={style.line}></span><b>Contact</b></Link></li>
    </ul>
    <button className={style.hamburgerOpen} onClick={mobileNavToggle}>Toggle Navigation Open
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
        <g transform="translate(-431 -50)">
          <g transform="translate(439 58)">
            <path d="M0,0H24V24H0Z" fill="none"/>
            <path className={style.path} d="M3,18H21V16H3Zm0-5H21V11H3ZM3,6V8H21V6Z" fill="#1f2127"/>
          </g>
        </g>
      </svg>
    </button>
    <button className={style.hamburgerClose} id="hamburgerClose" onClick={mobileNavToggle}>Toggle Navigation Closed
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path className={style.path} d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
      </svg>
    </button>
  </nav>
)

// Navigation.propTypes = {
//   siteTitle: PropTypes.string,
// }
//
// Navigation.defaultProps = {
//   siteTitle: ``,
// }

export default Navigation
