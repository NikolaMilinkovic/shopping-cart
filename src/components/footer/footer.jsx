import './footer.css';
import React from 'react';
import FooterLinks from './footerLinks/footer_links';
import FooterNewsletter from './footerNewsletter/footer_newsletter';

function Footer() {
    return (
        <footer>
            <FooterNewsletter/>
            <FooterLinks/>
        </footer>
    )
}


export default Footer