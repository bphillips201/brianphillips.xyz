import React, { AllHTMLAttributes, useContext } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import ThemeContext, { ThemeProvider } from '../../context/ThemeContext'

const Layout: React.FC<AllHTMLAttributes<HTMLElement>> = props => {
  const { children, className = '', ...rest } = props
  const theme = useContext(ThemeContext)

  return (
    <ThemeProvider>
      <Header />
      <main className={className} {...rest}>
        {children}
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
