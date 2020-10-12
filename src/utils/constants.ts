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
    isFeatured: boolean
    isFirstFeatured: boolean
    publishedDate: Date
    heroImage: TImage
    content: {
      content: string
    }
  }
}

export type TTag = {
  tags: Array<string>
}
