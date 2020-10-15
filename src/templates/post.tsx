import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { graphql, PageProps } from "gatsby"
import Img from "gatsby-image"
import CustomMarkdown from "../components/customMarkdown"
import Tags from "../components/tags/tags"
import { TPost } from "../utils/constants"
import Wrapper from "../components/wrapper/wrapper"
import * as styles from "../components/layout/layout.module.scss"

const PostTemplate: React.FC<PageProps<TPost>> = ({ data }) => {
  const { content, heroImage, tags, title } = data.contentfulBlogPost

  return (
    <Layout>
      <SEO title={title} />
      <Wrapper width="content" as="article">
        <div className={styles.postMeta}>
          <Tags tags={tags} />
          <h1>{title}</h1>
        </div>

        <Img alt={heroImage.description} fluid={heroImage.fluid} />

        <Wrapper width="thin" className={styles.content}>
          <CustomMarkdown>{content.content}</CustomMarkdown>
        </Wrapper>
      </Wrapper>
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
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default PostTemplate
