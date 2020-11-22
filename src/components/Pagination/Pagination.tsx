import React, { AllHTMLAttributes } from 'react'
import language from '../../utils/language'
import classnames from 'classnames'
import ActionLink from '../ActionLink/ActionLink'
import Chevron from '../ActionLink/Chevron'
import * as styles from './Pagination.module.scss'

type PaginationProps = AllHTMLAttributes<HTMLElement> & {
  numPages: number
  currentPage: number
  path: string
}

const Pagination: React.FC<PaginationProps> = props => {
  const { numPages, currentPage, path } = props
  const isHome = path === '/'
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
        <ActionLink
          to={newerPostPath}
          arrow="left"
          text={language.posts.newerPosts}
          className={styles.leftLink}
        />
      )}
      {olderPostPath.length > 0 && (
        <ActionLink
          to={olderPostPath}
          text={language.posts.olderPosts}
          className={styles.rightLink}
        />
      )}
      {isHome && (
        <ActionLink
          to={'/blog'}
          text={language.homePage.viewBlog}
          className={styles.rightLink}
        />
      )}
    </section>
  )
}

export default Pagination
