import { useRef, useEffect } from 'react';
import Typed from "typed.js";

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
        <div className={'landing'}>
            <div className={'landing__title'}>
                Hello!
            </div>
            <div className={'landing__title'}>
                I'm <b>Gary Chiu</b>, a <span ref={descRef} />
            </div>
            <div className={'landing__title'}>
                I build web applications & custom software solutions, currently based in Toronto, Canada.
            </div>
            <div className={'landing__cta'}>
                <a href="#mailgo" data-address="gary.gc.chiu" data-domain="gmail.com">
                    Contact me!
                </a>
            </div>


        {/*</div>*/}
        {/*<div className={'landing__arrow-down'}>*/}
        {/*    <IconLink*/}
        {/*        href={undefined}*/}
        {/*        imgAlt={'Scroll to About Me'}*/}
        {/*        icon={arrowDownIcon}*/}
        {/*        onClick={() => scrollToSection(scrollToRef)}*/}
        {/*        className={'landing__arrow-down__icon bounce'}*/}
        {/*        target={'_self'}*/}
        {/*    />*/}
        {/*</div>*/}
        </div>
    </>;
};

export default Landing;