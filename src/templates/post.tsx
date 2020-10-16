import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { graphql, PageProps } from "gatsby"
import Img from "gatsby-image"
import CustomMarkdown from "../components/customMarkdown"
import Category from "../components/category/category"
import { TContentfulPost } from "../utils/constants"
import Wrapper from "../components/wrapper/wrapper"
import * as styles from "../components/layout/layout.module.scss"

const PostTemplate: React.FC<PageProps<TContentfulPost>> = ({ data }) => {
  const { content, heroImage, title, category } = data.contentfulPosts;
  console.log(category)

  return (
    <Layout>
      <SEO title={title} />
      <Wrapper width="content" as="article">
        <div className={styles.postMeta}>
          <Category category={category} />
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
    contentfulPosts(id: { eq: $id }) {
      title
      publishDate
      content {
        content
      }
      category {
        title
        slug
      }
      heroImage {
        description
        fluid(
          toFormat: JPG
          resizingBehavior: FILL
          maxWidth: 1000
          cropFocus: CENTER
          maxHeight: 500
          quality: 90
        ) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default PostTemplate
