import React from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import styles from './carousel.module.css'

function CarouselButton({onClick, iconUrl, alt, btnClass}) {
    return(
        <button 
            className={`${styles.carouselButton} ${btnClass}`}
            key={uuid()}
            type='button' 
            onClick={onClick}
        ><img className={styles.svg} src={iconUrl} alt={alt}/></button>
    )
}

CarouselButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    iconUrl: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    btnClass: PropTypes.string.isRequired,
};

export default CarouselButton