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
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                  crossOrigin="anonymous" />
            <title>Gary Chiu</title>
        </Head>
        <Component {...pageProps} />
    </>
};

export default MyApp;
