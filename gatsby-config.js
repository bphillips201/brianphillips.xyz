require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Brian Phillips`,
    description: `a writer, investor, and programmer`,
    author: `Brian Phillips`,
    siteUrl:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:8000'
        : 'https://brianphillips.xyz',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    'gatsby-plugin-postcss',
    `@contentful/gatsby-transformer-contentful-richtext`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Caveat`,
              variants: [`600`],
            },
            {
              family: `Red Hat Text`,
              variants: [`500`, `700`, `500i`, `500i`],
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: 'q6jei6a1m4b2',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
        environment: 'master',
      },
    },
  ],
}
