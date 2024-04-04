import '../footer.css';
import React from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import style from './footer_newsletter.module.css'

function NewsletterButton({text}) {


    return (
        <button className={style.button} type='button' key={uuid()}>{text}</button>
    )
}

NewsletterButton.propTypes = {
    text: PropTypes.string.isRequired,
}
export default NewsletterButton