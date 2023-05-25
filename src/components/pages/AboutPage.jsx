import React, { useEffect } from 'react'
import NavbarVideos from '../pages/aboutpage-comps/NavBarVideos'
import AboutSectionAbout from '../pages/aboutpage-comps/AboutSectionAbout'
import Edition from '../pages/aboutpage-comps/Edition'

const AboutPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <NavbarVideos />
            <AboutSectionAbout />
            <Edition />

        </>
    )
}

export default AboutPage