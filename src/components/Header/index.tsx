import { Link, PageProps } from 'gatsby'
import React from 'react'
import { useLocation } from '@reach/router'
import Logo from '../Logo/Logo'

const Header: React.FC = props => {
  const isHome = useLocation().pathname === '/'

  return (
    <header className="p-8 bg-gray-100">
      <section className="max-w-screen-sm mx-auto">
        <div className="flex justify-between items-center text-base">
          <h1 className="text-xs" title="Brian Phillips">
            <Logo animate={isHome} />
          </h1>
          <nav className="text-right">
            <ul>
              <li className="inline-block mr-8">
                <a href="http://eepurl.com/hEt_PD">Newsletter</a>
              </li>
              <li className="inline-block">
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </div>

        {isHome && (
          <div className="pt-12 pb-8">
            <p className="text-3xl mb-8">
              I’m Brian—a writer, investor, and front end coder living in New
              York City.
            </p>
            <p className="mb-8">
              This is my daily blog. I post essays, stories, and stray thoughts
              that <strong>disappear after 24 hours</strong>.
            </p>
            <p>
              <a href="http://eepurl.com/hEt_PD">Sign up for my newsletter</a>{' '}
              to get a weekly email with my latest posts, along with recommended
              books, media, and more.
            </p>
          </div>
        )}
      </section>
    </header>
  )
}

export default Header
