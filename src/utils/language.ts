type TLanguage = {
  global: {
    darkToggle: string
    lightToggle: string
    copyright: string
  }
  homePage: {
    featuredWriting: string
    latestPosts: string
    topics: string
    aboutMe: string
    aboutMeLink: string
    viewBlog: string
  }
  newsletter: {
    newsletterHeader: string
    newsletterBlurb: string
    emailPlaceholder: string
    labelText: string
    submitButton: string
  }
  posts: {
    searchPlaceholder: string
    olderPosts: string
    newerPosts: string
  }
}

const language: TLanguage = {
  global: {
    darkToggle: `Switch to Dark Mode`,
    lightToggle: `Switch to Light Mode`,
    copyright: `© ${new Date().getFullYear()} Brian Phillips`,
  },
  homePage: {
    featuredWriting: `Featured Writing`,
    latestPosts: `Latest Posts`,
    topics: `Categories`,
    aboutMeLink: `Learn More`,
    viewBlog: `View Blog`,
    aboutMe: `Brian Phillips is a software engineer, writer, and investor living on the California central coast.`,
  },
  newsletter: {
    newsletterHeader: `Get the newsletter`,
    newsletterBlurb: `Receive my digest of featured writing, along with an occasional list of recommended books, movies, and video games. Ideal for geeks.`,
    emailPlaceholder: `yourname@website.com`,
    labelText: `Email address`,
    submitButton: `Subscribe`,
  },
  posts: {
    searchPlaceholder: `Search posts...`,
    olderPosts: `Older Posts`,
    newerPosts: `Newer Posts`,
  },
}

export default language
