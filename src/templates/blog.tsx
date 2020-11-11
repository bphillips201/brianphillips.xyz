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
            <SectionHeader>{language.homePage.topics}</SectionHeader>
            <CategoryList categories={categories} />
          </Cell>
        </Grid>
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
