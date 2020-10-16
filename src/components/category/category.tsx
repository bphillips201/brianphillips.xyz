import React from "react"
import { Link } from "gatsby";
import { TContentfulCategories } from "../../utils/constants"
import * as styles from "./category.module.scss"

const Category: React.FC<TContentfulCategories> = ({ category }) => {
  return <Link to={`/c/${category.slug}`} className={styles.category}>{category.title}</Link>
}

export default Category
