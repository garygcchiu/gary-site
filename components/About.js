import React, { forwardRef } from 'react';
import FadeIn from './FadeIn';

const About = forwardRef((props, ref) => (
    <div className={'about'} ref={ref}>
        <FadeIn>
            <h2 className={'about__title'}>Nice to meet you 😄</h2>
            <div className={'about__text pb-5 mb-5'}>
                I’m currently a Software Engineer at{' '}
                <a
                    href={'https://www.datadoghq.com'}
                    target={'_blank'}
                    rel="noreferrer"
                >
                    Datadog
                </a>
                . Previously I've been a Software Engineer at{' '}
                <a
                    href={'https://www.bolt.com'}
                    target={'_blank'}
                    rel="noreferrer"
                >
                    Bolt
                </a>{' '}
                and{' '}
                <a
                    href={'https://www.konrad.com'}
                    target={'_blank'}
                    rel="noreferrer"
                >
                    Konrad Group
                </a>
                .
                <br />I am passionate about using technology to improve quality
                of life — and making it look & feel as good as possible.
            </div>
        </FadeIn>
        <FadeIn>
            <h2 className={'about__title pt-5'}>Skills</h2>
        </FadeIn>
        <div className={'about__skills about__text'}>
            <FadeIn cascade>
                <div className={'mb-5'}>
                    <div>
                        <div className={'about__skills__title'}>Languages</div>
                        <div>JavaScript (TypeScript)</div>
                        <div>Go</div>
                        <div>HTML</div>
                        <div>CSS/Sass</div>
                        <div>SQL (PostgreSQL, MySQL)</div>
                        <div>Java</div>
                        <div>Python</div>
                        <div>C#</div>
                    </div>
                </div>
                <div className={'mb-5'}>
                    <div>
                        <div className={'about__skills__title'}>Frameworks</div>
                        <div>React</div>
                        <div>React Native</div>
                        <div>Node.js</div>
                        <div>Express</div>
                        <div>.NET Core</div>
                        <div>Next.js</div>
                        <div>Ruby on Rails</div>
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
                        <div>
                            <a
                                href={
                                    'https://www.youracclaim.com/badges/84715fed-42b8-4404-b3ef-7731e32c33db/public_url'
                                }
                                target={'_blank'}
                                rel="noreferrer"
                            >
                                (AWS Certified Developer)
                            </a>
                        </div>
                        <div>Docker</div>
                        <div>Terraform</div>
                        <div>Pivotal Cloud Foundry</div>
                        <div>Travis CI</div>
                        <div>Concourse CI/CD</div>
                        <div>Jest</div>
                        <div>Mocha, Chai</div>
                    </div>
                </div>
            </FadeIn>
        </div>
        <FadeIn className={'py-5 my-5'}>
            <div>
                <h2 className={'about__title'}>Experience</h2>
                <div className={'about__text'}>
                    <div className={'about__company'}>
                        <div>
                            <a
                                href={'https://dataadoghq.com'}
                                target={'_blank'}
                                rel="noreferrer"
                            >
                                <b>Datadog</b>
                            </a>
                            <div>Software Engineer</div>
                        </div>
                        <div className={'about__company__dates'}>
                            January 2022 – Present
                        </div>
                    </div>
                    <div className={'about__company'}>
                        <div>
                            <a
                                href={'https://bolt.com'}
                                target={'_blank'}
                                rel="noreferrer"
                            >
                                <b>Bolt</b>
                            </a>
                            <div>Software Engineer</div>
                        </div>
                        <div className={'about__company__dates'}>
                            June 2021 – December 2022
                        </div>
                    </div>
                    <div className={'about__company'}>
                        <div>
                            <a
                                href={'https://konrad.com'}
                                target={'_blank'}
                                rel="noreferrer"
                            >
                                <b>Konrad Group</b>
                            </a>
                            <div>Software Developer</div>
                        </div>
                        <div className={'about__company__dates'}>
                            May 2019 – May 2021
                        </div>
                    </div>
                    <div className={'about__company'}>
                        <div>
                            <a
                                href={'https://manulife.ca'}
                                target={'_blank'}
                                rel="noreferrer"
                            >
                                <b>Manulife</b>
                            </a>
                            <div>
                                Software Developer/Project Coordinator Co-op
                            </div>
                        </div>
                        <div className={'about__company__dates'}>
                            May 2018 – August 2018{' '}
                        </div>
                    </div>
                    <div className={'about__company'}>
                        <div>
                            <a
                                href={'https://mapsted.com'}
                                target={'_blank'}
                                rel="noreferrer"
                            >
                                <b>Mapsted</b>
                            </a>
                            <div>Software Developer Intern</div>
                        </div>
                        <div className={'about__company__dates'}>
                            January 2018 – April 2018
                        </div>
                    </div>
                    <div className={'about__company'}>
                        <div>
                            <a
                                href={'https://bigbluebubble.com'}
                                target={'_blank'}
                                rel="noreferrer"
                            >
                                <b>Big Blue Bubble</b>
                            </a>
                            <div>Games Programmer - Intern</div>
                        </div>
                        <div className={'about__company__dates'}>
                            May 2017 – December 2017
                        </div>
                    </div>
                </div>
            </div>
        </FadeIn>
    </div>
));

export default About;
