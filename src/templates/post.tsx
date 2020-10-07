import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import CustomMarkdown from "../components/customMarkdown"

const PostTemplate = ({ data }: any) => {
  const { content, heroImage, tags, title } = data.contentfulBlogPost

  return (
    <Layout>
      <SEO title={title} />
      <div>{tags.join(" • ")}</div>
      <Img alt={heroImage.description} fluid={heroImage.fluid} />
      <h1>{title}</h1>
      <CustomMarkdown>{content.content}</CustomMarkdown>
    </Layout>
  )
}

export const postQuery = graphql`
  query($id: String!) {
    contentfulBlogPost(id: { eq: $id }) {
      title
      publishDate
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
`

export default PostTemplate
