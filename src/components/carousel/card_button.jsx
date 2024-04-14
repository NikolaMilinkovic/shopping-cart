import React, { useContext } from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import styles from './carousel.module.css';
import { ProductsData } from '../Contexts/ProductsData';

const CardButton = React.memo(({ product }) => {
    const {addToCart} = useContext(ProductsData);

    return(
        <div className={styles.information}>
            <span className={styles.price}>{product.price} $</span>
            <button onClick={() => addToCart(product)} type='button' className={styles.cardButton} key={uuid()}>Add to cart</button>
            
        </div>
    )
});


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