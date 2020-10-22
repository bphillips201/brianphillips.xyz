import React from 'react'
import Logo from '../logo/logo'
import { Link } from 'gatsby'
import Wrapper from '../wrapper/wrapper'
import { useLocation } from '@reach/router'
import * as styles from './header.module.scss'

const Header: React.FC = () => {
  const Component: any = useLocation().pathname === '/' ? 'h1' : 'div'

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
