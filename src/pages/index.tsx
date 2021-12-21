import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO/SEO'
import { TPostGlobals } from '../utils/constants'
import Img from 'gatsby-image'
import Logo from '../components/Logo/Logo'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const IndexPage: React.FC<TPostGlobals> = props => {
  const latestPost = props.data.allContentfulPosts.edges.map(n => n.node)[0]
  const heroImage = getImage(latestPost.heroImage)

  return (
    <Layout>
      <SEO title="Home" />
      <article className="max-w-screen-sm mx-auto">
        {latestPost.heroImage && (
          <>
            {heroImage && (
              <GatsbyImage
                className="mb-2"
                alt="Image by Ashlee"
                image={heroImage}
              />
            )}
            <div className="mb-16 text-xs font-header text-center">
              doodle by <a href="#">Ashlee</a>
            </div>
          </>
        )}
        <h2 className="font-body text-5xl mb-4 leading-tight">
          {latestPost.title}
        </h2>
        <div className="flex justify-between mb-16 font-header text-base text-gray-500">
          <span>{latestPost.readTime} minute read</span>
          <span>{latestPost.publishDate}</span>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: latestPost.content.childMarkdownRemark.html,
          }}
        />
        <div className="mb-14 pt-6 text-center font-header">
          {`< 👋 later, gator. >`}
        </div>
      </article>

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

      <section className="p-8 max-w-screen-sm mx-auto font-header bg-gray-100">
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

export default IndexPage

export const postQuery = graphql`
  query {
    allContentfulPosts(sort: { fields: publishDate, order: DESC }, limit: 1) {
      edges {
        node {
          id
          title
          readTime
          publishDate(formatString: "MMMM D, YYYY")
          fields {
            path
          }
          content {
            childMarkdownRemark {
              html
            }
          }
          heroImage {
            description
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`
