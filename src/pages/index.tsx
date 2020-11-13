import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import { TPostGlobals } from '../utils/constants'
import language from '../utils/language'
import Wrapper from '../components/wrapper/wrapper'
import PostList from '../components/postList/postList'
import CategoryList from '../components/categoryList/categoryList'
import { Grid, Cell } from 'styled-css-grid'
import SectionHeader from '../components/sectionHeader/sectionHeader'
import NewsletterForm from '../components/newsletterForm/newsletterForm'
import Pagination from '../components/pagination/pagination'
import FeaturedContent from '../components/featuredContent/featuredContent'
import PostFeed from '../components/postFeed/postFeed'

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
    allContentfulCategories {
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
