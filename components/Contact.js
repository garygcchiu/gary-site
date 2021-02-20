import Footer from './Footer';
import FadeIn from './FadeIn';

const Contact = () => <div className={'contact'}>
        <FadeIn className={'contact__main'}>
            <div  className={'contact__main'}>
                <span className={'mr-2 contact__text'}>
                    Interested?
                </span>
                <a href="#mailgo" data-address="gary.gc.chiu" data-domain="gmail.com">
                    Contact me!
                </a>
            </div>
        </FadeIn>
        <div className={'contact__footer'}>
            <Footer />
        </div>
    </div>;

export default Contact;