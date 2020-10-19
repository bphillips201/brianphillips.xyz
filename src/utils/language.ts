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
    learnMore: string
    aboutMe: string
  }
  newsletter: {
    newsletterHeader: string
    newsletterBlurb: string
    emailPlaceholder: string
    submitButton: string
  }
  blog: {
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
    topics: `Topics`,
    learnMore: `Learn More`,
    aboutMe: `Brian Phillips is a software engineer, writer, and investor living on the central coast of California.`
  },
  newsletter: {
    newsletterHeader: `Get the newsletter`,
    newsletterBlurb:
      `Receive my digest of featured writing, along with an occasional list of recommended books, movies, and video games. Ideal for geeks.`,
    emailPlaceholder: `Enter your email...`,
    submitButton: `Subscribe`,
  },
  blog: {
    searchPlaceholder: `Search posts...`,
    olderPosts: `Older Posts →`,
    newerPosts: `← Newer Posts`,
  },
}

export default language
