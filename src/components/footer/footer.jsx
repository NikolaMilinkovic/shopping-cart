import './footer.css';
import React from 'react';
import FooterLinks from './footerLinks/Footer_links';
import FooterNewsletter from './footerNewsletter/Footer_newsletter';

function Footer() {
    return (
        <footer>
            <FooterNewsletter/>
            <FooterLinks/>
        </footer>
    )
}


export default Footer