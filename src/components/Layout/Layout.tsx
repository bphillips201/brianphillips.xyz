import React, { AllHTMLAttributes } from 'react'

const Layout: React.FC<AllHTMLAttributes<HTMLElement>> = props => {
  const { children, className = '', ...rest } = props

  return (
    <>
      <main className={className} {...rest}>
        {children}
      </main>
    </>
  )
}

export default Layout
