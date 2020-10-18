export type TImage = {
  description: string
  fluid: {
    aspectRatio: number
    base64: string
    sizes: string
    src: string
    srcSet: string
  }
}

export type TPost = {
  id: string
  category: TCategory
  title: string
  slug: string
  isFeatured: boolean
  isFirstFeatured: boolean
  publishDate: Date
  heroImage: TImage
  content: {
    content: string
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
  slug: string
  readOnly?: boolean
}

export type TContentfulCategory = {
  [name: string]: TCategory
}

export type TAllContentfulCategories = {
  allContentfulCategories: {
    edges: Array<TContentfulCategory>
  }
}