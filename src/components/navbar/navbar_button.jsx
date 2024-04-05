import './navbar.css';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import React from 'react';

function NavButton({onClick, text}) {
    return (
        <button className='nav-btn' key={uuid()} onClick={onClick} type='button'>
            {text}
        </button>
    )
}

NavButton.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default NavButton