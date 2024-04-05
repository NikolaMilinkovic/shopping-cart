import React from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import styles from './carousel.module.css';


function Card({data}) {

    return (
        <card key={uuid()} className={styles.card}>
            <img className={styles.image} alt={data.title} src={data.image} />
            <div className={styles.information}>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
                <span className={styles.price}>{data.price} $</span>
            </div>
        </card>
    )
}

Card.propTypes = {
    data: PropTypes.shape ({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
    }).isRequired,
};

export default Card