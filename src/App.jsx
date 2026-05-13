// rafce
import React from 'react'
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Footer from "./sections/Footer.jsx";

const App = () => {
    return (
        <main className="max-w-7xl mx-auto">
            {/*<h1 className="text-2xl text-white underline">Hello Three.js!</h1>*/}
            <Navbar />
            <Hero />
            <About />
            <Footer />
        </main>
    )
}
export default App
