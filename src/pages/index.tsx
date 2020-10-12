import React from "react"
import { Link, PageProps, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { TPostList } from "../utils/constants"
import language from "../utils/language"

const IndexPage: React.FC<PageProps<TPostList>> = ({ data }) => {
  const posts = data.allContentfulBlogPost.edges.map(n => n.node)

  return (
    <Layout>
      <SEO title="Home" />
      <h3>{language.homePage.featuredWriting}</h3>
      {posts.map(post => (
        <div key={post.id}>
          <Link to={post.slug}>
            <div></div>
            <h4>{post.title}</h4>
          </Link>
        </div>
      ))}
      <Link to="/about">About</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export default IndexPage

export const postQuery = graphql`
  query {
    allContentfulBlogPost(filter: { featuredPost: { eq: true } }) {
      edges {
        node {
          id
          title
          slug
          publishDate
          featuredPost
          readFirst
          tags
          content {
            content
          }
          heroImage {
            description
            fluid(
              toFormat: JPG
              resizingBehavior: FILL
              maxWidth: 1000
              cropFocus: CENTER
              maxHeight: 500
              quality: 75
            ) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
