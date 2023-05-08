import React from 'react'
import Navbar from "../homepage-comps/Navbar"
import Home from "../homepage-comps/Home"
import About from "../homepage-comps/About"
import MyProjects from "../homepage-comps/MyProjects"
import Techs from "../homepage-comps/Techs"
import Contact from "../homepage-comps/Contact"

const HomePage = () => {
    return (
        <>
                <Navbar />
                <Home />
                <About />
                <MyProjects />
                <Techs />

                <Contact />

                
        </>
    )
}

export default HomePage