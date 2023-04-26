import React, { useState } from 'react'

const Navbar = () => {
    const [isShowNav, setIsShowNav] = useState(false)

    const handleShowNav = () => {
        setIsShowNav(!isShowNav)
    }

    return (
        <header className='relative flex justify-between items-center py-4 px-2 text-2xl text-white max-w-[1400px] mx-auto md:px-4 md:py-0 w-full z-30'>
            <div className='flex flex-row gap-4 items-center'>
                <i className='bx bx-code text-primary-color text-3xl'></i>
                <h1 className=''>
                    Diego Téllez
                </h1>
            </div>

            <i onClick={handleShowNav} className='bx bx-menu-alt-right text-gray-300 text-3xl cursor-pointer md:hidden'></i>

            <nav className={`text-white absolute top-full ${isShowNav ? "left-0" : "-left-full"} w-full grid text-lg gap-4 duration-200 md:static md:flex md:w-auto`}>
                <a className='hover:bg-primary-color p-4 duration-200 hover:text-black' href="#">About me</a>
                <a className='hover:bg-primary-color p-4 duration-200 hover:text-black' href="#">Projects</a>
                <a className='hover:bg-primary-color p-4 duration-200 hover:text-black' href="#">Technologies</a>
                <a className='hover:bg-primary-color p-4 duration-200 hover:text-black' href="#">Videos</a>
                <a className='hover:bg-primary-color p-4 duration-200 hover:text-black' href="#">Contact</a>
            </nav>
        </header>
    )
}

export default Navbar
