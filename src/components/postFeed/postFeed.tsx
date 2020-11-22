import React from 'react'
import { TCategory, TPost } from '../../utils/constants'
import language from '../../utils/language'
import CategoryList from '../CategoryList/CategoryList'
import Pagination from '../Pagination/Pagination'
import PostList from '../PostList/PostList'
import SectionHeader from '../SectionHeader/SectionHeader'
import * as styles from './PostFeed.module.scss'

type TPostFeedProps = {
  posts: TPost[]
  categories: TCategory[]
  path: string
  numPages?: number
  currentPage?: number
}

const PostFeed: React.FC<TPostFeedProps> = props => {
  const { posts, categories, path, numPages = 0, currentPage = 0 } = props

  return (
    <section className={styles.postFeed}>
      <div className={styles.posts}>
        {path === '/' && (
          <SectionHeader as="h3">{language.homePage.latestPosts}</SectionHeader>
        )}
        {posts.length > 0 ? (
          <>
            <PostList posts={posts} />
            <Pagination
              currentPage={currentPage}
              numPages={numPages}
              path={path}
            />
          </>
        ) : (
          <h3>No posts found for this category</h3>
        )}
      </div>

      <div className={styles.categories}>
        <SectionHeader as="h3">{language.homePage.topics}</SectionHeader>
        <CategoryList categories={categories} />
      </div>
    </section>
  )
}

export default PostFeed
