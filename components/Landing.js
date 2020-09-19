import React, { useRef, useEffect } from 'react';
import Typed from "typed.js";
import IconLink from './IconLink';
import arrowDownIcon from '../public/icons/angle-down-light.svg';
import Header from './Header';
import Socials from './Socials';
import resume from '../public/Gary_Chiu_Resume_2020.pdf';

const Landing = () => {
    const descRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(descRef.current, {
            strings: ['Software Engineer', 'Full Stack Web Developer', 'Consultant'],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
            backDelay: 2500
        });

        // destroy Typed instance on unmounting the component
        return () => {
            typed.destroy();
        };
    }, []);

    return <>
        <Header />
        <div className={'landing'}>
            <div className={'landing__title'}>
                Hello!
            </div>
            <div className={'landing__title'}>
                I'm <b>Gary Chiu</b>, a <span ref={descRef} />
            </div>
            <div className={'landing__title'}>
                I build web applications & custom software solutions, currently based in Toronto, Canada. 👨‍💻
            </div>
            <div className={'landing__cta'}>
                <Socials />
            </div>
            <div className={'landing__arrow-down'}>
                <IconLink
                    href={undefined}
                    imgAlt={'Click to View More'}
                    className={'landing__arrow-down__icon socials__icon arrow-down bounce'}
                    onClick={() => {}}
                />
            </div>
        </div>
    </>;
};

export default Landing;