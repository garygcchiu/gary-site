import { useInView } from 'react-intersection-observer';

const FadeInSection = ({ children, className = ''}) => {
    const [ref, inView] = useInView({
        threshold: 0.70,
        triggerOnce: true
    });

    return <section className={className}>
        <div ref={ref} className={`fade-in-section ${inView ? 'fade-in-section--visible' : '' }`}>
            { children }
        </div>
    </section>;
};

export default FadeInSection;