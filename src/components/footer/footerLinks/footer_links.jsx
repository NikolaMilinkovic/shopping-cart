import '../footer.css';
import React from 'react';
import styleLinks from './footer_links.module.css';

function FooterLinks() {
    return (
        <section className={styleLinks.section} style={{ height: '80vh' }}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, possimus? Rem facere, perspiciatis ut est ab, et repudiandae reprehenderit quas voluptate distinctio provident iusto totam! Quas assumenda magni necessitatibus provident?</p>

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam libero obcaecati beatae voluptas, quibusdam in itaque voluptates perferendis, nesciunt, quis alias quia? Rem repudiandae quam necessitatibus accusantium quaerat exercitationem nulla!</p>
        </section>
    );
}

export default FooterLinks;
