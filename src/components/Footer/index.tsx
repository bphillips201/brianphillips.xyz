import React from 'react'
import Logo from '../Logo/Logo'

const Footer: React.FC = props => {
  return (
    <footer className="p-8 py-16 bg-gray-100 dark:bg-zinc-900 dark:text-gray-50">
      <section className="max-w-screen-sm mx-auto text-center">
        <Logo />
        <p className="text-sm mt-8 text-center font-header">
          © Brian Phillips {new Date().getFullYear()}
        </p>
      </section>
    </footer>
  )
}

export default Footer
