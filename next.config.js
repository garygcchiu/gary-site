require('dotenv').config();

const { GOOGLE_ANALYTICS_TRACKING_ID } = process.env;

module.exports = {
    webpack(config) {
        config.module.rules.push({
            test: /\.(pdf)$/i,
            type: 'asset/resource',
            generator: {
                filename: '[name][ext]',
            },
        });
        return config;
    },
    turbopack: {},
    env: {
        GOOGLE_ANALYTICS_TRACKING_ID,
    },
};
