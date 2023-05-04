import React from 'react'
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg'
import installNode from '../assets/portfolio/installNode.jpg'
import navbar from '../assets/portfolio/navbar.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'

const MyProjects = () => {

    const projects = [
        {
            id: 1,
            src: arrayDestruct,
            demo: 'https://rickandmorty-bydt.netlify.app',
            code: 'https://github.com/diegotellezc/RickAndMortyApp'
        },
        {
            id: 2,
            src: reactParallax,
            demo: 'https://www.instagram.com/?hl=es-la',
            code: 'https://github.com/diegotellezc/RickAndMortyApp'
        },
        {
            id: 3,
            src: navbar,
            demo: 'https://rickandmorty-bydt.netlify.app',
            code: 'https://github.com/diegotellezc/RickAndMortyApp'
        },
        {
            id: 4,
            src: reactSmooth,
            demo: 'https://rickandmorty-bydt.netlify.app',
            code: 'https://github.com/diegotellezc/RickAndMortyApp'
        },
        {
            id: 5,
            src: installNode,
            demo: 'https://rickandmorty-bydt.netlify.app',
            code: 'https://github.com/diegotellezc/RickAndMortyApp'
        },
        {
            id: 6,
            src: reactWeather,
            demo: 'https://rickandmorty-bydt.netlify.app',
            code: 'https://github.com/diegotellezc/RickAndMortyApp'
        }
    ]

    const handleClickDemo = (demoUrl) => {
        window.open(demoUrl, '_blank')
    }
    

    return (
        <section name="MyProjects" className='relative w-full text-white md:h-screen'>
        
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
                    <p className='py-6'>Check out some of my work here</p>
                </div>

                <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {
                        projects.map(({ id, src, demo, code }) => (
                                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                                    <img src={src} alt="project card" className='rounded-md duration-200 hover:scale-105' />
                                    <div className='flex items-center justify-center'>
                                        <button onClick={() => handleClickDemo(demo)} className='w-1/2 px-6 py-2 m-4 duration-200 hover:scale-125'>Demo</button>
                                        <button className='w-1/2 px-6 py-2 m-4 duration-200 hover:scale-125'>Code</button>
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
