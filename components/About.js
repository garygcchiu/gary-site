import React, { forwardRef } from 'react';
import FadeInDiv from './FadeInDiv';

const About = forwardRef((props, ref) => {
    return <div className={'about'} ref={ref}>
        <FadeInDiv threshold={0.8} className={'mb-5'}>
            <h2 className={'about__title'}>
                Nice to meet you.
            </h2>
            <div className={'about__text'}>
                I’m currently a Software Developer at Konrad Group, building innovative solutions for industry-leading clients.<br/>
                I am passionate about using technology to improve quality of life — and making it look good.
            </div>
        </FadeInDiv>
        <FadeInDiv threshold={0.8} className={'mb-5'}>
            <h2 className={'about__title'}>
                Skills
            </h2>
            <div className={'about__text'}>
                I’m currently a Software Developer at Konrad Group, building innovative solutions for industry-leading clients.<br/>
                I am passionate about using technology to improve quality of life — and making it look good.
            </div>
        </FadeInDiv>
        <FadeInDiv threshold={0.8}>
            <h2 className={'about__title'}>
                Experience
            </h2>
            <div className={'about__text'}>
                I’m currently a Software Developer at Konrad Group, building innovative solutions for industry-leading clients.<br/>
                I am passionate about using technology to improve quality of life — and making it look good.
            </div>
        </FadeInDiv>
    </div>
});

export default About;