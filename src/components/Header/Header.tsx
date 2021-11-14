import React from 'react'
import Logo from '../Logo/Logo'
import { Link } from 'gatsby'
import Wrapper from '../Wrapper/Wrapper'
import { useLocation } from '@reach/router'

const Header: React.FC = () => {
  const isHome = useLocation().pathname === '/'
  const Component: any = isHome ? 'h1' : 'div'

  return (
    <Wrapper as="header" color="white" className="flex items-center">
      <Component className="flex-1 p-0 m-0 leading-none max-h-8">
        <Logo animate={isHome} />
      </Component>

      <nav aria-label="navigation" className="flex-1 text-right">
        <ul className="p-0 m-0">
          <li className="inline-block m-0">
            <Link
              className="no-underline pb-2 pt-2 ml-8 font-bold font-header transition-colors hover:text-blue-600"
              activeClassName="text-blue-600"
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li className="inline-block">
            <Link
              className="no-underline pb-2 pt-2 ml-8 font-bold font-header transition-colors hover:text-blue-600"
              activeClassName="text-blue-600"
              to="/about"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </Wrapper>
  )
}

export default Header
