import React from 'react'
import pokedex from '/images/pokedex.png'
import acciovocabulary from '/images/acciovocabulary.png'
import rickandmorty from '/images/rickandmorty.png'
import academloshop from '/images/academloshop.png'
import weatherapp from '/images/weatherapp.png'
import dogsblog from '/images/dogsblog.png'

const MyProjects = () => {

    const projects = [
        {
            id: 1,
            src: pokedex,
            demo: 'https://pokedex-bydt.netlify.app/',
            code: 'https://github.com/diegotellezc/pokedex'
        },
        {
            
            id: 2,
            src: rickandmorty,
            demo: 'https://rickandmorty-bydt.netlify.app/',
            code: 'https://github.com/diegotellezc/RickAndMortyApp'
        },
        {
            id: 3,
            src: acciovocabulary,
            demo: 'https://diegotellezc.github.io/landing-accio-vocabulary/',
            code: 'https://github.com/diegotellezc/landing-accio-vocabulary'
        },
        {
            id: 4,
            src: academloshop,
            demo: 'https://academlostoregen24.netlify.app/',
            code: 'https://github.com/diegotellezc/academloShop'
        },
        {
            id: 5,
            src: weatherapp,
            demo: 'https://weatherappbydt.netlify.app/',
            code: 'https://github.com/diegotellezc/weather-app'
        },
        {
            id: 6,
            src: dogsblog,
            demo: 'https://dogs-blog-diegotellezdev.netlify.app/',
            code: 'https://github.com/diegotellezc/dogsBlog'
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
                    <h2 className='text-4xl font-bold inline border-b-4 border-gray-500 sm:text-7xl'>Projects</h2>
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
        </section>
    )
}

export default MyProjects
