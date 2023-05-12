import React, { useEffect } from 'react'
import NavbarVideos from '../aboutpage-comps/NavBarVideos'
import AboutSectionAbout from '../aboutpage-comps/AboutSectionAbout'
import Edition from '../aboutpage-comps/Edition'

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