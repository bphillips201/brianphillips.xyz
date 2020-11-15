import React from 'react'
import { graphql, PageProps } from 'gatsby'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import Wrapper from '../components/wrapper/wrapper'
import { TPostGlobals } from '../utils/constants'
import PostFeed from '../components/postFeed/postFeed'

const Blog: React.FC<TPostGlobals> = props => {
  const { data, pageContext, path } = props
  const { numPages, currentPage } = pageContext
  const posts = data.allContentfulPosts.edges.map(n => n.node)
  const categories = data.allContentfulCategories.edges.map(n => n.node)

  return (
    <Layout>
      <SEO title="Blog" />
      <Wrapper color="gray">
        <h1>Blog</h1>
      </Wrapper>
      <Wrapper>
        <PostFeed
          posts={posts}
          categories={categories}
          path={path}
          numPages={numPages}
          currentPage={currentPage}
        />
      </Wrapper>
    </Layout>
  )
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allContentfulPosts(
      limit: $limit
      skip: $skip
      sort: { fields: publishDate, order: DESC }
    ) {
      edges {
        node {
          id
          title
          slug
          category {
            title
            slug
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

export default Blog
