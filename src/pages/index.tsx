import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO/SEO'
import { TPostGlobals } from '../utils/constants'
import Img from 'gatsby-image'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const IndexPage: React.FC<TPostGlobals> = props => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(relativePath: { eq: "me33.png" }) {
        childImageSharp {
          fluid(quality: 80) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />

      <div className="flex flex-col items-center md:flex-row max-w-screen-xl mx-auto">
        <div className="flex-1">
          <Img fluid={data.avatar.childImageSharp.fluid} />
        </div>
        <article className="flex-1">
          <h1 className="mb-12">I’m Brian.</h1>

          <p>I live in New York City with my wife and cat.</p>

          <p>
            My blog is{' '}
            <a href="https://effortlessfuture.substack.com">
              Effortless Future
            </a>
            .
          </p>

          <p>
            Here’s{' '}
            <Link to="/now">what I’m doing now</Link>.
          </p>
        </article>
      </div>
    </Layout>
  )
}

export default IndexPage
