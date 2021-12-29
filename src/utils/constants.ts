import { ImageDataLike } from 'gatsby-plugin-image'

export type TPost = {
  id: string
  category: TCategory
  title: string
  slug: string
  readTime: string
  updatedAt: string
  fields: {
    path: string
  }
  isFeatured: boolean
  isFirstFeatured: boolean
  publishDate: Date
  heroImage: ImageDataLike
  content: {
    childMarkdownRemark: {
      html: string
    }
  }
  excerpt: {
    excerpt: string
  }
}

export type TContentfulPost = {
  [name: string]: TPost
}

export type TAllContentfulPosts = {
  allContentfulPosts: {
    edges: Array<TContentfulPost>
  }
}

export type TCategory = {
  id?: string
  title: string
  fields: {
    path: string
  }
}

export type TContentfulCategory = {
  [name: string]: TCategory
}

export type TAllContentfulCategories = {
  allContentfulCategories: {
    edges: Array<TContentfulCategory>
  }
}

export type TPostGlobals = {
  data: TAllContentfulPosts & TAllContentfulCategories & TContentfulPost
  path: string
  location: {
    href: string
  }
  pageContext: {
    numPages: number
    currentPage: number
  }
}
