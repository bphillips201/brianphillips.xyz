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
    darkToggle: "Switch to Dark Mode",
    lightToggle: "Switch to Light Mode",
    copyright: `Copyright © ${new Date().getFullYear()} Brian Phillips`,
  },
  homePage: {
    featuredWriting: "Featured Writing",
    latestPosts: "Latest Posts",
    topics: "Topics",
    learnMore: "Learn More",
  },
  newsletter: {
    newsletterHeader: "Get the newsletter",
    newsletterBlurb:
      "Receive my digest of featured writing, along with an occasional list of recommended books, movies, and video games. Ideal for geeks.",
    emailPlaceholder: "Enter your email...",
    submitButton: "Subscribe",
  },
  blog: {
    searchPlaceholder: "Search posts...",
    olderPosts: "Older Posts →",
    newerPosts: "← Newer Posts",
  },
}

export default language
