import ReactGA from 'react-ga';
import headshot from '../public/Headshot_2020.jpg';
import resume from '../public/Gary_Chiu_Resume_a.pdf';
import headshotNoBG from '../public/headshot_2020_no-bg.png';

const handleResumeDownloaded = () => {
    ReactGA.event({
        category: 'Link',
        action: 'Downloaded Resume'
    });
};


export default function Index() {
    ReactGA.pageview('/');
    return (
        <div className="container">
            <main>
                <div>
                    <img src={headshotNoBG}
                         alt={"Gary Chiu Headshot"}
                         width={540}
                         height={360}
                    />
                </div>
                <div>
                    <h1 className="title">
                        Gary Chiu
                    </h1>
                    <p className="description">
                        Hi, I'm Gary! I'm a Software Developer at Konrad Group.

                        I'm passionate about mobile and front-end development, design, and user experiences.<br/><br/>

                        Previously, I've completed internships/co-ops at Manulife Financial, Mapsted, and Big Blue Bubble.<br/><br/>
                    </p>
                    <a
                        href={resume}
                        target="_blank"
                        download
                        onClick={handleResumeDownloaded}
                    >
                        Download Resume
                    </a>
                </div>
            </main>
        </div>
    )
}
