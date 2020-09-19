import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const FadeInDiv = ({ children, className = '', threshold, animationOrder = 0, fast = false }) => {
    const [ref, inView] = useInView({
        threshold: threshold || 0.80,
        triggerOnce: true
    });
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (inView){
            setTimeout(() => setLoaded(true), 1000);
        }
    }, [inView]);

    return <div
        ref={ref}
        className={`${className} fade-in-div ${inView ? 'fade-in-div--visible' : '' } ${fast ? 'fade-in-div--fast' : ''}`}
        style={{ '--animation-order': animationOrder && !loaded ? animationOrder : 0 }}
    >
            { children }
        </div>;
};

export default FadeInDiv;