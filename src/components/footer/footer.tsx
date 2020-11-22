import React from 'react'
import Logo from '../Logo/Logo'
import { Link } from 'gatsby'
import language from '../../utils/language'
import Wrapper from '../Wrapper/Wrapper'
import * as styles from './Footer.module.scss'

const Footer: React.FC = () => {
  return (
    <Wrapper as="footer" width="full" bigY={true} className={styles.footer}>
      <Logo />

      <nav className={styles.nav}>
        <ul>
          <li>
            <Link activeClassName={styles.active} to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link activeClassName={styles.active} to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>

      <div className={styles.copyright}>{language.global.copyright}</div>
    </Wrapper>
  )
}

export default Footer
