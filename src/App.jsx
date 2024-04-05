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
});

function App() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data))


        fetch('https://fakestoreapi.com/products/categories')
            .then(response => response.json())
            .then(data => setCategories(data))

    }, []);

    const contextValue = useMemo(() => ({products, categories}), [products, categories]);

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
