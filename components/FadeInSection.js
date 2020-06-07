import { useInView } from 'react-intersection-observer';

const FadeInSection = ({ children, className = '', fadeChildrenOnly = false }) => {
    const [ref, inView] = useInView({
        threshold: 0.70,
        triggerOnce: true
    });

    if (!fadeChildrenOnly){
        return <section ref={ref} className={`fade-in-section ${inView ? 'is-visible' : '' } ${className}`}>
            { children }
        </section>;
    } else {
        return <section className={className}>
            <div ref={ref} className={`section fade-in-section ${inView ? 'is-visible' : '' }`}>
                { children }
            </div>
        </section>;
    }
};

export default FadeInSection;