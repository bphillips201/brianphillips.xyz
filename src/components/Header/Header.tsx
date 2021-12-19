import React from 'react'
import Logo from '../Logo/Logo'
import { Link } from 'gatsby'
import Wrapper from '../Wrapper/Wrapper'
import { useLocation } from '@reach/router'
import * as styles from './Header.module.scss'

const Header: React.FC = () => {
  const isHome = useLocation().pathname === '/'
  const Component: any = isHome ? 'h1' : 'div'

  return (
    <Wrapper as="header" color="white" className={styles.header}>
      <Component className={styles.logo}>
        <Logo animate={isHome} />
      </Component>
    </Wrapper>
  )
}

export default Header
