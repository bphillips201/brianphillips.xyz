import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import CustomMarkdown from "../components/customMarkdown"

const PostTemplate = (props: any) => {
  const { title, content, heroImage } = props.pageContext.page
  const pageContent = content.content || ""

  console.log(heroImage)

  return (
    <Layout>
      <SEO title={`${title}`} />
      <h1>{title}</h1>
      <CustomMarkdown>{pageContent}</CustomMarkdown>
    </Layout>
  )
}

export default PostTemplate
