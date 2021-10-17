import React from 'react'
import SEO from '../components/SEO/SEO'
import Layout from '../components/Layout/Layout'
import Wrapper from '../components/Wrapper/Wrapper'
import { graphql } from 'gatsby'
import { TPostGlobals } from '../utils/constants'
import * as styles from '../components/Layout/Layout.module.scss'

const PageTemplate: React.FC<TPostGlobals> = props => {
  const { title, content, updatedAt, slug } = props.data.contentfulPage
  return (
    <Layout className={styles.page}>
      <SEO title={title} />

      <Wrapper className={styles.pageHeader} width="content">
        <h1>{title}</h1>
      </Wrapper>

      <Wrapper width="thin" as="article">
        <div
          dangerouslySetInnerHTML={{
            __html: content.childMarkdownRemark.html,
          }}
        />
        {slug === 'now' && (
          <small>
            <strong>Last updated {updatedAt}</strong>
          </small>
        )}
      </Wrapper>
    </Layout>
  )
}

export const postQuery = graphql`
  query($id: String!) {
    contentfulPage(id: { eq: $id }) {
      title
      slug
      updatedAt(formatString: "MMMM D, YYYY")
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default PageTemplate