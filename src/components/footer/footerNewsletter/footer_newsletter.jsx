import '../footer.css';
import React from 'react';
import style from './footer_newsletter.module.css'
import NewsletterButton from './Newsletter_button';

function FooterNewsletter() {


    return (
        <section className={style.section} style={{ height: '20vh' }}>
            <div className={style.content}>
                <p className={style.para}>Join the Rebellion! Subscribe to our newsletter for exclusive access to rebellious fashion trends, bold style tips, and insider deals. <br />Be the first to know about new arrivals and limited-edition collections. Dare to <span className={style.span}>stand out!</span></p>
                <NewsletterButton
                    text="Join now!"
                />
            </div>
        </section>
    )
}


export default FooterNewsletter