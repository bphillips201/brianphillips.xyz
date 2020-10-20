import React, { AllHTMLAttributes } from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'

import './layout.module.scss'

const Layout: React.FC<AllHTMLAttributes<HTMLElement>> = props => {
  const { children, ...rest } = props

  return (
    <>
      <Header />
      <main {...rest}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
