import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import "../styles/main.scss";
import favicon from '../public/favicon.ico';
import appleTouchFavicon from '../public/apple-touch-icon.png';
import manifest from '../public/site.webmanifest';
import * as ReactGA from '../utils/react-ga';
import Loader from "../components/Loader";

const MyApp = ({Component, pageProps}) => {
    const [loading, setLoading] = useState(true);

    // componentDidMount
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    ReactGA.init();
    return <>
        <Head>
            <link rel="shortcut icon" href={favicon} />
            <link rel="apple-touch-icon" sizes="180x180" href={appleTouchFavicon} />
            <link rel="manifest" href={manifest} />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                  crossOrigin="anonymous" />
            <title>Gary Chiu</title>
            <meta name="description" content={"Gary Chiu's Personal Website"}/>
            <meta name="author" content="Gary Chiu" />
            <meta name="keywords" content="Gary, Chiu, Gary Chiu, portfolio, website" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="theme-color" content="#FFFFFF" />
        </Head>
        {
            loading ? <Loader />
                : <Component {...pageProps} />
        }
    </>
};

export default MyApp;
