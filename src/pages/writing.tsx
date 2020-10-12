import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const Writing = () => (
  <Layout>
    <SEO title="Writing" />
    <h1>My writing</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Writing
