import React, { useEffect } from 'react'
import NavbarVideos from '../videospage-comps/NavBarVideos'
import AboutVideos from '../videospage-comps/AboutVideos'
import Edition from '../videospage-comps/Edition'

const VideosPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <NavbarVideos />
            <AboutVideos />
            <Edition />

        </>
    )
}

export default VideosPage