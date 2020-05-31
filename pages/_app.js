import React from 'react';
import Head from 'next/head';
import "../styles/main.scss";
import favicon from '../public/favicon.ico';
import appleTouchFavicon from '../public/apple-touch-icon.png';
import manifest from '../public/site.webmanifest';
import ReactGA from 'react-ga';

const MyApp = ({Component, pageProps}) => {
    ReactGA.initialize(process.env.GOOGLE_ANALYTICS_TRACKING_ID, {
        debug: process.env.NODE_ENV !== 'production'
    });
    return <>
        <Head>
            <link rel="shortcut icon" href={favicon} />
            <link rel="apple-touch-icon" sizes="180x180" href={appleTouchFavicon} />
            <link rel="manifest" href={manifest} />
            <title>Gary Chiu</title>
        </Head>
        <Component {...pageProps} />
    </>
};

export default MyApp;
