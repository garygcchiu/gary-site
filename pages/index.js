import { useRef, useEffect } from 'react';
import Typed from 'typed.js';
import Particles from 'react-particles-js';
import resume from '../public/Gary_Chiu_Resume_a.pdf';
//import headshotNoBG from '../public/headshot_2020_no-bg.png';
//import headshot from '../public/Headshot_2020.jpg';
import githubIcon from '../public/icons/github.svg';
import fileIcon from '../public/icons/file.svg';
import linkedinIcon from '../public/icons/linkedin.svg';
import Header from '../components/Header';
import IconLink from '../components/IconLink';
import * as ReactGA from '../utils/react-ga';

const particlesParams = {
    particles: {
        number: {
            value: 20
        },
        size: {
            value: 1
        },
        color: {
            value: '#000000'
        },
        line_linked: {
            enable: true,
            opacity: 0.2,
            color: '#000000'
        },
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            }
        }
    }
};

const handleResumeDownloaded = () => {
    ReactGA.sendEvent('Link', 'Downloaded Resume');
};

const handleSocialLinkClicked = website => {
    ReactGA.sendEvent('Link', `Clicked ${website} Profile`);
};

export default function Index() {
    ReactGA.pageView('/');
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
        <Particles
            className={'landing__particles'}
            params={particlesParams}
        />
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
            </section>

        </main>
    </>)
}
