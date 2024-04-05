import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './notification.module.css'

function Notification({title, text, onClick}) {


    return (
        <div 
            key={uuid()} 
            className={styles.notificationContainer}
        >
            <h4>{title}</h4>
            <p>{text}</p>
            <button className={styles.close} type='button' onClick={onClick}>X</button>
        </div>
    )
}

Notification.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Notification