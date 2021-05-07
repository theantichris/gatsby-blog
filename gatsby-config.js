module.exports = {
  siteMetadata: {
    title: "theantichris.com",
    description: "Christopher Lamm's personal site."
  },
  plugins: [
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`
      }
    }
  ],
}
