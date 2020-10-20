import { Link } from 'gatsby'
import React from 'react'
import * as styles from './circles.module.scss'

const Circles: React.FC = () => {
  return (
    <div className={styles.circles}>
      <div className={styles.c1}></div>
      <div className={styles.c2}></div>
      <div className={styles.c3}></div>
    </div>
  )
}

export default Circles
