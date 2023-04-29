import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
    const links = [
        {
            id: 1,
            link: "Home"
        },
        {
            id: 2,
            link: "About"
        },
        {
            id: 3,
            link: "Projects"
        },
        {
            id: 4,
            link: "Techs"
        },
        {
            id: 5,
            link: "Contact"
        }
    ]

    const [isShowNav, setIsShowNav] = useState(false)


    return (
        <header className='fixed top-0 flex bg-neutral-900/90 justify-between h-20 items-center py-4 px-2 text-2xl text-white mx-auto md:px-24 md:py-0 w-full z-30'>
            <div className='flex flex-row gap-4 items-center'>
                <h1 className='text-4xl font-signature hover:text-primary-color hover:scale-125 hover:animate-pulse duration-500'>
                    Diego T
                </h1>
            </div>

            <ul className='hidden md:flex'>
                {links.map(({ id, link }) => (
                    <li key={id} className='cursor-pointer hover:scale-105 rounded-lg hover:bg-primary-color p-4 duration-200 hover:text-black'>{link}</li>
                ))}
            </ul>

            <div onClick={() => setIsShowNav(!isShowNav)} className='cursor-pointer pr-4 z-10 text-gray-100 md:hidden'>
                {isShowNav ? <FaTimes size={30} /> : <FaBars size={30} /> }
            </div>

            {isShowNav && (
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black via-black to-green-950 opacity-90'>

                {links.map(({ id, link }) => (
                        <li key={id} className='px-4 cursor-pointer py-6 text-4xl opacity-100'>{link}</li>
                ))}
            </ul> )}

            
        </header>
    )
}

export default Navbar
