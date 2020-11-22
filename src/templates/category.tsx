import React from 'react'
import { graphql, PageProps } from 'gatsby'
import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO/SEO'
import Wrapper from '../components/Wrapper/Wrapper'
import { TPostGlobals } from '../utils/constants'
import PostFeed from '../components/PostFeed/PostFeed'

const Category: React.FC<TPostGlobals> = props => {
  const { data, pageContext, path } = props
  const { numPages, currentPage } = pageContext
  const posts = data.allContentfulPosts.edges.map(n => n.node)
  const allCategories = data.allContentfulCategories.edges.map(n => n.node)
  const category = data.contentfulCategories

  return (
    <Layout>
      <SEO title={category.title} />
      <Wrapper color="gray">
        <h1>{category.title}</h1>
      </Wrapper>

      <Wrapper>
        <PostFeed
          posts={posts}
          categories={allCategories}
          path={path}
          numPages={numPages}
          currentPage={currentPage}
        />
      </Wrapper>
    </Layout>
  )
}

export const categoryListQuery = graphql`
  query categoryListQuery($id: String!, $skip: Int!, $limit: Int!) {
    contentfulCategories(id: { eq: $id }) {
      title
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
    allContentfulPosts(
      limit: $limit
      skip: $skip
      filter: { category: { id: { eq: $id } } }
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
  }
`

export default Category
