import React from 'react';
import Socials from './Socials';

const Footer = () => {
    return <div className={'footer'}>
        <div className={'footer__copyright'}>
            © { new Date().getFullYear() } Gary Chiu. All Rights Reserved.
        </div>
        <div>
            <Socials />
        </div>
    </div>;
}

export default Footer;