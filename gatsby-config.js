module.exports = {
  siteMetadata: {
    title: `Welcome to My Blog`,
    name: `Narative`,
    siteUrl: `https://www.kenrique.com`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `Just About Everything I Love`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/aka_kenrique`,
      },
      {
        name: `github`,
        url: `https://github.com/KenriqueM`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/kenriquesworld`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/kennedy-maling-b8117192/`,
      },
      {
        name: `dribbble`,
        url: `https://dribbble.com/narativestudio`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
};
