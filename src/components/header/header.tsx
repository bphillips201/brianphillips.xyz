import React from 'react'
import Logo from '../logo/logo'
import { Link, PageProps } from 'gatsby'
import * as styles from './header.module.scss'
import Wrapper from '../wrapper/wrapper'

const Header: React.FC<PageProps> = () => {
  const Component: any = window.location.pathname === '/' ? 'h1' : 'div'

  return (
    <Wrapper as="header" width="full" className={styles.header}>
      <Component className={styles.logo}>
        <Logo />
      </Component>

      <nav aria-label="navigation" className={styles.nav}>
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
