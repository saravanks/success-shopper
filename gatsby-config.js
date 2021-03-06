var dotenv = require("dotenv");
dotenv.config();

const { spaceId, accessToken, snipcart } = process.env;

module.exports = {
  siteMetadata: {
    title: `OneShopper`,
    description: `E-Commerce site with Gatsby and React`,
    author: `@rohitguptab`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `OneShopper`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/oneshopper-logo.png`,
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: 'hqen29pbrf9p',
        accessToken: 'xn29OFXZsyiZWSi4cv4WiUVfqlJU_YSECJaQC53DBPo',
        downloadLocal: true,
      }
    },
    {
      resolve: "gatsby-plugin-snipcart",
      options: {
        apiKey: 'ZWYyZDI2NWItMDJlNC00M2I1LWEwNDAtOWUzYWU0ZGU0NjRhNjM2ODMzOTYwMDk2MzMzNjk2',
        autopop: true,
      },
    },
  ],
}
