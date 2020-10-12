import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { graphql, PageProps } from "gatsby"
import Img from "gatsby-image"
import CustomMarkdown from "../components/customMarkdown"
import Tags from "../components/tags/tags"

import * as styles from "../components/postLayout/postLayout.module.scss"
import { TPost } from "../utils/constants"

const PostTemplate: React.FC<PageProps<TPost>> = ({ data }) => {
  const { content, heroImage, tags, title } = data.contentfulBlogPost

  return (
    <Layout>
      <SEO title={title} />
      <article className={styles.article}>
        <div className={styles.postMeta}>
          <Tags tags={tags} />
          <h1>{title}</h1>
        </div>

        <Img alt={heroImage.description} fluid={heroImage.fluid} />

        <div className={styles.content}>
          <CustomMarkdown>{content.content}</CustomMarkdown>
        </div>
      </article>
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
