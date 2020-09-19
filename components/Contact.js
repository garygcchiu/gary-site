import Footer from './Footer';
import FadeInDiv from './FadeInDiv';

const Contact = () => {
    return <div className={'contact'}>
        <FadeInDiv className={'contact__main'} threshold={0.5}>
            <span className={'mr-2 contact__text'}>
                Interested?
            </span>
            <a href="#mailgo" data-address="gary.gc.chiu" data-domain="gmail.com">
                Contact me!
            </a>
        </FadeInDiv>
        <FadeInDiv className={'contact__footer'}>
            <Footer />
        </FadeInDiv>
    </div>;
};

export default Contact;