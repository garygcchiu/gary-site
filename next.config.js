require('dotenv').config();
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');
const GOOGLE_ANALYTICS_TRACKING_ID = process.env.GOOGLE_ANALYTICS_TRACKING_ID;

module.exports = withSass(withImages({
    env: {
        GOOGLE_ANALYTICS_TRACKING_ID: GOOGLE_ANALYTICS_TRACKING_ID,
    },
}));

