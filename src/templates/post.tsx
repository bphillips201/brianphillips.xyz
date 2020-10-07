import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { graphql, PageProps } from "gatsby"
import Img from "gatsby-image"
import CustomMarkdown from "../components/customMarkdown"
import Tags from "../components/tags/tags"

type TPostProps = {
  contentfulBlogPost: {
    content: {
      content: string
    }
    tags: Array<string>
    title: string
    heroImage: {
      description: string
      fluid: {
        aspectRatio: number
        base64: string
        sizes: string
        src: string
        srcSet: string
      }
    }
  }
}

const PostTemplate: React.FC<PageProps<TPostProps>> = ({ data }) => {
  const { content, heroImage, tags, title } = data.contentfulBlogPost

  return (
    <Layout>
      <SEO title={title} />
      <Tags tags={tags} />
      <h1>{title}</h1>
      <Img alt={heroImage.description} fluid={heroImage.fluid} />
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
