import React from 'react'
import pokedex from '/images/projectsImages/pokedex.webp'
import acciovocabulary from '/images/projectsImages/acciovocabulary.webp'
import rickandmorty from '/images/projectsImages/rickandmorty.webp'
import academloshop from '/images/projectsImages/academloshop.webp'
import weatherapp from '/images/projectsImages/weatherapp.webp'
import dogsblog from '/images/projectsImages/dogsblog.webp'
import { Link as ScrollLink } from 'react-scroll';

const MyProjects = () => {

    const projects = [
        {
            id: 1,
            src: academloshop,
            demo: 'https://academlostoregen24.netlify.app/',
            code: 'https://github.com/diegotellezc/academloShop'
        },
        {
            id: 2,
            src: acciovocabulary,
            demo: 'https://diegotellezc.github.io/landing-accio-vocabulary/',
            code: 'https://github.com/diegotellezc/landing-accio-vocabulary'
        },
        {
            id: 3,
            src: dogsblog,
            demo: 'https://dogs-blog-diegotellezdev.netlify.app/',
            code: 'https://github.com/diegotellezc/dogsBlog'
        },
        {
            id: 4,
            src: pokedex,
            demo: 'https://pokedex-bydt.netlify.app/',
            code: 'https://github.com/diegotellezc/pokedex'
        },
        {
            id: 5,
            src: weatherapp,
            demo: 'https://weatherappbydt.netlify.app/',
            code: 'https://github.com/diegotellezc/weather-app'
        },
        {
            
            id: 6,
            src: rickandmorty,
            demo: 'https://rickandmorty-bydt.netlify.app/',
            code: 'https://github.com/diegotellezc/RickAndMortyApp'
        }
    ]

    const handleClickDemo = (demoUrl) => {
        const newWindow = window.open(demoUrl, '_blank');
        newWindow.opener = null;
        newWindow.rel = 'noopener noreferrer';
    }

    const handleClickCode = (codeUrl) => {
        const newWindow = window.open(codeUrl, '_blank');
        newWindow.opener = null;
        newWindow.rel = 'noopener noreferrer';
    }
    

    return (
        <section name="Projects" className='relative w-full text-white md:h-screen'>
        
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <h2 className='text-4xl font-bold inline border-b-4 border-primary-color/40 sm:text-7xl'>Projects</h2>
                    <p className='py-6'>Check out some of my work here</p>
                </div>

                <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
                    {
                        projects.map(({ id, src, demo, code }) => (
                                <div key={id} className='shadow-md shadow-gray-600 rounded-lg max-w-md mx-auto'>
                                    <img src={src} alt="project card" className='rounded-md duration-200 hover:scale-105' />
                                    <div className='flex items-center justify-center'>
                                        <button onClick={() => handleClickDemo(demo)} className='w-1/2 px-6 py-2 m-4 duration-200 hover:scale-125'>Demo</button>
                                        <button onClick={() => handleClickCode(code)} className='w-1/2 px-6 py-2 m-4 duration-200 hover:scale-125'>Code</button>
                                    </div>
                                </div>
                        ))
                    }
                </div>
            </div>

            <ScrollLink to="Technologies" smooth duration={500} className='absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer hover:text-primary-color'>
                <i className='bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color'></i>
            </ScrollLink>
        </section>
    )
}

export default MyProjects
