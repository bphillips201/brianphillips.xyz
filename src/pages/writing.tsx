import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Wrapper from "../components/wrapper/wrapper"

const Writing = () => (
  <Layout>
    <SEO title="Writing" />
    <Wrapper>
      <h1>My writing</h1>
      <Link to="/">Go back to the homepage</Link>
    </Wrapper>
  </Layout>
)

export default Writing
