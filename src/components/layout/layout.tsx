import React, { AllHTMLAttributes } from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import './layout.module.scss'
import { PageProps } from 'gatsby'

const Layout: React.FC<PageProps> = props => {
  const { children, ...rest } = props

  return (
    <>
      <main {...rest}>
        <Header />
        {children}
        <Footer />
      </main>
    </>
  )
}

export default Layout
