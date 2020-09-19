import { useState } from 'react';
import Header from '../components/Header';
import FadeInSection from '../components/FadeInSection';
import ImageSection from '../components/ImageSection';
import Landing from '../components/Landing';
import About from '../components/About';
import Contact from '../components/Contact';
import * as ReactGA from '../utils/react-ga';
import { useDarkMode } from 'next-dark-mode'

export default function Index() {
    ReactGA.pageView('/');

    const {
        darkModeActive,
        switchToDarkMode,
        switchToLightMode,
    } = useDarkMode()

    return (<div className={darkModeActive ? 'dark-mode' : 'light-mode'}>
        <Header
            theme={darkModeActive}
            onSwitchChange={() => darkModeActive ? switchToLightMode() : switchToDarkMode()}
        />
        <main>
            {/*<div id="background_wrap" />*/}
            {/*<FadeInSection fadeChildrenOnly={true}>*/}
            {/*    <Landing />*/}
            {/*</FadeInSection>*/}
            {/*<ImageSection />*/}
            {/*<FadeInSection fadeChildrenOnly={true}>*/}
            {/*    <About />*/}
            {/*</FadeInSection>*/}
            {/*<ImageSection />*/}
            {/*<FadeInSection className={'dark alt'} fadeChildrenOnly={true}>*/}
            {/*    <Contact />*/}
            {/*</FadeInSection>*/}
        </main>
    </div>)
}
