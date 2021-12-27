import React from 'react'
import { graphql, Link, PageProps, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { useLocation } from '@reach/router'
import Logo from '../Logo/Logo'

const Header: React.FC = props => {
  const isHome = useLocation().pathname === '/'
  const data = useStaticQuery(graphql`
    query {
      avatar: file(relativePath: { eq: "me33-small.png" }) {
        childImageSharp {
          fluid(quality: 80) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <header className="p-8">
      <Link to="/" className="text-xs w-16 inline-block" title="Brian Phillips">
        <Img className="w-16" fluid={data.avatar.childImageSharp.fluid} />
      </Link>
    </header>
  )
}

export default Header
