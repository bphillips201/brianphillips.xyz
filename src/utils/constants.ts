export type THeroImage = {
  description: string
  fluid: {
    aspectRatio: number
    base64: string
    sizes: string
    src: string
    srcSet: string
  }
}

export type TPostList = {
  [name: string]: {
    edges: Array<TPost>
  }
}

export type TPost = {
  [name: string]: {
    id: string
    tags: Array<string>
    title: string
    slug: string
    featuredPost: boolean
    readFirst: boolean
    publishedDate: Date
    heroImage: THeroImage
    content: {
      content: string
    }
  }
}

export type TTag = {
  tags: Array<string>
}
