import React from 'react'
import { graphql, PageProps } from 'gatsby'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import Wrapper from '../components/wrapper/wrapper'
import {
  TAllContentfulCategories,
  TAllContentfulPosts,
  TContentfulCategory,
} from '../utils/constants'
import { Grid, Cell } from 'styled-css-grid'
import PostList from '../components/postList/postList'
import CategoryList from '../components/categoryList/categoryList'
import Pagination from '../components/pagination/pagination'

type CategoryPageData = TAllContentfulPosts &
  TContentfulCategory &
  TAllContentfulCategories

const Category: React.FC<PageProps<CategoryPageData>> = props => {
  const { data, pageContext, path } = props
  // @ts-ignore
  const { numPages, currentPage } = pageContext
  const posts = data.allContentfulPosts.edges.map(n => n.node)
  const allCategories = data.allContentfulCategories.edges.map(n => n.node)
  const category = data.contentfulCategories

  return (
    <Layout>
      <SEO title="Category" />
      <Wrapper>
        <h1>Category: {category.title}</h1>

        <Grid columns={4} gap={'3.2rem'}>
          <Cell width={3}>
            {posts.length > 0 ? (
              <>
                <PostList posts={posts} />
                <Pagination
                  currentPage={currentPage}
                  numPages={numPages}
                  path={path}
                />
              </>
            ) : (
              <h3>No posts found for this category</h3>
            )}
          </Cell>

          <Cell width={1}>
            <CategoryList categories={allCategories} />
          </Cell>
        </Grid>
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
