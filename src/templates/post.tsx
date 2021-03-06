import React from 'react'
import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO/SEO'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Category from '../components/Category/Category'
import { TPostGlobals } from '../utils/constants'
import Wrapper from '../components/Wrapper/Wrapper'
import NewsletterForm from '../components/NewsletterForm/NewsletterForm'
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share'
import * as styles from '../components/Layout/Layout.module.scss'

const PostTemplate: React.FC<TPostGlobals> = props => {
  const {
    content,
    excerpt,
    heroImage,
    title,
    category,
  } = props.data.contentfulPosts
  const postImage = heroImage ? `https:${heroImage?.fluid.src}` : ''

  return (
    <Layout>
      <SEO title={title} description={excerpt.excerpt} image={postImage} />
      <Wrapper width="content" as="article" style={{ overflow: 'hidden' }}>
        <Wrapper noPadX width="thin" className={styles.postMeta}>
          <Category title={category.title} path={category.fields.path} />
          <h1>{title}</h1>
        </Wrapper>

        {heroImage && (
          <Img alt={heroImage.description || ''} fluid={heroImage.fluid} />
        )}

        <Wrapper noPadX width="thin" className={styles.content}>
          <div
            dangerouslySetInnerHTML={{
              __html: content.childMarkdownRemark.html,
            }}
          />
        </Wrapper>

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
          <FacebookShareButton url={props.location.href}>
            <FacebookIcon size={40} round />
          </FacebookShareButton>
          <TwitterShareButton url={props.location.href}>
            <TwitterIcon size={40} round />
          </TwitterShareButton>
          <RedditShareButton url={props.location.href}>
            <RedditIcon size={40} round />
          </RedditShareButton>
          <LinkedinShareButton url={props.location.href}>
            <LinkedinIcon size={40} round />
          </LinkedinShareButton>
        </Wrapper>

        <Wrapper noPadX width="thin" className={styles.postNewsletter}>
          <NewsletterForm />
        </Wrapper>
      </Wrapper>
    </Layout>
  )
}

export const postQuery = graphql`
  query($id: String!) {
    contentfulPosts(id: { eq: $id }) {
      title
      publishDate
      content {
        childMarkdownRemark {
          html
        }
      }
      excerpt {
        excerpt
      }
      category {
        title
        fields {
          path
        }
      }
      heroImage {
        description
        fluid(maxWidth: 1000, maxHeight: 500, quality: 90) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`

export default PostTemplate
