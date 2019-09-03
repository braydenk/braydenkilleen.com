module.exports = {
  siteMetadata: {
    title: 'Brayden Killeen',
    siteUrl: 'https://www.braydenkilleen.com',
    description: 'Personal website',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`,
      },
    },
    `gatsby-transformer-remark`,
  ],
};
