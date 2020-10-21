import React from 'react'
import { TCategory } from '../../utils/constants'
import * as styles from './categoryList.module.scss'
import Category from '../category/category'

type TCategoryList = {
  categories: Array<TCategory>
}

const CategoryList: React.FC<TCategoryList> = ({ categories }) => {
  return (
    <ul className={styles.categoryList}>
      {categories.map(cat => (
        <li key={cat.id}>
          <Category title={cat.title} slug={cat.slug} />
        </li>
      ))}
    </ul>
  )
}

export default CategoryList
