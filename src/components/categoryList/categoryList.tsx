import React from "react"
import { TCategory } from "../../utils/constants";
import { Link } from "gatsby"
import * as styles from "./categoryList.module.scss";

type TCategoryList = {
    categories: Array<TCategory>
}

const CategoryList: React.FC<TCategoryList> = ({ categories }) => {
  return (
    <ul className={styles.categoryList}>
        {categories.map(cat => (
            <li key={cat.id}>
                <Link to={`/c/${cat.slug}`}>{cat.title}</Link>
            </li>
        ))}
    </ul>
  )
}

export default CategoryList