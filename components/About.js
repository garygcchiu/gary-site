import React, { forwardRef } from 'react';
import FadeInDiv from './FadeInDiv';

const About = forwardRef((props, ref) => {
    return <div className={'about'} ref={ref}>
        <FadeInDiv threshold={0.8} className={'pb-5 mb-5'}>
            <h2 className={'about__title'}>
                Nice to meet you 😄
            </h2>
            <div className={'about__text'}>
                I’m currently a Software Developer at Konrad Group, building innovative solutions for industry-leading clients.<br/>
                I am passionate about using technology to improve quality of life — and making it look & feel as good as possible.
            </div>
        </FadeInDiv>
        <FadeInDiv threshold={0.3} className={'py-5 my-5'} animationOrder={0}>
            <h2 className={'about__title'}>
                Skills
            </h2>
            <div className={'about__text about__skills'}>
                <FadeInDiv threshold={0.7} animationOrder={1} fast className={'mb-5'}>
                    <div className={'about__skills__title'}>Languages</div>
                    <div>JavaScript</div>
                    <div>HTML</div>
                    <div>CSS/Sass</div>
                    <div>SQL (PostgreSQL, MySQL)</div>
                    <div>Java</div>
                    <div>Python</div>
                    <div>TypeScript</div>
                    <div>C#</div>
                    <div>Elasticsearch</div>
                </FadeInDiv>
                <FadeInDiv threshold={0.7} animationOrder={2} fast className={'mb-5'}>
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
                </FadeInDiv>
                <FadeInDiv threshold={0.7} animationOrder={3} fast>
                    <div className={'about__skills__title'}>DevOps</div>
                    <div>Amazon Web Services</div>
                    <div>Docker</div>
                    <div>Google Cloud Platform</div>
                    <div>Pivotal Cloud Foundry</div>
                    <div>Concourse CI/CD</div>
                    <div>Mocha, Chai</div>
                </FadeInDiv>
            </div>
        </FadeInDiv>
        <FadeInDiv threshold={0.3} className={'py-5 my-5'}>
            <h2 className={'about__title'}>
                Experience
            </h2>
            <div className={'about__text'}>
                <div className={'about__company'}>
                    <div>
                        <b>Konrad Group</b>
                        <div>Software Developer</div>
                    </div>
                    <div className={'about__company__dates'}>May 2019 – Present</div>
                </div>
                <div className={'about__company'}>
                    <div>
                        <b>Manulife</b>
                        <div>Software Developer/Project Coordinator Co-op</div>
                    </div>
                    <div className={'about__company__dates'}>May 2018 – August 2018 </div>
                </div>
                <div className={'about__company'}>
                    <div>
                        <b>Mapsted</b>
                        <div>Software Developer Intern</div>
                    </div>
                    <div className={'about__company__dates'}>January 2018 – April 2018</div>
                </div>
                <div className={'about__company'}>
                    <div>
                        <b>Big Blue Bubble</b><div>Games Programmer - Intern</div>
                    </div>
                    <div className={'about__company__dates'}>May 2017 – December 2017</div>
                </div>
            </div>
        </FadeInDiv>
    </div>
});

export default About;