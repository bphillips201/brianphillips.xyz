import React, { AllHTMLAttributes } from 'react'
import Footer from '../Footer'
import Header from '../Header'

const Layout: React.FC<AllHTMLAttributes<HTMLElement>> = props => {
  const { children, className = '', ...rest } = props

  return (
    <>
      <Header />
      <main className="px-8 py-16 dark:bg-zinc-800 dark:text-gray-50" {...rest}>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
