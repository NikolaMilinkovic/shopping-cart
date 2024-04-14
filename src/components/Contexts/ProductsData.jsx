/* eslint-disable react/prop-types */
import React, { createContext, useState, useMemo, useEffect } from 'react';

export const ProductsData = createContext({
    products: [],
    categories: [],

    // Ovo ide u cart
    cartItems: [],
    addToCart: () => {}
});

export function ProductsDataProvider({ children }) {
    // Ovo ide u cart
    const [cartItems, setCartItems] = useState([]);
    const [cartAmount, setCartAmount] = useState(0)

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

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

    // Ovo se mora podeliti / izvaditi sve vezano za cart
    const contextValue = useMemo(() => {
        const addToCart = (product) => {
            setCartItems(prevCartItems => [...prevCartItems, product])
            setCartAmount(prevCartAmount => prevCartAmount + 1)
        }
        return ({products, categories, cartItems, addToCart})}, 
    [products, categories, cartItems, setCartItems, setCartAmount]);


    return (
        <ProductsData.Provider value={contextValue}>
            {children}
        </ProductsData.Provider>
    );
}