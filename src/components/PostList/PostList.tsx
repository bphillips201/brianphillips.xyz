import React, { AllHTMLAttributes } from 'react'
import { TPost } from '../../utils/constants'
import { Link } from 'gatsby'
import Category from '../Category/Category'
import Wrapper from '../Wrapper/Wrapper'
import BackgroundImage from 'gatsby-background-image'
import * as styles from './PostList.module.scss'
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from 'react-share'

type TPostList = AllHTMLAttributes<HTMLElement> & {
  posts: Array<TPost>
  variant?: 'plain' | 'featured' | 'first'
  backgroundImage?: boolean
}

const PostList: React.FC<TPostList> = props => {
  const { posts, variant = 'plain', backgroundImage = false, ...rest } = props

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
                  title={post.category.title}
                  path={post.category.fields.path}
                />
                <h2>{post.title}</h2>
              </Link>
            </BackgroundImage>
          </div>
        ) : (
          <div className={styles[variant]} {...rest} key={post.id}>
            <Category
              title={post.category.title}
              path={post.category.fields.path}
            />
            <h2>
              <Link to={post.fields.path}>{post.title}</Link>
            </h2>
            <div
              dangerouslySetInnerHTML={{
                __html: post.content.childMarkdownRemark.html,
              }}
            />
            <Wrapper noPadX width="thin" className={styles.share}>
              <div className={styles.shareIcon} title="Share this post">
                <svg
                  height="67"
                  viewBox="0 0 62 67"
                  width="62"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m49.3346635 41.5711469c-3.8930711 0-7.3782938 1.7759621-9.6908057 4.5597915l-15.0427867-8.5407204c.4677915-1.3163981.7249005-2.7318199.7249005-4.206891 0-1.4747772-.257109-2.890199-.7249005-4.2065971l15.0416114-8.5427773c2.312218 2.7847109 5.7980284 4.5612607 9.6913933 4.5612607 6.9445877 0 12.5948152-5.6519906 12.5948152-12.5995166 0-6.94546921-5.6496398-12.5956967-12.5942275-12.5956967-6.9454692 0-12.5959905 5.65022749-12.5959905 12.5954028 0 1.4750711.2568152 2.8907868.7249005 4.2074787l-15.0424929 8.5430711c-2.312218-2.7832417-5.797147-4.5586161-9.6893365-4.5586161-6.94635074 0-12.59775358 5.6502275-12.59775358 12.5956967 0 6.9451753 5.65140284 12.5954028 12.59775358 12.5954028 3.8921895 0 7.3768246-1.7753744 9.6890426-4.5583223l15.0427868 8.5410143c-.4680853 1.3166919-.7251944 2.7327014-.7251944 4.2080663 0 6.9451754 5.6505214 12.5954029 12.5959906 12.5954029 6.9445876 0 12.5945213-5.6505214 12.5945213-12.5954029 0-6.9463507-5.6496398-12.5980474-12.5942275-12.5980474zm0-37.16356396c4.5142465 0 8.1869384 3.67298578 8.1869384 8.18781986 0 4.5171849-3.6726919 8.1919337-8.1869384 8.1919337-4.515128 0-8.1884076-3.6747488-8.1884076-8.1919337 0-4.51483408 3.6732796-8.18781986 8.1884076-8.18781986zm-36.6026256 37.16356396c-4.51600946 0-8.1901706-3.6732796-8.1901706-8.1878199 0-4.5151279 3.67416114-8.1881137 8.1901706-8.1881137 4.5142465 0 8.1866446 3.6729858 8.1866446 8.1881137 0 4.5145403-3.672692 8.1878199-8.1866446 8.1878199zm36.6026256 20.7861612c-4.515128 0-8.1884076-3.6732797-8.1884076-8.1878199 0-4.5163034 3.6732796-8.1907583 8.1884076-8.1907583 4.5142465 0 8.1869384 3.6744549 8.1869384 8.1907583 0 4.5145402-3.6726919 8.1878199-8.1869384 8.1878199z"
                    fill="#505050"
                  />
                </svg>
              </div>
              <FacebookShareButton url={post.slug}>
                <FacebookIcon size={40} round />
              </FacebookShareButton>
              <TwitterShareButton url={post.slug}>
                <TwitterIcon size={40} round />
              </TwitterShareButton>
              <RedditShareButton url={post.slug}>
                <RedditIcon size={40} round />
              </RedditShareButton>
              <LinkedinShareButton url={post.slug}>
                <LinkedinIcon size={40} round />
              </LinkedinShareButton>
            </Wrapper>
          </div>
        )
      )}
    </>
  )
}

export default PostList
