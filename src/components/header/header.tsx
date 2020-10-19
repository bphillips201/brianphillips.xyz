import React from "react"
import Logo from "../logo/logo"
import { Link } from "gatsby"
import * as styles from "./header.module.scss"
import Wrapper from "../wrapper/wrapper"

const Header: React.FC = () => {
  return (
    <Wrapper as="header" width="full" className={styles.header}>
      <div className={styles.logo}>
        <Logo />
      </div>

      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </Wrapper>
  )
}

export default Header
