
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-mdx`,
    `gatsby-plugin-sass`,
    'gatsby-plugin-postcss',
    // {
    //   resolve: 'gatsby-plugin-svg-sprites'
    // },
    // {
    //   resolve: "gatsby-plugin-react-svg",
    //   options: {
    //     rule: {
    //       include: /\.static\.svg$/ // See below to configure properly
    //     }
    //   }
    // }
  ],
}
