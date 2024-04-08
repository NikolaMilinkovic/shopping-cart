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
                url="/img/rebellious.jpg" 
                alt="Hero"
                backgroundHeader='Rebellious Attire'
                backgroundText='Dare to express your unique style with our Rebellious Collection. Featuring bold patterns, edgy designs, and a fearless attitude, these pieces are perfect for those who march to the beat of their own drum.'
                color='#980C15'
            />
            <LandingPageImage 
                header="Colorful" 
                url='/img/colorfull.jpg' 
                alt='Hero'
                backgroundHeader='Colorful Charm'
                backgroundText='Brighten up your wardrobe with our Colorful Collection. Bursting with vibrant hues and eye-catching prints, these pieces are sure to add a pop of joy and energy to your everyday look.'
                color="#DA9301"
            />
            <LandingPageImage 
                header="Elegant" 
                url='/img/elegant.jpg' 
                alt='Hero'
                backgroundHeader='Elegant Ensemble'
                backgroundText='Elevate your style with our Elegant Collection. Timeless silhouettes, luxurious fabrics, and exquisite details define this sophisticated line, perfect for those who appreciate classic elegance with a modern twist.'
                color="#080C0B"
            />
        </div>
    )
}


export default LandingPage