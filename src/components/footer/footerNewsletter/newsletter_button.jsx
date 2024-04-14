import '../footer.css';
import React, {useState} from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import style from './footer_newsletter.module.css'
import Notification from '../../notification/Notification';

function NewsletterButton({text}) {
    const [showNotification, setShowNotification] = useState(false)
    function newsletterClicked(){
        setShowNotification(true);
    }
    function hideNotification(){
        setShowNotification(false);
    }

    return (
        <>
            <button onClick={() => newsletterClicked()} className={style.button} type='button' key={uuid()}>{text}</button>
            {showNotification && (
                <Notification
                    title='You are now forever subscribed!'
                    text='Yes, thats right, forever and ever and ever...'
                    onClick={() => hideNotification()}
                />
            )}
        </>

    )
}

NewsletterButton.propTypes = {
    text: PropTypes.string.isRequired,
}
export default NewsletterButton