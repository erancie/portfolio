
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-mdx`,
    `gatsby-plugin-sass`,
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-mailchimp', // see: https://www.gatsbyjs.com/plugins/gatsby-plugin-mailchimp/
      options: {
          endpoint: process.env.MAILCHIMP_ENDPOINT,
          timeout: 3500,
      },
    },
  ],
}
