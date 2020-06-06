import ReactGA from "react-ga";

const init = () => {
    ReactGA.initialize(process.env.GOOGLE_ANALYTICS_TRACKING_ID, {
        debug: process.env.NODE_ENV !== 'production'
    });
};

const pageView = page => {
    ReactGA.pageview(page);
};

const sendEvent = (category, action) => {
    ReactGA.event({
        category,
        action
    })
};

export {
    init,
    pageView,
    sendEvent
}