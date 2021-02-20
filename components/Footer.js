import React from 'react';
import Socials from './Socials';

const Footer = () => <div className={'footer'}>
        <div className={'footer__copyright'}>
            © { new Date().getFullYear() } Gary Chiu. <span className={'footer__copyright__arr'}>All Rights Reserved.</span>
        </div>
        <div>
            <Socials />
        </div>
    </div>

export default Footer;