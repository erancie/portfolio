require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  plugins: [
    `gatsby-plugin-mdx`,
    `gatsby-plugin-sass`,
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-mailchimp', // see: https://www.gatsbyjs.com/plugins/gatsby-plugin-mailchimp/
      options: {
          endpoint: process.env.GATSBY_MAILCHIMP_ENDPOINT,
          timeout: 3500,
      },
    },

    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'static/svg/icon.svg',
      },
    },

    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingId:  process.env.GA_TRACKING_ID,
      },
    },
  ],
}
