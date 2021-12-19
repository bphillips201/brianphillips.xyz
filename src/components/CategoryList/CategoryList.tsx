import React from 'react'
import { TCategory } from '../../utils/constants'
import Category from '../Category/Category'
import * as styles from './CategoryList.module.scss'

type TCategoryList = {
  categories: Array<TCategory>
}

const CategoryList: React.FC<TCategoryList> = ({ categories }) => {
  return (
    <>
      <h4>Categories</h4>
      <ul className={styles.categoryList} data-testid="category-list">
        {categories.map(cat => (
          <li key={cat.id}>
            <Category title={cat.title} path={cat.fields.path} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default CategoryList
