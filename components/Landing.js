import React, { useRef, useEffect } from 'react';
import Typed from "typed.js";
import Header from './Header';
import Socials from './Socials';
import FadeIn from './FadeIn';

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

    return <div className={'landing'}>
        <FadeIn>
            <div className={'header__wrapper'}>
                <Header />
            </div>
        </FadeIn>
        <FadeIn>
            <div className={'d-flex flex-column'}>
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
            </div>
        </FadeIn>
    </div>;
};

export default Landing;