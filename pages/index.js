import React, { useState, createRef } from 'react';
import ImageSection from '../components/ImageSection';
import Landing from '../components/Landing';
import About from '../components/About';
import Contact from '../components/Contact';
import * as ReactGA from '../utils/react-ga';
import { useDarkMode } from 'next-dark-mode'
import IconLink from '../components/IconLink';
import FadeInDiv from '../components/FadeInDiv';

const scrollToSection = ref => {
    const el = ref.current ? ref.current : ref;
    el.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
    ReactGA.sendEvent('Interaction', `Clicked Scroll Down`);
};

export default function Index() {
    ReactGA.pageView('/');
    const { darkModeActive } = useDarkMode();
    const aboutRef = createRef();

    return <div className={darkModeActive ? 'dark-mode' : 'light-mode'}>
        <main>
            <div id="background_wrap" />
            <section>
                <Landing />
                <FadeInDiv className={'landing__arrow-down'} animationOrder={2}>
                    <IconLink
                        href={undefined}
                        imgAlt={'Click to View More'}
                        className={'landing__arrow-down__icon socials__icon arrow-down bounce'}
                        onClick={() => scrollToSection(aboutRef)}
                    />
                </FadeInDiv>
            </section>
            <ImageSection/>
            <section>
                <About ref={aboutRef} />
            </section>
            <ImageSection />
            <section>
                <Contact />
            </section>
        </main>
    </div>;
}
