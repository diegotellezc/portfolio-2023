import React from 'react'
import HeroImage from "../../assets/HeroImage.png"
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import { Link } from "react-scroll"

const AboutVideos = () => {
    return (
        <section name="About" className='relative w-full h-screen'>

            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 py-16 md:py-24 lg:py-0 lg:flex-row lg:gap-8'>
                
                <div className='flex mt-8 md:mt-0'>
                    <img src="https://imgur.com/N6owgza.png" alt="My profile" className='rounded-2xl mx-auto w-2/3 max-w-lg md:max-w-sm object-cover md:w-[70rem] shadow-2xl shadow-primary-color/20' style={{ filter: 'drop-shadow(0px -4px 4px rgba(0, 255, 0, 0.5))' }} />
                </div>

                <div className='flex flex-col justify-center items-center h-[85%] md:h-full'>
                    
                    <h1 className='text-4xl md:text-6xl font-bold text-white mb-2 md:mb-4'>Who I am?</h1>
                    <h2 className='rounded-md bg-primary-color/20 max-w-max px-6 inline text-xl sm:text-2xl md:text-3xl md:py-1 font-semibold text-white'>🇨🇴 Colombian - 29 years old</h2>
                    <p className='text-md md:text-lg text-gray-300 py-4 max-x-md text-justify'>I am a professional graduated from Politécnico Grancolombiano University and I worked as a video editor for 7 years in "Noticias Caracol", the most watched newscast in Colombia and with alliances in several countries around the world.</p>
                    <p className='text-md md:text-lg text-gray-300 max-x-md text-justify'>There I learned how to work in large teams and to assume responsibilities since I was the last filter before going on the air. Currently, I use those design and communication skills in the creation of web applications that can give the client comfort and effectiveness.</p>
                </div>

                
            </div>
        </section>
    );
}

export default AboutVideos
