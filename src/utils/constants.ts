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
  tags: Array<string>
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

export type TAllContentfulPosts = {
  [name: string]: {
    edges: Array<TContentfulPost>
  }
}

export type TContentfulPost = {
  [name: string]: TPost
}

export type TTag = {
  tags: Array<string>
}
