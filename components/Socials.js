import * as ReactGA from '../utils/react-ga';
import IconLink from './IconLink';
import resume from '../public/Gary_Chiu_Resume_2020.pdf';

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

const Socials = () => {

    return <div className={'landing__socials'}>
        <IconLink
            href={resume}
            imgAlt={'Resume Download'}
            className={'socials__icon resume'}
            download={false}
            onClick={handleResumeDownloaded}
        />
        <span className={"socials__separator"}>|</span>
        <IconLink
            href={'https://www.github.com/garygcchiu'}
            imgAlt={'GitHub Profile'}
            className={'socials__icon github'}
            onClick={() => handleSocialLinkClicked('Github')}
        />
        <span className={"socials__separator"}>|</span>
        <IconLink
            href={'https://www.linkedin.com/in/garygcchiu/'}
            imgAlt={'LinkedIn Profile'}
            className={'socials__icon linkedin'}
            onClick={() => handleSocialLinkClicked('LinkedIn')}
        />
        <span className={"socials__separator"}>|</span>
        <a href="#mailgo" data-address="gary.gc.chiu" data-domain="gmail.com" className={'socials__icon mail'} />
    </div>
};

export default Socials;