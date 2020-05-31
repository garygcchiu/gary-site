require('dotenv').config();
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');
const GOOGLE_ANALYTICS_TRACKING_ID = process.env.GOOGLE_ANALYTICS_TRACKING_ID;

module.exports = withSass(withImages({
    webpack(config, options) {
        config.module.rules.push({
            test: /\.(webmanifest)$/i,
            loader: ["file-loader", "app-manifest-loader"]
        });
        return config
    },
    env: {
        GOOGLE_ANALYTICS_TRACKING_ID: GOOGLE_ANALYTICS_TRACKING_ID,
    },
}));

