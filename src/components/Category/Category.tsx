import React from 'react'
import { Link } from 'gatsby'
import { TCategory } from '../../utils/constants'
import classnames from 'classnames'
import * as styles from './Category.module.scss'

type TCategoryProps = {
  title: string
  path: string
  readOnly?: boolean
}

const Category: React.FC<TCategoryProps> = props => {
  const { title, path, readOnly = false, ...rest } = props
  const categoryClasses = classnames({
    [styles.category]: true,
    [styles.readOnly]: readOnly,
  })

  if (readOnly) {
    return (
      <div className={categoryClasses} {...rest}>
        {title}
      </div>
    )
  } else {
    return (
      <Link to={path} className={categoryClasses} {...rest}>
        {title}
      </Link>
    )
  }
}

export default Category
