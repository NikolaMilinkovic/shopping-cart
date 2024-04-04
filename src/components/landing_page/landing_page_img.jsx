/* eslint-disable react/no-unstable-nested-components */
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './landing_page.module.css';


function LandingPageImage({url, alt, header}) {


    return (
        <div className={styles.landingImageContainer}>
            <img id={uuid()} className={styles.landingImage} src={url} alt={alt}/>
            <h2 className={styles.paraHeader}>{header}</h2>
        </div>
    );
}

LandingPageImage.propTypes = {
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
};

export default LandingPageImage;