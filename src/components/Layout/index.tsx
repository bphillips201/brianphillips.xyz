import React, { AllHTMLAttributes } from 'react'
import Footer from '../Footer'
import Header from '../Header'

const Layout: React.FC<AllHTMLAttributes<HTMLElement>> = props => {
  const { children, className = '', ...rest } = props

  return (
    <div className="flex flex-col justify-between h-full">
      <Header />
      <main className="px-8" {...rest}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
