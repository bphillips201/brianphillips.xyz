import React from 'react'
import SEO from '../components/SEO/SEO'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { TPostGlobals } from '../utils/constants'

const PageTemplate: React.FC<TPostGlobals> = props => {
  const { title, content, updatedAt, slug } = props.data.contentfulPage
  return (
    <Layout className="">
      <SEO title={title} />

      <article className="max-w-screen-sm mx-auto">
        <h1 className="text-8xl mt-0">{title}</h1>
        {slug === 'now' && (
          <div className="text-base text-gray-500 font-header mb-16">
            <strong>Last updated {updatedAt}</strong>
          </div>
        )}
        <div
          dangerouslySetInnerHTML={{
            __html: content.childMarkdownRemark.html,
          }}
        />
      </article>
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
