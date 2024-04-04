/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import styles from './about.module.css';


function About() {
    function Image(){

        return(
            <img className={styles.image} alt='City lights timelapse' src='../src/assets/img/road-lights.jpg' />
        )
    }

    return (
        <div className={styles.aboutContainer}>
            <Image/>
            <div className={styles.article}>
                <h1>About us</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, quaerat. Iste enim totam repudiandae molestiae consequuntur rem labore? Distinctio hic velit deserunt quod explicabo, cum repellendus eaque animi sequi earum?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, quaerat. Iste enim totam repudiandae molestiae consequuntur rem labore? Distinctio hic velit deserunt quod explicabo, cum repellendus eaque animi sequi earum?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, quaerat. Iste enim totam repudiandae molestiae consequuntur rem labore? Distinctio hic velit deserunt quod explicabo, cum repellendus eaque animi sequi earum?</p>
            </div>
        </div>
    )
}


export default About