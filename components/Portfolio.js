import React, { forwardRef } from 'react';
import FadeIn from './FadeIn';
import PortfolioItem from './PortfolioItem';
import mealmatchioImage from '../public/mealmatchio.png';
// import echoImage from '../public/echo.gif';

const Portfolio = forwardRef((props, ref) => (
    <div className={'about'} ref={ref}>
        <FadeIn>
            <h2 className={'about__title'}>Some things I've built</h2>
        </FadeIn>
        <FadeIn>
            <PortfolioItem
                title={'MealMatch.io'}
                description={
                    'Mobile application that helps friends decide on where to eat based on shared preferences. Responsible for the design & development of the mobile application, landing page, and serverless API.'
                }
                technologies={[
                    'React',
                    'React Native',
                    'Next.js',
                    'Node.js',
                    'AWS',
                ]}
                image={mealmatchioImage}
                link={'https://mealmatch.io'}
                featured={true}
            />
        </FadeIn>
        <FadeIn>
            <PortfolioItem
                title={'AWS Serverless Kickstarter'}
                description={
                    'Open-source sample project to quickly build & deploy a full-featured serverless application on AWS. The project consists of a Lambda function, which is invoked by an API Gateway endpoint, Lambda Layers with shared utilities, CI/CD using GitHub Actions, streamlined deployment commands for prod/staging/dev environments, and separate CloudFormation stacks for each environment.'
                }
                technologies={['Node.js', 'AWS']}
                link={
                    'https://github.com/garygcchiu/AWS-Serverless-Kickstarter'
                }
                featured={false}
            />
        </FadeIn>
        {/*<FadeIn>*/}
        {/*    <PortfolioItem*/}
        {/*        title={'Studio Playlist Tool'}*/}
        {/*        description={*/}
        {/*            'Web application that allows fitness instructors to curate playlists for their classes, and allows content creators to administrate playlists, the music catalog, and more.'*/}
        {/*        }*/}
        {/*        technologies={[*/}
        {/*            'React',*/}
        {/*            'Node.js',*/}
        {/*            'Express',*/}
        {/*            'Docker',*/}
        {/*            'Elasticsearch',*/}
        {/*            'AWS',*/}
        {/*        ]}*/}
        {/*        image={echoImage}*/}
        {/*        featured*/}
        {/*    />*/}
        {/*</FadeIn>*/}
    </div>
));

export default Portfolio;
