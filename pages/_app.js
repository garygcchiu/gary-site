import React from 'react';
import Head from 'next/head';
import "../styles/main.scss";
import favicon from '../public/favicon.ico';
import ReactGA from 'react-ga';

const MyApp = ({Component, pageProps}) => {
    ReactGA.initialize(process.env.GOOGLE_ANALYTICS_TRACKING_ID, {
        debug: process.env.NODE_ENV !== 'production'
    });
    return <>
        <Head>
            <link rel="shortcut icon" href={favicon} />
            <title>Gary Chiu</title>
        </Head>
        <Component {...pageProps} />
    </>
};

export default MyApp;
