import Footer from './Footer';

const Contact = () => {
    return <div className={'contact'}>
        <div className={'contact__main'}>
            <span className={'mr-2 contact__text'}>
                Interested?
            </span>
            <a href="#mailgo" data-address="gary.gc.chiu" data-domain="gmail.com">
                Contact me!
            </a>
        </div>
        <div className={'contact__footer'}>
            <Footer />
        </div>
    </div>;
};

export default Contact;