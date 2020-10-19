import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Wrapper from "../components/wrapper/wrapper"

const Blog = () => (
  <Layout>
    <SEO title="Blog" />
    <Wrapper>
      <h1>Blog</h1>
      <Link to="/">Go back to the homepage</Link>
    </Wrapper>
  </Layout>
)

export default Blog
