import React, { AllHTMLAttributes } from 'react'
import { TPost } from '../../utils/constants'
import { Link } from 'gatsby'
import Category from '../category/category'
import BackgroundImage from 'gatsby-background-image'
import classnames from 'classnames'
import * as styles from './postList.module.scss'
import { Cell } from 'styled-css-grid'

type TPostList = AllHTMLAttributes<HTMLElement> & {
  posts: Array<TPost>
  variant?: 'plain' | 'featured' | 'first'
  backgroundImage?: boolean
}

const PostList: React.FC<TPostList> = props => {
  const { posts, variant = 'plain', backgroundImage = false, ...rest } = props
  const Component: any = variant === 'first' ? 'h2' : 'h3'

  return (
    <>
      {posts.map((post, i) =>
        backgroundImage ? (
          <div key={post.id} {...rest} className={styles[variant]}>
            <BackgroundImage
              // @ts-ignore
              fluid={post.heroImage.fluid || null}
              style={{ height: '100%' }}
            >
              <Link to={`/blog/${post.slug}`} data-testid={`post-${variant}`}>
                <Category
                  readOnly={true}
                  title={post.category.title}
                  slug={post.category.slug}
                />
                <Component>{post.title}</Component>
              </Link>
            </BackgroundImage>
          </div>
        ) : (
          <div className={styles[variant]} {...rest} key={post.id}>
            <Category
              readOnly={true}
              title={post.category.title}
              slug={post.category.slug}
            />
            <Component>
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </Component>
          </div>
        )
      )}
    </>
  )
}

export default PostList
