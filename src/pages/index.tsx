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
  const featuredPosts = allPosts.filter(p => p.isFeatured).slice(0, 3)
  const firstRead = allPosts.filter(p => p.isFirstFeatured).slice(0, 1)
  const latestPosts = allPosts.slice(0, 5)

  return (
    <Layout>
      <SEO title="Home" />
      <Wrapper color="gray">
        <FeaturedContent firstRead={firstRead} featuredPosts={featuredPosts} />
        <NewsletterForm />
      </Wrapper>

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
          slug
          publishDate
          isFeatured
          isFirstFeatured
          content {
            content
          }
          category {
            title
            slug
          }
          heroImage {
            description
            fluid(
              resizingBehavior: FILL
              maxWidth: 800
              cropFocus: CENTER
              maxHeight: 400
              quality: 90
            ) {
              ...GatsbyContentfulFluid
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
          slug
        }
      }
    }
  }
`
