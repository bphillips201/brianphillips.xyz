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
            category {
              id
            }
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
    const postsPerPage = 3
    const numPages = Math.ceil(posts.length / postsPerPage)

    // Blog post list
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `blog` : `blog/${i + 1}`,
        component: path.resolve('src/templates/blog.tsx'),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })

    // Single post
    posts.forEach(p => {
      createPage({
        path: `blog/${p.slug}`,
        component: path.resolve('src/templates/post.tsx'),
        context: {
          id: p.id,
        },
      })
    })

    // Category post lists
    categories.forEach(c => {
      const categoryPosts = posts.filter(p => p.category.id === c.id)
      const numCategoryPages =
        Math.ceil(categoryPosts.length / postsPerPage) || 1

      Array.from({ length: numCategoryPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? `c/${c.slug}` : `c/${c.slug}/${i + 1}`,
          component: path.resolve('src/templates/category.tsx'),
          context: {
            id: c.id,
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages: numCategoryPages,
            currentPage: i + 1,
          },
        })
      })
    })
  })
}
