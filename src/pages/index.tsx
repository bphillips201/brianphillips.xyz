import React from 'react'
import { graphql, Link } from 'gatsby'
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
      <header className="p-8 pb-16 bg-gray-100">
        <section className="max-w-screen-sm mx-auto">
          <div className="flex justify-between mb-8 text-base">
            <h1 title="Brian Phillips" className="mb-8">
              <Logo animate />
            </h1>
            <nav className="text-right">
              <ul>
                <li className="inline-block mr-8">
                  <a href="http://eepurl.com/hEt_PD">Newsletter</a>
                </li>
                <li className="inline-block">
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </nav>
          </div>

          <p className="text-3xl mb-8">
            I’m Brian—a writer, investor, and front end coder living in New York
            City.
          </p>
          <p className="mb-8">
            This is my daily blog. I post essays, stories, and stray thoughts
            that <strong>disappear after 24 hours</strong>.
          </p>
          <p>
            <a href="http://eepurl.com/hEt_PD">Sign up for my newsletter</a> to
            get a weekly email with my latest posts, along with recommended
            books, media, and more.
          </p>
        </section>
      </header>

      <section className="px-8 pt-16 pb-4">
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

      <footer className="p-8 py-16 bg-gray-100">
        <section className="max-w-screen-sm mx-auto text-center">
          <Logo />
          <p className="text-sm mt-8 text-center font-header">
            © Brian Phillips {new Date().getFullYear()}
          </p>
        </section>
      </footer>
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
