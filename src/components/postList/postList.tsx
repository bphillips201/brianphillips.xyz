import React, { AllHTMLAttributes } from 'react'
import { TPost } from '../../utils/constants'
import { Link } from 'gatsby'
import Category from '../category/category'
import BackgroundImage from 'gatsby-background-image'
import classnames from 'classnames'
import * as styles from './postList.module.scss'

type TPostList = AllHTMLAttributes<HTMLElement> & {
  posts: Array<TPost>
  variant?: 'plain' | 'featured' | 'first'
  backgroundImage?: boolean
}

const PostList: React.FC<TPostList> = props => {
  const { posts, variant = 'plain', backgroundImage = false, ...rest } = props
  const Component: any = variant === 'first' ? 'h2' : 'h3'

  const postListClasses = classnames({
    [styles.postList]: true,
    [styles[variant]]: true,
  })

  return (
    <ul className={postListClasses} {...rest}>
      {posts.map(post =>
        backgroundImage ? (
          <BackgroundImage
            Tag="li"
            // @ts-ignore
            fluid={post.heroImage.fluid || null}
            key={post.id}
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
        ) : (
          <li key={post.id}>
            <Category title={post.category.title} slug={post.category.slug} />
            <Component>
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </Component>
          </li>
        )
      )}
    </ul>
  )
}

export default PostList
