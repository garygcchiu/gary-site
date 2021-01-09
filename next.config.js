// require('dotenv').config();
const withImages = require('next-images');
// const GOOGLE_ANALYTICS_TRACKING_ID = process.env.GOOGLE_ANALYTICS_TRACKING_ID;

module.exports = withImages({
    webpack(config, options) {
        config.module.rules.push({
            test: /\.(webmanifest)$/i,
            use: [
                {
                    loader: "file-loader",
                    options: {
                        name: '[name].[ext]',
                        publicPath: '/',
                    },
                },
                {
                    loader: "app-manifest-loader"
                }
            ]
        }, {
            test: /\.(pdf)$/i,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                publicPath: '/',
            },
        });
        return config
    },
    env: {
        // GOOGLE_ANALYTICS_TRACKING_ID: GOOGLE_ANALYTICS_TRACKING_ID,
    },
});

