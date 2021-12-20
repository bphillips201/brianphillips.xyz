import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO/SEO'
import { TPostGlobals } from '../utils/constants'
import Img from 'gatsby-image'
import Logo from '../components/Logo/Logo'

const IndexPage: React.FC<TPostGlobals> = props => {
  const latestPost = props.data.allContentfulPosts.edges.map(n => n.node)[0]

  return (
    <Layout>
      <SEO title="Home" />
      <header className="p-8 py-16 bg-gray-100">
        <section className="max-w-screen-sm mx-auto">
          <h1 title="Brian Phillips" className="mb-8">
            <Logo animate={true} />
          </h1>
          <p className="text-3xl mb-8">
            I’m Brian—a writer, investor, and front end coder living in New York
            City.
          </p>
          <p className="mb-8">
            This is my daily blog. I post essays, stories, and stray thoughts
            that <strong>disappear after 24 hours</strong>.
          </p>
          <p className="mb-8">
            <a href="#">Sign up for my newsletter</a> to get my posts delivered
            to your inbox.
          </p>
          <nav className="mb-0">
            <ul>
              <li className="inline-block mr-8">
                <a href="#">About me</a>
              </li>
              <li className="inline-block">
                <a href="#">What I’m doing now</a>
              </li>
            </ul>
          </nav>
        </section>
      </header>

      <section className="p-8 py-16">
        <article className="max-w-screen-sm mx-auto">
          {latestPost.heroImage && (
            <>
              <Img
                className="mb-2"
                alt={latestPost.heroImage.description || ''}
                fluid={latestPost.heroImage.fluid}
              />
              <div className="mb-16 text-xs font-header text-center">
                doodle by <a href="#">Ashlee</a>
              </div>
            </>
          )}
          <h2 className="text-5xl mb-4 leading-tight">{latestPost.title}</h2>
          <div className="flex justify-between mb-16 font-header text-base text-gray-500">
            <span>{latestPost.readTime} minute read</span>
            <span>{latestPost.publishDate}</span>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: latestPost.content.childMarkdownRemark.html,
            }}
          />
        </article>
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
            fluid(maxWidth: 800, quality: 90) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
