import React from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import styles from './carousel.module.css';
import CardButton from './Card_button';


const Card = React.memo(({ data }) => (
    <div key={uuid()} className={styles.card}>
        <div className={styles.cardContainer}>
            <img className={styles.image} alt={data.title} src={data.image} />
        </div>
        <h3>{data.title}</h3>
        <div className={styles.information}>
            <p><br />{data.description}</p>
            <CardButton product={data}/>
        </div>
    </div>
));

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