import React from 'react'
import * as styles from './Circles.module.scss'

const Circles: React.FC = () => {
  return (
    <div className={styles.circles}>
      <div className={`${styles.c1} border-zinc-900 dark:border-gray-50`}></div>
      <div className={`${styles.c2} border-zinc-900 dark:border-gray-50`}></div>
      <div className={`${styles.c3} border-zinc-900 dark:border-gray-50`}></div>
    </div>
  )
}

export default Circles
