const { TRUE } = require('node-sass');
const siteMetadata = require('./site-metadata.json')

module.exports = {
    pathPrefix: '/',
    siteMetadata: siteMetadata,
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-source-data`,
        `gatsby-plugin-postcss`,
        `gatsby-plugin-fontawesome-css`,
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `en`,
                path: `${__dirname}/src/pages/en/`
            }
        },
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
        {
            resolve: `gatsby-plugin-react-intl`,
            options: {
              path: `${__dirname}/src/intl`,
              languages: [`el`, `en`],
              defaultLanguage: `el`,
              // This prevents gatsby-plugin-intl from auto-redirecting to default language versions
              redirect: true,
              redirectDefaultLanguageToRoot: true,

        },
    }
    ]
};
