/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import styles from './landing_page.module.css';
import LandingPageImage from './landing_page_img';


function LandingPage() {

    return (
        <div className={styles.mainContainer}>
            {/* <div className={styles.heroText}>
                <h1>Born to be <span style={{ color: '#FC08C5'}}>brave</span></h1>
            </div> */}
            <LandingPageImage 
                header="Rebellious" 
                url="../src/assets/img/rebellious.jpg" 
                alt="Hero"
            />
            <LandingPageImage 
                header="Colorful" 
                url='../src/assets/img/colorfull.jpg' 
                alt='Hero'
            />
            <LandingPageImage 
                header="Elegant" 
                url='../src/assets/img/elegant.jpg' 
                alt='Hero'
            />
        </div>
    )
}


export default LandingPage