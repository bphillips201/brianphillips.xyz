import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO/SEO'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { TPostGlobals } from '../utils/constants'
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

const PostTemplate: React.FC<TPostGlobals> = props => {
  const {
    excerpt,
    heroImage,
    content,
    title,
    readTime,
    publishDate,
  } = props.data.contentfulPosts
  const postImage = heroImage ? `https:${heroImage?.fluid.src}` : ''

  return (
    <Layout>
      <SEO title={title} description={excerpt.excerpt} image={postImage} />
      <section className="px-8 pt-16 pb-8">
        <article className="max-w-screen-sm mx-auto">
          {heroImage && (
            <>
              <Img
                className="mb-2"
                alt={heroImage.description || ''}
                fluid={heroImage.fluid}
              />
              <div className="mb-16 text-xs font-header text-center">
                doodle by <a href="#">Ashlee</a>
              </div>
            </>
          )}
          <h2 className="font-body text-5xl mb-4 leading-tight">{title}</h2>
          <div className="flex justify-between mb-16 font-header text-base text-gray-500">
            <span>{readTime} minute read</span>
            <span>{publishDate}</span>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: content.childMarkdownRemark.html,
            }}
          />
          <div className="pb-8 pt-6 text-center text-2xl">👋</div>
        </article>
      </section>

      <section className="p-8 mb-8 max-w-screen-sm mx-auto font-header bg-gray-100">
        <label className="block mb-2">Did you enjoy today’s post?</label>
        <div className="flex gap-8 mb-8">
          <a href="#">Yes</a>
          <a href="#">No</a>
          <a href="#">Didn’t finish it</a>
        </div>

        <label className="block mb-2">Did you like Ashlee’s doodle?</label>
        <div className="flex gap-8">
          <a href="#">Yes</a>
          <a href="#">No</a>
        </div>
      </section>

      <section className="p-8 mb-8 max-w-screen-sm mx-auto font-header bg-gray-100">
        <div className="max-w-screen-md mx-auto">
          <p className="mb-4">Miss yesterday’s post?</p>
          <p>
            <a href="#">Sign up for my newsletter</a> to get a link to the full
            archive and more.
          </p>
        </div>
      </section>
    </Layout>
  )
}

export const postQuery = graphql`
  query($id: String!) {
    contentfulPosts(id: { eq: $id }) {
      title
      publishDate
      readTime
      content {
        childMarkdownRemark {
          html
        }
      }
      excerpt {
        excerpt
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
