import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

type TSEOProps = {
  description?: string
  lang?: string
  meta?: []
  image?: string
  title: string
}

const SEO: React.FC<TSEOProps> = ({
  description,
  lang = 'en',
  meta,
  image = '',
  title,
}) => {
  const { site, file } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const titleTemplate =
    title === 'Home'
      ? `${site.siteMetadata.title} — ${metaDescription}`
      : `${title} — ${site.siteMetadata.title}`
  // const pageImage =
  //   image || `${site.siteMetadata.siteUrl}${file.childImageSharp.fluid.src}`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={titleTemplate}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: `${title} — ${site.siteMetadata.author}`,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        // {
        //   property: `og:image`,
        //   content: pageImage,
        // },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: `${title} — ${site.siteMetadata.author}`,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        // {
        //   name: `twitter:image`,
        //   content: pageImage,
        // },
      ].concat(meta || [])}
    />
  )
}

export default SEO
