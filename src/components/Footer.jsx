import React from 'react';
import LogoKasaWhite from '../assets/logo_White.svg';


function Footer() {
    return (
        <footer>
            <img src={LogoKasaWhite} alt='Logo Kasa noir et blanc' />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
};

export default Footer;