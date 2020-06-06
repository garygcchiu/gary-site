import ReactGA from 'react-ga';
//import headshot from '../public/Headshot_2020.jpg';
import resume from '../public/Gary_Chiu_Resume_a.pdf';
//import headshotNoBG from '../public/headshot_2020_no-bg.png';
import githubIcon from '../public/icons/github.svg';
import fileIcon from '../public/icons/file.svg';
import linkedinIcon from '../public/icons/linkedin.svg';
import Header from '../components/Header';
import IconLink from '../components/IconLink';

const handleResumeDownloaded = () => {
    ReactGA.event({
        category: 'Link',
        action: 'Downloaded Resume'
    });
};

const handleSocialLinkClicked = website => {
    ReactGA.event({
        category: 'Link',
        action: `Clicked ${website} Profile`
    });
};

export default function Index() {
    ReactGA.pageview('/');
    return (<>
        <Header />
        <div className="container">
            <main>
                <div>
                    {/*<img src={headshotNoBG}*/}
                    {/*     alt={"Gary Chiu Headshot"}*/}
                    {/*     width={540}*/}
                    {/*     height={360}*/}
                    {/*/>*/}
                </div>
                <div>
                    <h1 className="title">
                        Gary Chiu
                    </h1>
                    <p className="description">
                        hehe xd
                    </p>
                    <div className={'d-flex justify-content-center'}>
                        <IconLink
                            href={resume}
                            imgAlt={'Resume Download'}
                            icon={fileIcon}
                            onClickCallback={handleResumeDownloaded}
                        />
                        <span className={"socials__separator"}>|</span>
                        <IconLink
                            href={'https://www.github.com/garygcchiu'}
                            imgAlt={'GitHub Profile'}
                            icon={githubIcon}
                            onClickCallback={() => handleSocialLinkClicked('Github')}
                        />
                        <span className={"socials__separator"}>|</span>
                        <IconLink
                            href={'https://www.linkedin.com/in/garygcchiu/'}
                            imgAlt={'LinkedIn Profile'}
                            icon={linkedinIcon}
                            onClickCallback={() => handleSocialLinkClicked('LinkedIn')}
                        />
                    </div>
                </div>
            </main>
        </div>
    </>)
}
