import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { graphql, PageProps } from "gatsby"
import Wrapper from "../components/wrapper/wrapper"
// import * as styles from "../components/layout/layout.module.scss"
import { TAllContentfulPosts, TContentfulCategory } from "../utils/constants"
import PostList from "../components/postList/postList"

type TCategoryPageProps = TAllContentfulPosts & TContentfulCategory;

const PostTemplate: React.FC<PageProps<TCategoryPageProps>> = ({ data }) => {
  const category = data.contentfulCategories;
  const posts = data.allContentfulPosts.edges.map(n => n.node);

  return (
    <Layout>
      <SEO title={category.title} />
      <Wrapper>
        <h1>Category: {category.title}</h1>
        <PostList posts={posts} />
      </Wrapper>
    </Layout>
  )
}

export const postQuery = graphql`
  query($id: String!) {
    contentfulCategories(id: { eq: $id }) {
      title
    }
    allContentfulPosts(filter: {category: {id: {eq: $id}}}, sort: {order: DESC, fields: publishDate}) {
    edges {
      node {
        id
        title
        category {
          title
          slug
        }
        slug
      }
    }
  }
  }
`

export default PostTemplate
