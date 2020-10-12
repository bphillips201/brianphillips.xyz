import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <h1>About Me</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About
