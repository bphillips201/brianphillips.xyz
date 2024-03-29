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
  about: {
    [name: string]: {
      text: string
      url: string
    }
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
    aboutMe: `I’m Brian Phillips, a writer, investor, and front end coder living in
    New York City.`,
    aboutMeLink: `About Me`,
    viewBlog: `View Blog`,
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
  about: {
    linkedIn: {
      text: `View my LinkedIn profile`,
      url: `https://www.linkedin.com/in/bphillips201/`,
    },
    newsletter: {
      text: `Subscribe to my newsletter`,
      url: `http://eepurl.com/cSSbmz`,
    },
    now: {
      text: `See what I’m doing now`,
      url: `/now`,
    },
  },
}

export default language
