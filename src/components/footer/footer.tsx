import React from "react"
import Logo from "../logo/logo"
import { Link } from "gatsby"
import * as styles from "./footer.module.scss"
import language from "../../utils/language"
import Wrapper from "../wrapper/wrapper"

const Footer: React.FC = () => {
  return (
    <Wrapper as="footer" width="full" bigY={true} className={styles.footer}>
      <Logo />

      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className={styles.copyright}>{language.global.copyright}</div>
    </Wrapper>
  )
}

export default Footer
