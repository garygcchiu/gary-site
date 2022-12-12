import React, { useEffect } from 'react';
import Head from 'next/head';
import '../styles/main.scss';
import mailgo from 'mailgo';
import withDarkMode from 'next-dark-mode';
import smoothscroll from 'smoothscroll-polyfill';
import appleTouchFavicon from '../public/images/apple-touch-icon.png';
import * as ReactGA from '../utils/react-ga';

const MyApp = ({ Component, pageProps }) => {
    ReactGA.init();

    useEffect(() => {
        mailgo();
        smoothscroll.polyfill();
    }, []);

    return (
        <>
            <Head>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href={appleTouchFavicon}
                />
                <title>Gary Chiu</title>
                <meta
                    name="description"
                    content={"Gary Chiu's Personal Website"}
                />
                <meta name="author" content="Gary Chiu" />
                <meta
                    name="keywords"
                    content="Gary, Chiu, Gary Chiu, portfolio, website"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta name="theme-color" content="#FFFFFF" />
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default withDarkMode(MyApp);
