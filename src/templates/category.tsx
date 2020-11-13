import React from 'react'
import { graphql, PageProps } from 'gatsby'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import Wrapper from '../components/wrapper/wrapper'
import { TPostGlobals } from '../utils/constants'
import { Grid, Cell } from 'styled-css-grid'
import PostList from '../components/postList/postList'
import CategoryList from '../components/categoryList/categoryList'
import Pagination from '../components/pagination/pagination'
import SectionHeader from '../components/sectionHeader/sectionHeader'
import language from '../utils/language'
import PostFeed from '../components/postFeed/postFeed'

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
    allContentfulCategories {
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
