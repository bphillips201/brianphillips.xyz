import React from 'react'
import { Link } from 'gatsby'
import classnames from 'classnames'
import * as styles from './Logo.module.scss'

type TLogoProps = {
  animate?: boolean
}

const Logo: React.FC<TLogoProps> = props => {
  const { animate = false } = props
  const logoClasses = classnames({
    [styles.logo]: true,
    [styles.animate]: animate,
  })

  return (
    <Link to={`/`} title="Brian Phillips">
      <div className={logoClasses}>
        <div className={styles.topLeft}></div>
        <div className={styles.topRight}></div>
        <div className={styles.bottomLeft}></div>
        <div className={styles.bottomRight}></div>
      </div>
    </Link>
  )
}

export default Logo
