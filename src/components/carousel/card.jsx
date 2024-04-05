import React from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import styles from './carousel.module.css';
import CardButton from './card_button';


function Card({data}) {


    return (
        <div key={uuid()} className={styles.card}>
            <img className={styles.image} alt={data.title} src={data.image} />
            <div className={styles.information}>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
                <span className={styles.price}>{data.price} $</span>
                <CardButton product={data}/>
            </div>
        </div>
    )
}

Card.propTypes = {
    data: PropTypes.shape ({
        category: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
};

export default Card