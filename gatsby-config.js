require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Brian Phillips`,
    description: `Inspiring smart people to do smart things`,
    author: `Brian Phillips`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
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
        icon: `src/images/favicon.svg`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Overpass`,
            variants: [`600`],
          },
          {
            family: `IBM Plex Sans`,
            variants: [`400`, `600`, `400i`, `600i`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: 'q6jei6a1m4b2',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
        environment:
          process.env.NODE_ENV === 'development' ? 'master' : 'master',
      },
    },
  ],
}
