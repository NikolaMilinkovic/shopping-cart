import React from 'react'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import './App.css'
import LandingPage from './components/landing_page/landing_page'
import About from './components/about/about'

function App() {

    return (
        <>
            <Navbar/>
            <LandingPage/>
            <About/>
            <Footer/>
        </>
    )
}

export default App
