import React from 'react'
import SEO from '../components/SEO/SEO'
import Layout from '../components/Layout/Layout'
import Wrapper from '../components/Wrapper/Wrapper'
import { graphql, Link } from 'gatsby'
import { TPostGlobals } from '../utils/constants'

const PageTemplate: React.FC<TPostGlobals> = props => {
  const { title, content } = props.data.contentfulPage
  return (
    <Layout>
      <SEO title={title} />

      <Wrapper width="thin" as="article">
        <h1>{title}</h1>

        <div
          dangerouslySetInnerHTML={{
            __html: content.childMarkdownRemark.html,
          }}
        />
      </Wrapper>
    </Layout>
  )
}

export const postQuery = graphql`
  query($id: String!) {
    contentfulPage(id: { eq: $id }) {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default PageTemplate
