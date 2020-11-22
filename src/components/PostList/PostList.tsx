import React, { AllHTMLAttributes } from 'react'
import { TPost } from '../../utils/constants'
import { Link } from 'gatsby'
import Category from '../Category/Category'
import BackgroundImage from 'gatsby-background-image'
import * as styles from './PostList.module.scss'

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
        backgroundImage && post.heroImage ? (
          <div key={post.id} {...rest} className={styles[variant]}>
            <BackgroundImage
              fluid={post.heroImage.fluid}
              style={{ height: '100%' }}
            >
              <Link to={post.fields.path} data-testid={`post-${variant}`}>
                <Category
                  readOnly
                  title={post.category.title}
                  path={post.category.fields.path}
                />
                <Component>{post.title}</Component>
              </Link>
            </BackgroundImage>
          </div>
        ) : (
          <div className={styles[variant]} {...rest} key={post.id}>
            <Category
              readOnly
              title={post.category.title}
              path={post.category.fields.path}
            />
            <Component>
              <Link to={post.fields.path}>{post.title}</Link>
            </Component>
          </div>
        )
      )}
    </>
  )
}

export default PostList
