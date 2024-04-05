import React, { useContext, useState, useEffect, useCallback } from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import styles from './carousel.module.css';
import { ProductsData } from '../../App';

function CardButton({product}) {
    const {addToCart, cartItems} = useContext(ProductsData);
    const [text, setText] = useState('Add to cart');


    return(
        <button onClick={() => addToCart(product)} type='button' className={styles.cardButton} key={uuid()}>Add to cart</button>
    )
}

CardButton.propTypes = {
    product: PropTypes.shape({
        category: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
};

export default CardButton