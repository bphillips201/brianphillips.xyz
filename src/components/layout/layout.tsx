import React, { AllHTMLAttributes } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import classnames from 'classnames'
import * as styles from './Layout.module.scss'

const Layout: React.FC<AllHTMLAttributes<HTMLElement>> = props => {
  const { children, className = '', ...rest } = props
  const layoutClasses = classnames({
    [styles.page]: true,
    [className]: className,
  })

  return (
    <>
      <Header />
      <main className={layoutClasses} {...rest}>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
