/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allContentfulBlogPost {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) return Promise.reject(result.errors)

    const { allContentfulBlogPost } = result.data
    const posts = allContentfulBlogPost.edges.map(n => n.node)

    posts.forEach(p => {
      createPage({
        path: p.slug,
        component: path.resolve("src/templates/post.tsx"),
        context: {
          id: p.id,
        },
      })
    })
  })
}
