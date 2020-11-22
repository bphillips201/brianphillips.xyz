import React, { AllHTMLAttributes } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

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
