import React from 'react'
import Navbar from "../Navbar"
import Home from "../Home"
import About from "../About"
import MyProjects from "../MyProjects"
import Techs from "../Techs"
import Contact from "../Contact"
import SocialLinks from "../SocialLinks"

const HomePage = () => {
    return (
        <>
                <Navbar />
                <Home />
                <About />
                <MyProjects />
                <Techs />

                <Contact />

                <SocialLinks />
        </>
    )
}

export default HomePage