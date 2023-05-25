import React, { useEffect } from 'react'
import Navbar from "./homepage-comps/Navbar"
import Home from "./homepage-comps/Home"
import About from "./homepage-comps/About"
import MyProjects from "./homepage-comps/MyProjects"
import Techs from "./homepage-comps/Techs"
import Contact from "./homepage-comps/Contact"
import CertificateSlider from './homepage-comps/CertificateSlider'

const HomePage = () => {
    const certificates = [
        {image: '/images/certificates/diploma-frontend-academlo.webp'},
        {image: '/images/certificates/diploma-arrays.webp'},
        {image: '/images/certificates/diploma-react.webp'},
        {image: '/images/certificates/diploma-api-profesional.webp'},
        {image: '/images/certificates/diploma-koe.webp'},
        {image: '/images/certificates/diploma-git-github.webp'},
        {image: '/images/certificates/diploma-frameworks-javascript.webp'},
        {image: '/images/certificates/diploma-ingles-developers.webp'},
        {image: '/images/certificates/diploma-asincronismo-js.webp'},
        {image: '/images/certificates/diploma-habilidades-blandas.webp'},
        {image: '/images/certificates/diploma-ecmascript-6.webp'},
        {image: '/images/certificates/diploma-frontend-developer-practico.webp'},
        {image: '/images/certificates/diploma-frontend-developer.webp'},
        {image: '/images/certificates/diploma-javascript-navegador.webp'},
        {image: '/images/certificates/diploma-javascript-practico.webp'},
        {image: '/images/certificates/diploma-npm.webp'},
        {image: '/images/certificates/diploma-slack.webp'},
        {image: '/images/certificates/diploma-terminal.webp'},
        {image: '/images/certificates/diploma-webpack.webp'},
        {image: '/images/certificates/diploma-api-practico.webp'},
        {image: '/images/certificates/diploma-api.webp'},
        {image: '/images/certificates/diploma-backend.webp'},
        {image: '/images/certificates/diploma-html-practico.webp'},
        {image: '/images/certificates/diploma-html-css.webp'},
        {image: '/images/certificates/diploma-ingenieria.webp'},
        {image: '/images/certificates/diploma-paginas-web.webp'},
        {image: '/images/certificates/diploma-pensamiento-logico-estructuras.webp'},
        {image: '/images/certificates/diploma-pensamiento-logico-lenguajes.webp'},
        {image: '/images/certificates/diploma-pensamiento-logico.webp'},
        
    ];


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <Navbar />
            <Home />
            <About />
            <MyProjects />
            <Techs />
            <CertificateSlider certificates={certificates} />
            <Contact />
        </>
    )
}

export default HomePage