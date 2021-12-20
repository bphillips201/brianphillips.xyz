/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

exports.onCreateNode = ({ node, _, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'ContentfulPosts') {
    createNodeField({
      node,
      name: 'path',
      value: `/archive/${node.slug}`,
    })
  }

  // if (node.internal.type === 'ContentfulCategories') {
  //   createNodeField({
  //     node,
  //     name: 'path',
  //     value: `/category/${node.slug}`,
  //   })
  // }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allContentfulPosts {
        edges {
          node {
            id
            fields {
              path
            }
            category {
              id
            }
          }
        }
      }
      allContentfulPage {
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

    const { allContentfulPosts, allContentfulPage } = result.data
    const posts = allContentfulPosts.edges.map(n => n.node)
    const pages = allContentfulPage.edges.map(n => n.node)
    const postsPerPage = 10
    const numPages = Math.ceil(posts.length / postsPerPage)

    // Blog post list
    // Array.from({ length: numPages }).forEach((_, i) => {
    //   createPage({
    //     path: i === 0 ? `blog` : `blog/${i + 1}`,
    //     component: path.resolve('src/templates/blog.tsx'),
    //     context: {
    //       limit: postsPerPage,
    //       skip: i * postsPerPage,
    //       numPages,
    //       currentPage: i + 1,
    //     },
    //   })
    // })

    // Single post
    // posts.forEach(p => {
    //   createPage({
    //     path: p.fields.path,
    //     component: path.resolve('src/templates/post.tsx'),
    //     context: {
    //       id: p.id,
    //     },
    //   })
    // })

    // Pages
    pages.forEach(p => {
      createPage({
        path: p.slug,
        component: path.resolve('src/templates/page.tsx'),
        context: {
          id: p.id,
        },
      })
    })

    // Category post lists
    // categories.forEach(c => {
    //   const categoryPosts = posts.filter(p => p.category.id === c.id)
    //   const numCategoryPages =
    //     Math.ceil(categoryPosts.length / postsPerPage) || 1

    //   Array.from({ length: numCategoryPages }).forEach((_, i) => {
    //     createPage({
    //       path: i === 0 ? c.fields.path : `${c.fields.path}/${i + 1}`,
    //       component: path.resolve('src/templates/category.tsx'),
    //       context: {
    //         id: c.id,
    //         limit: postsPerPage,
    //         skip: i * postsPerPage,
    //         numPages: numCategoryPages,
    //         currentPage: i + 1,
    //       },
    //     })
    //   })
    // })
  })
}
