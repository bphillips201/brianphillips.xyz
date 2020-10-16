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
      allContentfulPosts {
        edges {
          node {
            id
            slug
          }
        }
      }
      allContentfulCategories {
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

    const { allContentfulPosts, allContentfulCategories } = result.data
    const posts = allContentfulPosts.edges.map(n => n.node)
    const categories = allContentfulCategories.edges.map(n => n.node)

    posts.forEach(p => {
      createPage({
        path: p.slug,
        component: path.resolve("src/templates/post.tsx"),
        context: {
          id: p.id,
        },
      })
    })

    categories.forEach(c => {
      createPage({
        path: `c/${c.slug}`,
        component: path.resolve("src/templates/category.tsx"),
        context: {
          id: c.id,
        },
      })
    })
  })
}
