import React from 'react'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import './App.css'
import LandingPage from './components/landing_page/Landing_page'
import About from './components/about/About'
import Carousel from './components/carousel/Carousel'


function App() {


    return (
        <>
            <Navbar/>
            <LandingPage/>
            <About/>
            <Carousel/>
            <Footer/>
        </>
    )
}

export default App
