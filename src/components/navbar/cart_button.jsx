import './navbar.css';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { ProductsData } from '../../App';

function CartButton({onClick}) {
    const {cartItems} = useContext(ProductsData)

    return (
        <button className='nav-btn' key={uuid()} onClick={onClick} type='button'>
            <span className='shopping-cart-num'>{cartItems.length}</span>
            <img className='shopping-cart' alt='cart' src='../src/assets/img/shopping-cart.svg' />
        </button>
    )
}

CartButton.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default CartButton