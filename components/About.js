import React, { forwardRef } from 'react';
import FadeIn from './FadeIn';

const About = forwardRef((props, ref) => {
    return <div className={'about'} ref={ref}>
        <FadeIn>
            <h2 className={'about__title'}>
                Nice to meet you 😄
            </h2>
            <div className={'about__text pb-5 mb-5'}>
                I’m currently a Software Developer at Konrad Group, building innovative solutions for industry-leading clients.<br/>
                I am passionate about using technology to improve quality of life — and making it look & feel as good as possible.
            </div>
        </FadeIn>
        <FadeIn>
            <h2 className={'about__title pt-5'}>
                Skills
            </h2>
        </FadeIn>
        <div className={'about__skills about__text'}>
            <FadeIn cascade>
                <div className={'mb-5'}>
                    <div>
                        <div className={'about__skills__title'}>Languages</div>
                        <div>JavaScript</div>
                        <div>HTML</div>
                        <div>CSS/Sass</div>
                        <div>SQL (PostgreSQL, MySQL)</div>
                        <div>Java</div>
                        <div>Python</div>
                        <div>TypeScript</div>
                        <div>C#</div>
                    </div>
                </div>
                <div className={'mb-5'}>
                    <div>
                        <div className={'about__skills__title'}>Frameworks</div>
                        <div>React</div>
                        <div>Node.js</div>
                        <div>Express</div>
                        <div>.NET Core</div>
                        <div>Next.js</div>
                        <div>Redux</div>
                        <div>Android</div>
                        <div>Spring Boot</div>
                        <div>Angular</div>
                        <div>Unity3D</div>
                    </div>
                </div>
                <div className={'mb-5'}>
                    <div>
                        <div className={'about__skills__title'}>DevOps</div>
                        <div>Amazon Web Services</div>
                        <div>Docker</div>
                        <div>Google Cloud Platform</div>
                        <div>Pivotal Cloud Foundry</div>
                        <div>Concourse CI/CD</div>
                        <div>Mocha, Chai</div>
                    </div>
                </div>
            </FadeIn>
        </div>
        <FadeIn className={'py-5 my-5'}>
            <div >
                <h2 className={'about__title'}>
                    Experience
                </h2>
                <div className={'about__text'}>
                    <div className={'about__company'}>
                        <div>
                            <a href={'https://konrad.com'} target={'_blank'}><b>Konrad Group</b></a>
                            <div>Software Developer</div>
                        </div>
                        <div className={'about__company__dates'}>May 2019 – Present</div>
                    </div>
                    <div className={'about__company'}>
                        <div>
                            <a href={'https://manulife.ca'} target={'_blank'}><b>Manulife</b></a>
                            <div>Software Developer/Project Coordinator Co-op</div>
                        </div>
                        <div className={'about__company__dates'}>May 2018 – August 2018 </div>
                    </div>
                    <div className={'about__company'}>
                        <div>
                            <a href={'https://mapsted.com'} target={'_blank'}><b>Mapsted</b></a>
                            <div>Software Developer Intern</div>
                        </div>
                        <div className={'about__company__dates'}>January 2018 – April 2018</div>
                    </div>
                    <div className={'about__company'}>
                        <div>
                            <a href={'https://bigbluebubble.com'} target={'_blank'}><b>Big Blue Bubble</b></a>
                            <div>Games Programmer - Intern</div>
                        </div>
                        <div className={'about__company__dates'}>May 2017 – December 2017</div>
                    </div>
                </div>
            </div>
        </FadeIn>
    </div>
});

export default About;