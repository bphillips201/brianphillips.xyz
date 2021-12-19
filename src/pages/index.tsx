import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO/SEO'
import { TPostGlobals } from '../utils/constants'
import Wrapper from '../components/Wrapper/Wrapper'
import NewsletterForm from '../components/NewsletterForm/NewsletterForm'
import FeaturedContent from '../components/FeaturedContent/FeaturedContent'
import PostFeed from '../components/PostFeed/PostFeed'

const IndexPage: React.FC<TPostGlobals> = props => {
  const allPosts = props.data.allContentfulPosts.edges.map(n => n.node)
  const allCategories = props.data.allContentfulCategories.edges.map(
    n => n.node
  )
  const latestPosts = allPosts.slice(0, 5)

  return (
    <Layout>
      <SEO title="Home" />
      <Wrapper>
        <PostFeed
          posts={latestPosts}
          categories={allCategories}
          path={props.path}
        />
      </Wrapper>
    </Layout>
  )
}

export default IndexPage

export const postQuery = graphql`
  query {
    allContentfulPosts(sort: { fields: publishDate, order: DESC }) {
      edges {
        node {
          id
          title
          fields {
            path
          }
          publishDate
          isFeatured
          isFirstFeatured
          content {
            childMarkdownRemark {
              html
            }
          }
          category {
            title
            fields {
              path
            }
          }
          heroImage {
            description
            fluid(maxWidth: 800, maxHeight: 400, quality: 90) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
    allContentfulCategories(sort: { fields: title, order: ASC }) {
      edges {
        node {
          id
          title
          fields {
            path
          }
        }
      }
    }
  }
`
