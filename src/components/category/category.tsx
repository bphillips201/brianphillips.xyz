import React from "react"
import { Link } from "gatsby";
import { TContentfulCategory } from "../../utils/constants"
import * as styles from "./category.module.scss"

const Category: React.FC<TContentfulCategory> = ({ cat }) => {
  return <Link to={`/c/${cat.slug}`} className={styles.category}>{cat.title}</Link>
}

export default Category
