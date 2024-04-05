/* eslint-disable react/no-unstable-nested-components */
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styles from './landing_page.module.css';


function LandingPageImage({url, alt, header, backgroundHeader, backgroundText, color}) {
    const [isFlipped, setIsFlipped] = useState(false);
    function turnCard(){
        isFlipped ? setIsFlipped(false) : setIsFlipped(true);
        
    }

    return (
        <div className={styles.landingImageContainer} onClick={() => turnCard()}>
            <img id={uuid()}  className={`${styles.landingImage} ${isFlipped ? styles.flip : styles.flipBack}`} src={url} alt={alt}/>
            <div style={{backgroundColor: color}} className={`${styles.imgBackground} ${isFlipped ? styles.flipBackBackground : styles.flipBackground}`}>
                <h1>{backgroundHeader}</h1>
                <p>{backgroundText}</p>
            </div>
            <h2 className={`${styles.paraHeader} ${isFlipped ? styles.flip : styles.flipBack}`}>{header}</h2>
        </div>
    );
}

LandingPageImage.propTypes = {
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
};

export default LandingPageImage;