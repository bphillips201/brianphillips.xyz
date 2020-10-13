import React from "react"
import Logo from "../logo/logo"
import { Link } from "gatsby"
import * as styles from "./header.module.scss"

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Logo />
      </div>

      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/writing">Writing</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
