import React, { useState, createRef } from 'react';
import ImageSection from '../components/ImageSection';
import Landing from '../components/Landing';
import About from '../components/About';
import Contact from '../components/Contact';
import * as ReactGA from '../utils/react-ga';
import { useDarkMode } from 'next-dark-mode'
import IconLink from '../components/IconLink';
import FadeIn from '../components/FadeIn';
import Loader from '../components/Loader';

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
    const [isLoading, setIsLoading] = useState(true);
    const aboutRef = createRef();

    return <div className={darkModeActive ? 'dark-mode' : 'light-mode'}>
        {
            isLoading ? <Loader onLoadComplete={() => setIsLoading(false)} /> :
                <main>
                    <div id="background_wrap" />
                    <section>
                        <Landing />
                        <FadeIn className={'landing__arrow-down'}>
                            <IconLink
                                href={undefined}
                                imgAlt={'Click to View More'}
                                className={'landing__arrow-down__icon socials__icon arrow-down bounce'}
                                onClick={() => scrollToSection(aboutRef)}
                            />
                        </FadeIn>
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
        }
    </div>;
}
