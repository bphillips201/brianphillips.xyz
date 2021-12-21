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
        <div className={`${styles.topLeft} bg-gray-900 dark:bg-gray-50`}></div>
        <div className={`${styles.topRight} bg-gray-900 dark:bg-gray-50`}></div>
        <div
          className={`${styles.bottomLeft} bg-gray-900 dark:bg-gray-50`}
        ></div>
        <div
          className={`${styles.bottomRight} bg-gray-900 dark:bg-gray-50`}
        ></div>
      </div>
    </Link>
  )
}

export default Logo
