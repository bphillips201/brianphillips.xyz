import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import Wrapper from '../components/wrapper/wrapper'

const NotFoundPage = () => (
  <Layout>
    <SEO title="Page not found" />
    <Wrapper>
      <h1>404</h1>
      <p>That page doesn't exist, sadly.</p>
    </Wrapper>
  </Layout>
)

export default NotFoundPage
