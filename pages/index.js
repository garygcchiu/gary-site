import React, { useState } from 'react';
import FadeInSection from '../components/FadeInSection';
import ImageSection from '../components/ImageSection';
import Landing from '../components/Landing';
import About from '../components/About';
import Contact from '../components/Contact';
import * as ReactGA from '../utils/react-ga';
import { useDarkMode } from 'next-dark-mode'

export default function Index() {
    ReactGA.pageView('/');

    const { darkModeActive } = useDarkMode()

    return <div className={darkModeActive ? 'dark-mode' : 'light-mode'}>
        <main>
            <div id="background_wrap" />
            <FadeInSection>
                <Landing />
            </FadeInSection>
            <ImageSection />
            <FadeInSection>
                <About />
            </FadeInSection>
            <ImageSection />
            <FadeInSection>
                <Contact />
            </FadeInSection>
        </main>
    </div>;
}
