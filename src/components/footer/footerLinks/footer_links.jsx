import '../footer.css';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './footer_links.module.css';

function FooterLinks() {
    return (
        <section className={styles.section} style={{ height: '80vh' }}>
            <div className={styles.links}>
                <div>
                    <Link to="/">
                        <div className={styles.logoContainer}>
                            <img className={styles.logo} src='../src/assets/img/infinity-logo.png' alt='Store logo'/>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link to="/">
                        <p>link to something</p>
                    </Link>
                    <Link to="/">
                        <p>link to something else</p>
                    </Link>
                    <Link to="/">
                        <p>another link</p>
                    </Link>
                    <Link to="/">
                        <p>gosh so many links...</p>
                    </Link>
                </div>
                <div>
                    <Link to="/">
                        <p>gosh so many links...</p>
                    </Link>
                    <Link to="/">
                        <p>gosh so many links...</p>
                    </Link>
                    <Link to="/">
                        <p>gosh so many links...</p>
                    </Link>
                </div>
                <div>
                    <Link to="/">
                        <p>gosh so many links...</p>
                    </Link>
                    <Link to="/">
                        <p>gosh so many links...</p>
                    </Link>
                    <Link to="/">
                        <p>gosh so many links...</p>
                    </Link>
                </div>
            </div>
            <div className={styles.socials}>
                <div className={styles.socialsContainer}>
                    <a href="https://www.facebook.com/">
                        <img className={styles.logo} src='../src/assets/footer_icons/square-facebook.svg' alt='Store logo' />
                    </a>

                    <a href="https://twitter.com/">
                        <img className={styles.logo} src='../src/assets/footer_icons/square-x-twitter.svg' alt='Store logo' />
                    </a>

                    <a href="https://www.instagram.com/">
                        <img className={styles.logo} src='../src/assets/footer_icons/square-instagram.svg' alt='Store logo' />
                    </a>

                    <a href="https://www.pinterest.com/">
                        <img className={styles.logo} src='../src/assets/footer_icons/square-pinterest.svg' alt='Store logo' />
                    </a>

                    <a href="https://github.com/NikolaMilinkovic">
                        <img className={styles.logo} src='../src/assets/footer_icons/square-github.svg' alt='Store logo' />
                    </a>
                </div>
                <p>©Copiright. All right reserved</p>
                <p>Icons from Font Awesome | Images from Unsplash</p>
                <p>Made by <a href="https://github.com/NikolaMilinkovic">Nikola Milinkovic</a></p>
            </div>
        </section>
    );
}

export default FooterLinks;
