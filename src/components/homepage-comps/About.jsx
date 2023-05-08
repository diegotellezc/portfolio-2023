import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <section name="About" 
        className='relative w-full h-screen text-white'>

            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-lg'>

                    <div className='pb-8'>
                        <h2 className='text-4xl sm:text-7xl font-bold inline border-b-4 border-primary-color/40'>About me</h2>
                    </div>

                    <p className="mb-4 py-6">Hey! I'm based on Bogotá and I'm Professional in Audiovisual Media with more than 7 years of experience as a video editor. However, I felt that I had the potential for more, so my intellectual curiosity led me to enter into the world of programming.
                    </p>

                    <p>Thanks to my creativity, my attention to detail and my determination, I realized that I have a great talent for developing web applications. I am fascinated by this great world of technologies and possibilities, and I am sure that I will be able to create incredible projects both professionally and personally with you.</p>

                    <Link to='/videos' className='text-black font-semibold text-[16px] w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-t from-green-400 to-primary-color cursor-pointer mx-auto md:mx-0 self-end mt-8'>
                        See more
                        <span className=''><MdOutlineKeyboardArrowRight size={25} className='ml-1' /></span>
                    </Link>
                
            </div>

        </section>
        
    )
}

export default About
