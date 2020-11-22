import React from 'react'
import { Link } from 'gatsby'
import * as styles from './Logo.module.scss'

const Logo: React.FC = () => (
  <Link to={`/`} title="Brian Phillips">
    <span className={styles.hidden}>Brian Phillips</span>
    <div className={styles.logo}>
      <div className={styles.topLeft}></div>
      <div className={styles.topRight}></div>
      <div className={styles.bottomLeft}></div>
      <div className={styles.bottomRight}></div>
    </div>
  </Link>
)

export default Logo
