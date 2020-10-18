import React from "react"
import { Link } from "gatsby";
import { TCategory } from "../../utils/constants"
import * as styles from "./category.module.scss"

const Category: React.FC<TCategory> = props => {
  const { 
    title, 
    slug, 
    readOnly = false,
    ...rest
  } = props;

  if (readOnly) {
    return <div className={styles.category} {...rest}>{title}</div>
  }
  else {
    return <Link to={`/c/${slug}`} className={styles.category} {...rest}>{title}</Link>
  }
}

export default Category
