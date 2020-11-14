require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Brian Phillips`,
    description: `Inspiring smart people to do smart things`,
    author: `Brian Phillips`,
    siteUrl: process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : 'https://angry-fermat-ee6c83.netlify.app',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
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
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
            file(relativePath: { eq: "banner-img.jpg" }) {
              childImageSharp {
                fluid(quality: 100, cropFocus: CENTER, maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allContentfulPosts, file } }) => {
              return allContentfulPosts.edges.map(post => {
                const pageImageUrl =
                `https://${post.node.heroImage.fluid.src}` || site.siteMetadata.siteUrl + file.childImageSharp.fluid.src

                return Object.assign({}, post.node, {
                  description: post.node.excerpt.excerpt,
                  date: post.node.publishDate,
                  url: site.siteMetadata.siteUrl + `/blog/` + post.node.slug,
                  guid: site.siteMetadata.siteUrl + `/blog/` + post.node.slug,
                  custom_elements: [{ "content:encoded": post.node.content.childMarkdownRemark.html }],
                  enclosure: {
                    url: postImageUrl
                  }
                })
              })
            },
            query: `
              {
                allContentfulPosts(sort: {order: DESC, fields: publishDate}) {
                  edges {
                    node {
                      title
                      content {
                        childMarkdownRemark {
                          html
                        }
                      }
                      slug
                      publishDate
                      excerpt {
                        excerpt
                      }
                      updatedAt
                      heroImage {
                        description
                        fluid(
                          resizingBehavior: FILL
                          maxWidth: 1000
                          cropFocus: CENTER
                          maxHeight: 500
                          quality: 90
                        ) {
                          ...GatsbyContentfulFluid
                        }
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Brian Phillips — Blog",
          },
        ],
      },
    },

  ],
}
