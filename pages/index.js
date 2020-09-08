import Header from '../components/Header';
import FadeInSection from '../components/FadeInSection';
import ImageSection from '../components/ImageSection';
import Landing from '../components/Landing';
import Contact from '../components/Contact';
import * as ReactGA from '../utils/react-ga';

export default function Index() {
    ReactGA.pageView('/');

    return (<>
        <Header />
        <main>
            <div id="background_wrap" />
            <FadeInSection fadeChildrenOnly={true}>
                <Landing />
            </FadeInSection>
            <ImageSection />
            <FadeInSection className={'dark alt'} fadeChildrenOnly={true}>
                <Contact />
            </FadeInSection>
        </main>
    </>)
}
