require('dotenv').config();
const withImages = require('next-images');

const { GOOGLE_ANALYTICS_TRACKING_ID } = process.env;

module.exports = withImages({
    webpack(config) {
        config.module.rules.push({
            test: /\.(pdf)$/i,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                publicPath: '/',
            },
        });
        return config;
    },
    env: {
        GOOGLE_ANALYTICS_TRACKING_ID,
    },
    images: {
        disableStaticImages: true,
    },
});
