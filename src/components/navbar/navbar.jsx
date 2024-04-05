import './navbar.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavButton from './navbar_button';
import CartButton from './cart_button';

function Navbar() {
    const [prevScrollPos, setScrollPos] = useState(window.scrollY)
    const [top, setTop] = useState(0)
    

    useEffect (() => {

        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            if(currentScrollPos > 80){
                if (prevScrollPos > currentScrollPos){
                    setTop(0);
                } else {
                    setTop(-80)
                }
            }

            setScrollPos(currentScrollPos);
        }


        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [prevScrollPos]);


    function tester (){
    }
    
    return (
        <nav style={{ top: `${top}px` }}>
            <Link to="/">
                <div className='logo-container'>
                    <img className='logo' src='../src/assets/img/infinity-logo.png' alt='Store logo'/>
                </div>
            </Link>
            <ul>
                <Link to='/'>
                    <li>
                        <NavButton text= 'Home' onClick= {() => tester()}/>
                    </li>
                </Link>
                <Link to='store'>
                    <li>
                        <NavButton text= 'Button_2' onClick= {() => tester()}/>
                    </li>
                </Link>
                <Link to='cart'>
                    <li>
                        <CartButton onClick= {() => tester()}/>
                    </li>
                </Link>
            </ul>
            <div className='scroll-watcher' />
        </nav>
    )
}

export default Navbar