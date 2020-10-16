import React from "react"
import Header from "../header/header"
import Footer from "../footer/footer"

import "./layout.module.scss"

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
