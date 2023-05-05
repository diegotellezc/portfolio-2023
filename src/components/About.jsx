import React from 'react'

const About = () => {
    return (
        <section name="About" 
        className='relative w-full h-screen text-white'>

            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                {/* <div className='hidden max-w-[300px] md:flex'>
                    <img className='w-full h-full object-cover rounded-2xl shadow-2xl shadow-primary-color/20' style={{ filter: 'drop-shadow(0px -4px 4px rgba(0, 255, 0, 0.5))' }} src="https://imgur.com/N6owgza.png" alt="" />
                </div> */}

                    <div className='pb-8'>
                        <h2 className='text-4xl sm:text-7xl font-bold inline border-b-4 border-gray-500'>About me</h2>
                    </div>

                    <p className="mb-4 py-6">Hey! I'm based on Bogotá and I'm Professional in Audiovisual Media with more than 7 years of experience as a video editor. However, I felt that I had the potential for more, so my intellectual curiosity led me to enter into the world of programming.
                    </p>

                    <p>Thanks to my creativity, my attention to detail and my determination, I realized that I have a great talent for developing web applications. I am fascinated by this great world of technologies and possibilities, and I am sure that I will be able to create incredible projects both professionally and personally with you.</p>
                
            </div>

        </section>
        
    )
}

export default About
