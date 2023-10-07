require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});


module.exports = {

  siteMetadata: {
    title: `Elliot Rancie Showcase`,
    description: `An out of this world experience showcasing projects designed and developed by Elliot Rancie`,
    // twitterUsername: `@gatsbyjs`,
    image: `/svg/icon.svg`,
    siteUrl: `https://www.elliotrancie.space`                                                 ,
    author: `Elliot Rancie`
  },
  
  plugins: [
    `gatsby-plugin-mdx`,
    `gatsby-plugin-sass`,
    'gatsby-plugin-postcss',
    `gatsby-plugin-react-helmet`,
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
        trackingIds: [ process.env.GATSBY_GA_TRACKING_ID ]
      },
    },
  ],

}
