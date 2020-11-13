import React from 'react'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import CustomMarkdown from '../components/customMarkdown'
import Category from '../components/category/category'
import { TPostGlobals } from '../utils/constants'
import Wrapper from '../components/wrapper/wrapper'
import * as styles from '../components/layout/layout.module.scss'
import NewsletterForm from '../components/newsletterForm/newsletterForm'

const PostTemplate: React.FC<TPostGlobals> = props => {
  const {
    content,
    excerpt,
    heroImage,
    title,
    category,
  } = props.data.contentfulPosts

  return (
    <Layout>
      <SEO
        title={title}
        description={excerpt.excerpt}
        image={heroImage?.fluid.src}
      />
      <Wrapper width="content" as="article" style={{ overflow: 'hidden' }}>
        <Wrapper padX={false} width="thin" className={styles.postMeta}>
          <Category title={category.title} slug={category.slug} />
          <h1>{title}</h1>
        </Wrapper>

        {heroImage && (
          <Img alt={heroImage.description || ''} fluid={heroImage.fluid} />
        )}

        <Wrapper padX={false} width="thin" className={styles.content}>
          <CustomMarkdown>{content.content}</CustomMarkdown>
        </Wrapper>

        <Wrapper padX={false} width="thin" className={styles.postNewsletter}>
          <NewsletterForm />
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
      excerpt {
        excerpt
      }
      category {
        title
        slug
      }
      heroImage {
        description
        fluid(
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
