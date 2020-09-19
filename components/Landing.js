import React, { useRef, useEffect, useState } from 'react';
import Typed from "typed.js";
import IconLink from './IconLink';
import Header from './Header';
import Socials from './Socials';

const Landing = () => {
    const descRef = useRef(null);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const typed = new Typed(descRef.current, {
            strings: ['Software Engineer', 'Full Stack Web Developer', 'Consultant'],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
            backDelay: 2500
        });

        setShowContent(true);

        // destroy Typed instance on unmounting the component
        return () => {
            typed.destroy();
        };
    }, []);

    return <>
        <div className={`fade-in-section ${showContent ? 'fade-in-section--visible' : ''}`} style={{ '--animation-order': 0 }} >
            <Header className={'hehe'} />
        </div>
        <div className={`landing fade-in-section ${showContent ? 'fade-in-section--visible' : ''}`} style={{ '--animation-order': 1 }}>
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