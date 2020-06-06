import { useRef, useEffect } from 'react';
import Typed from 'typed.js';
import resume from '../public/Gary_Chiu_Resume_a.pdf';
import githubIcon from '../public/icons/github.svg';
import fileIcon from '../public/icons/file.svg';
import linkedinIcon from '../public/icons/linkedin.svg';
import arrowDownIcon from '../public/icons/angle-down.svg';
import Header from '../components/Header';
import IconLink from '../components/IconLink';
import * as ReactGA from '../utils/react-ga';

const handleResumeDownloaded = () => {
    ReactGA.sendEvent('Link', 'Downloaded Resume');
};

const handleSocialLinkClicked = website => {
    ReactGA.sendEvent('Link', `Clicked ${website} Profile`);
};

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
    const aboutRef = useRef(null);
    const descRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(descRef.current, {
            strings: ['Full Stack Web Developer', 'Software Engineer', 'Consultant'],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
            backDelay: 2500
        });
        typed.start();
    }, []);

    return (<>
        <Header />
        <main>
            <section>
                <div>
                    <h1 className="landing__title">
                        Gary Chiu
                    </h1>
                    <div className={'landing__description'}>
                        <span className="description" ref={descRef} />
                    </div>
                    <div className={'landing__socials'}>
                        <IconLink
                            href={resume}
                            imgAlt={'Resume Download'}
                            icon={fileIcon}
                            download={true}
                            onClick={handleResumeDownloaded}
                        />
                        <span className={"socials__separator"}>|</span>
                        <IconLink
                            href={'https://www.github.com/garygcchiu'}
                            imgAlt={'GitHub Profile'}
                            icon={githubIcon}
                            onClick={() => handleSocialLinkClicked('Github')}
                        />
                        <span className={"socials__separator"}>|</span>
                        <IconLink
                            href={'https://www.linkedin.com/in/garygcchiu/'}
                            imgAlt={'LinkedIn Profile'}
                            icon={linkedinIcon}
                            onClick={() => handleSocialLinkClicked('LinkedIn')}
                        />
                    </div>
                </div>
                <div style={{ position: 'absolute', bottom: '30px'  }}>
                    <IconLink
                        href={undefined}
                        imgAlt={'Scroll to About Me'}
                        icon={arrowDownIcon}
                        onClick={() => scrollToSection(aboutRef)}
                        className={'arrow-down__icon bounce'}
                        target={'_self'}
                    />
                </div>
            </section>
            <section className={'dark'} ref={aboutRef}>
                <div>
                    Coming soon
                </div>
            </section>
        </main>
    </>)
}
