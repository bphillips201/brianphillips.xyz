import React, { AllHTMLAttributes } from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import classnames from 'classnames'
import './layout.module.scss'

const Layout: React.FC<AllHTMLAttributes<HTMLElement>> = props => {
  const { children, className = '', ...rest } = props

  return (
    <>
      <Header />
      <main className={className} {...rest}>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
