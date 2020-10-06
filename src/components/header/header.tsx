import React from "react"
import Logo from "../logo/logo"
import * as styles from "./header.module.scss"

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Logo />
    </header>
  )
}

export default Header
