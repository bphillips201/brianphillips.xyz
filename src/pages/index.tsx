import React from "react"
import { Link, PageProps, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { TPostList } from "../utils/constants"
import language from "../utils/language"

const IndexPage: React.FC<PageProps<TPostList>> = ({ data }) => {
  const posts = data.allContentfulBlogPost.edges.map(n => n.node)
  const featuredPosts = posts.filter(p => p.isFeatured)
  const firstRead = posts.filter(p => p.isFirstFeatured)[0]

  return (
    <Layout>
      <SEO title="Home" />
      <h3>{language.homePage.featuredWriting}</h3>
      {featuredPosts.map(post => (
        <div key={post.id}>
          <Link to={post.slug}>
            <div></div>
            <h4>{post.title}</h4>
          </Link>
        </div>
      ))}
    </Layout>
  )
}

export default IndexPage

export const postQuery = graphql`
  query {
    allContentfulBlogPost {
      edges {
        node {
          id
          title
          slug
          publishDate
          isFeatured
          isFirstFeatured
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
