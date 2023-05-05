import React from 'react'
import HeroImage from "../assets/heroImage.png"
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import { Link } from "react-scroll"

const Home = () => {
    return (
      <section name="Home" className='relative w-full h-screen'>

        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 py-16 md:py-0 md:flex-row'>

          <div className='flex flex-col justify-center h-[85%] md:h-full'>
            
            <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Frontend Developer</h2>
            <p className='text-gray-300 py-4 max-x-md '>certified by Platzi, one of the largest online professional education platforms in Latin America, and by Academlo, where I am taking a Full Stack Developer and Computer Science night bootcamp.</p>

            <div>
              <Link to='About' smooth duration={500} className='group text-black font-semibold w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-t from-green-400 to-primary-color cursor-pointer'>
                About me
                <span className='group-hover:rotate-90 duration-300'><MdOutlineKeyboardArrowRight size={25} className='ml-1' /></span>
              </Link>
            </div>
          </div>

          <div className=''>
              <img src={HeroImage} alt="My profile" className='rounded-2xl mx-auto w-2/3 object-cover md:w-[70rem] shadow-2xl shadow-primary-color/20' style={{ filter: 'drop-shadow(0px -4px 4px rgba(0, 255, 0, 0.5))' }} />
            </div>
        </div>
      </section>
    );
}

export default Home
