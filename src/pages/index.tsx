import React from "react"
import { Link, PageProps, graphql } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { TAllContentfulPosts } from "../utils/constants"
import language from "../utils/language"
import Tag from "../components/tags/tags"
import Wrapper from "../components/wrapper/wrapper"
import PostList from "../components/postList/postList"

const IndexPage: React.FC<PageProps<TAllContentfulPosts>> = ({ data }) => {
  const allPosts = data.allContentfulPosts.edges.map(n => n.node);
  const featuredPosts = allPosts.filter(p => p.isFeatured).slice(0, 4)
  const latestPosts = allPosts.slice(0, 8)

  return (
    <Layout>
      <SEO title="Home" />
        <Wrapper color="gray">
          <div>{language.homePage.featuredWriting}</div>
          {featuredPosts.map(post => (
            <div key={post.id}>
              <Link to={post.slug}>{post.title}</Link>
            </div>
          ))}
        </Wrapper>

        <Wrapper>
          <div>{language.homePage.latestPosts}</div>
          <PostList posts={latestPosts} />
        </Wrapper>
    </Layout>
  )
}

export default IndexPage

export const postQuery = graphql`
  query {
    allContentfulPosts(sort: {fields: publishDate, order: DESC}) {
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
