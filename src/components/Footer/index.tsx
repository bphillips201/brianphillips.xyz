import React from 'react'

const Footer: React.FC = props => {
  return (
    <footer className="p-8">
      <section className="max-w-screen-sm mx-auto text-center">
        <p className="text-sm mt-8 text-center font-header">
          © Brian Phillips {new Date().getFullYear()}
        </p>
      </section>
    </footer>
  )
}

export default Footer
