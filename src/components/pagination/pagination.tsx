import React, { AllHTMLAttributes } from 'react'
import { Link } from 'gatsby'
import language from '../../utils/language'
import * as styles from './pagination.module.scss'
import classnames from 'classnames'

type PaginationProps = AllHTMLAttributes<HTMLElement> & {
  numPages: number
  currentPage: number
  path: string
}

const Pagination: React.FC<PaginationProps> = props => {
  const { numPages, currentPage, path } = props
  const basePath = path.replace(/(\/$)|(\/\d+)/g, '')
  const olderPostPath =
    currentPage < numPages ? `${basePath}/${currentPage + 1}` : ''
  const newerPostPath =
    currentPage > 2
      ? `${basePath}/${currentPage - 1}`
      : currentPage === 2
      ? basePath
      : ''

  const paginationClasses = classnames({
    [styles.pagination]: true,
    [styles.firstPage]: numPages > 1 && currentPage === 1,
  })

  return (
    <section className={paginationClasses}>
      {newerPostPath.length > 0 && (
        <Link to={newerPostPath} style={{ justifySelf: 'flex-start' }}>
          {language.blog.newerPosts}
        </Link>
      )}
      {olderPostPath.length > 0 && (
        <Link to={olderPostPath} style={{ justifySelf: 'flex-end' }}>
          {language.blog.olderPosts}
        </Link>
      )}
    </section>
  )
}

export default Pagination
