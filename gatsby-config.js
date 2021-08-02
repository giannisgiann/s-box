const siteMetadata = require('./site-metadata.json')
 
module.exports = {
    pathPrefix: '/',
    siteMetadata: siteMetadata,
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-source-data`,
        `gatsby-plugin-postcss`,
        `gatsby-plugin-fontawesome-css`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,

        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `markdown-pages`,
                path: `${__dirname}/src/pages`
            }
        },
        
          `gatsby-transformer-remark`,
        {
            resolve: `gatsby-plugin-sass`,
            options: {}
        },
        {
            resolve: `gatsby-remark-page-creator`,
            options: {}
        },
        {
            resolve: `@stackbit/gatsby-plugin-menus`,
            options: {
                sourceUrlPath: `fields.url`,
                pageContextProperty: `menus`,
            }
        },
      
      
   
    ],
};
