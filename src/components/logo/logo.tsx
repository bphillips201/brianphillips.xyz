import { Link } from 'gatsby'
import React from 'react'
import * as styles from './logo.module.scss'

const Logo: React.FC = () => (
  <Link to={`/`}>
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
