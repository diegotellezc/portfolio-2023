import React from 'react'
import easyshop from '/images/projectsImages/easyshop.webp'
import pokedex from '/images/projectsImages/pokedex.webp'
import acciovocabulary from '/images/projectsImages/acciovocabulary.webp'
import rickandmorty from '/images/projectsImages/rickandmorty.webp'
import academloshop from '/images/projectsImages/academloshop.webp'
import weatherapp from '/images/projectsImages/weatherapp.webp'
import dogsblog from '/images/projectsImages/dogsblog.webp'
import crud from '/images/projectsImages/crud.webp'
import moviepedia from '/images/projectsImages/moviepedia.webp'
import tictactoe from '/images/projectsImages/tictactoe.webp'
import soccerquotes from '/images/projectsImages/soccerquotes.webp'
import fortunecookies from '/images/projectsImages/fortunecookies.webp'

const AllProjects = () => {

    const projects = [
        {
            id: 1,
            src: easyshop,
            demo: 'https://easyshop-bydt.netlify.app/',
            code: 'https://github.com/diegotellezc/EasyShop'
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
            src: rickandmorty,
            demo: 'https://rickandmorty-bydt.netlify.app/',
            code: 'https://github.com/diegotellezc/RickAndMortyApp'
        },
        {
            id: 7,
            src: pokedex,
            demo: 'https://pokedex-bydt.netlify.app/',
            code: 'https://github.com/diegotellezc/pokedex'
        },
        {
            id: 8,
            src: crud,
            demo: 'https://users-crud-bydt.netlify.app/',
            code: 'https://github.com/diegotellezc/Users-CRUD'
        },
        {
            id: 9,
            src: moviepedia,
            demo: 'https://diegotellezc.github.io/Moviepedia/',
            code: 'https://github.com/diegotellezc/Moviepedia'
        },
        {
            id: 10,
            src: soccerquotes,
            demo: 'https://soccerquotes.netlify.app/',
            code: 'https://github.com/diegotellezc/soccerQuotes'
        },
        {
            id: 11,
            src: tictactoe,
            demo: 'https://tictactoebydt.netlify.app/',
            code: 'https://github.com/diegotellezc/Tictactoebydt'
        },
        {
            id: 12,
            src: fortunecookies,
            demo: 'https://fortunecookiesapp.netlify.app/',
            code: 'https://github.com/diegotellezc/fortuneCookies'
        },
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
        <section name="Projects" className='relative w-full text-white md:min-h-screen mt-24 mb-10'>
        
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <h2 className='text-4xl font-bold inline border-b-4 border-primary-color/40 sm:text-5xl'>Projects</h2>
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

export default AllProjects
