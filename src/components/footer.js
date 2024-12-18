import { Link } from "gatsby"
import React from "react"
import * as style from "../sass/modules/footer.module.sass"

const Footer = () => (
  <footer className={style.footer}>
    <Link to="/" aria-label="Home" className={style.logo}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 73.515">
        <g transform="translate(0)">
          <path d="M-47.854-54.833a7.342,7.342,0,0,1-7.352,7.351h-8.871a7.3,7.3,0,0,1-7.3-7.351v-19.6a7.3,7.3,0,0,1,7.3-7.351h8.871a7.342,7.342,0,0,1,7.352,7.351h-4.9a2.5,2.5,0,0,0-2.451-2.5h-8.871a2.459,2.459,0,0,0-2.4,2.5v19.6a2.416,2.416,0,0,0,2.4,2.45h8.871a2.457,2.457,0,0,0,2.451-2.45v-7.352h-6.861v-4.9h11.763Z" transform="translate(71.379 81.789)" fill="#fff" />
        </g>
        <g transform="translate(28.426)">
          <path d="M-47.854-54.833a7.342,7.342,0,0,1-7.352,7.351h-8.822a7.341,7.341,0,0,1-7.351-7.351V-81.789h4.9v26.956a2.49,2.49,0,0,0,2.45,2.45h8.822a2.49,2.49,0,0,0,2.451-2.45V-81.789h4.9Z" transform="translate(71.379 81.789)" fill="#fff" />
        </g>
        <g transform="translate(0 39.208)">
          <path d="M-47.854-22.431a8.575,8.575,0,0,1-6.715,8.38l5.342,6.519A5.111,5.111,0,0,1-47.8-3.562V.849h-4.9v-4.9l-8.087-9.8h-5.686V.849h-4.9V-33.458h14.948a8.555,8.555,0,0,1,8.577,8.577Zm-4.9-2.45a3.713,3.713,0,0,0-3.676-3.725H-66.478v9.851h10.047a3.7,3.7,0,0,0,3.676-3.676Z" transform="translate(71.379 33.458)" fill="#fff" />
        </g>
        <g transform="translate(28.426 39.208)">
          <path d="M-47.854-22.431a8.575,8.575,0,0,1-6.715,8.38l5.342,6.519A5.111,5.111,0,0,1-47.8-3.562V.849h-4.9v-4.9l-8.087-9.8h-5.686V.849h-4.9V-33.458h14.948a8.555,8.555,0,0,1,8.577,8.577Zm-4.9-2.45a3.713,3.713,0,0,0-3.676-3.725H-66.478v9.851h10.047a3.7,3.7,0,0,0,3.676-3.676Z" transform="translate(71.379 33.458)" fill="#fff" />
        </g>
      </svg>
    </Link>
    <ul className={style.footerListWrapper}>
      {/*<li className={style.footerListContainer}>
        <ul className={style.footerList}>
          <li><span className={style.line}></span></li>
          <li className={style.footerListTitle}><Link to="#pageTop">↑</Link></li>
        </ul>
      </li>
      <li className={style.footerListContainer}>
        <ul className={style.footerList}>
          <li><span className={style.line}></span></li>
          <li className={style.footerListTitle}><b>Sneak peak</b></li>
          <li><a href="https://instagram.com/studiogurr" target="_blank" rel="noopener noreferrer">@StudioGurr</a></li>
          <li>© {new Date().getFullYear()} Studio Gurr</li>
        </ul>
      </li>*/}
      <li className={style.footerListContainer}>
        <ul className={style.footerList}>
          <li><span className={style.line}></span></li>
          <li className={style.footerListTitle}><b>Start a project</b></li>
          <li><a href="tel:+1-888-973-4457" target="_blank" rel="noopener noreferrer">+1 (888) 973-4557</a></li>
          <li><a href="mailto:david@studiogurr.com" target="_blank" rel="noopener noreferrer">David@StudioGurr.com</a></li>
        </ul>
      </li>
      <li className={style.footerListContainer}>
        <ul className={style.footerList}>
          <li><span className={style.line}></span></li>
          <li className={style.footerListTitle}><b>By appointment only</b></li>
          {/* <li><a href="https://goo.gl/maps/NhrRK2anwCBh4A6U7" target="_blank" rel="noopener noreferrer">1016 Clare Ave Suite 5<br />West Palm Beach, FL 33401</a></li> */}
          <li><p>"The Sunshine State"<br />West Palm Beach, Florida</p></li>
          
        </ul>
      </li>
      <li className={style.footerListContainer}>
      </li>
      <li className={style.footerListContainer}>
      </li>
      {/*<li className={style.footerListContainer}>
        <ul className={style.footerList}>
          <li><Link to="/work" className={style.navigationListTitle}><span className={style.line}></span><b>Work</b></Link></li>
        </ul>
      </li>
      <li className={style.footerListContainer}>
        <ul className={style.footerList}>
          <li><Link to="/about" className={style.navigationListTitle}><span className={style.line}></span><b>About</b></Link></li>
        </ul>
      </li>
      <li className={style.footerListContainer}>
        <ul className={style.footerList}>
          <li><Link to="/contact" className={style.navigationListTitle}><span className={style.line}></span><b>Contact</b></Link></li>
        </ul>
      </li>*/}
    </ul>
  </footer>
)

export default Footer
