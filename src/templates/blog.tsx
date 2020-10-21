import React from 'react'
import { graphql, PageProps } from 'gatsby'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import Wrapper from '../components/wrapper/wrapper'
import {
  TAllContentfulPosts,
  TAllContentfulCategories,
} from '../utils/constants'
import { Grid, Cell } from 'styled-css-grid'
import PostList from '../components/postList/postList'
import CategoryList from '../components/categoryList/categoryList'
import Pagination from '../components/pagination/pagination'

type BlogPageData = TAllContentfulPosts & TAllContentfulCategories

const Blog: React.FC<PageProps<BlogPageData>> = props => {
  const { data, pageContext, path } = props
  // @ts-ignore
  const { numPages, currentPage } = pageContext
  const posts = data.allContentfulPosts.edges.map(n => n.node)
  const categories = data.allContentfulCategories.edges.map(n => n.node)

  return (
    <Layout>
      <SEO title="Blog" />
      <Wrapper>
        <h1>Blog</h1>

        <Grid columns={4} gap={'3.2rem'}>
          <Cell width={3}>
            <PostList posts={posts} />
            <Pagination
              currentPage={currentPage}
              numPages={numPages}
              path={path}
            />
          </Cell>

          <Cell width={1}>
            <CategoryList categories={categories} />
          </Cell>
        </Grid>
      </Wrapper>
    </Layout>
  )
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allContentfulPosts(limit: $limit, skip: $skip) {
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

export default Blog
