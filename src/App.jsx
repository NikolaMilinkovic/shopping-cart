import React, { createContext, useEffect, useState, useMemo } from 'react'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import './App.css'
import LandingPage from './components/landing_page/landing_page'
import About from './components/about/about'
import Carousel from './components/carousel/carousel'

export const ProductsData = createContext({
    products: [],
    categories: [],
    cartItems: [],
    addToCart: () => {}
});

function App() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [cartAmount, setCartAmount] = useState(0)

    useEffect(() => {
        console.log(`cart amount is: ${cartAmount}`);
        console.log(cartItems);
    }, [cartAmount, cartItems]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data))


        fetch('https://fakestoreapi.com/products/categories')
            .then(response => response.json())
            .then(data => setCategories(data))

    }, []);


    const contextValue = useMemo(() => {
        const addToCart = (product) => {
            setCartItems(prevCartItems => [...prevCartItems, product])
            setCartAmount(prevCartAmount => prevCartAmount + 1)
        }
        return ({products, categories, cartItems, addToCart})}, 
    [products, categories, cartItems, setCartItems, setCartAmount]);

    return (
        <ProductsData.Provider value={ contextValue }>
            <Navbar/>
            <LandingPage/>
            <About/>
            <Carousel/>
            <Footer/>
        </ProductsData.Provider>
    )
}

export default App
