import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import Wrapper from '../components/wrapper/wrapper'

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <Wrapper>
      <h1>Contact Me</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Wrapper>
  </Layout>
)

export default Contact
