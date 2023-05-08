import React from 'react'

import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import react from "../assets/react.png"
import nextjs from "../assets/nextjs.png"
import tailwind from "../assets/tailwind.png"

const Techs = () => {

    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: react,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: nextjs,
            title: 'Next JS',
            style: 'shadow-white'
        },
        {
            id: 6,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },
    ]

    return (
        <div name='Technologies' className='relative w-full h-screen'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>

                <div>
                    <h2 className='text-4xl font-bold inline border-b-4 border-primary-color/40 sm:text-7xl' >Technologies</h2>
                    <p className='py-6'>These are the technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 sm:px-0'>

                    {
                        techs.map(({id, src, title, style}) => (
                            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                <img className='w-20 mx-auto py-2 md:py-6' src={src} alt="" />
                                <p className='mt-4'>{title}</p>
                            </div>

                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Techs
