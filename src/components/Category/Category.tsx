import React from 'react'
import { Link } from 'gatsby'
import { TCategory } from '../../utils/constants'
import classnames from 'classnames'
import * as styles from './Category.module.scss'

const Category: React.FC<TCategory> = props => {
  const { title, slug, readOnly = false, ...rest } = props
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
      <Link to={`/c/${slug}`} className={categoryClasses} {...rest}>
        {title}
      </Link>
    )
  }
}

export default Category
