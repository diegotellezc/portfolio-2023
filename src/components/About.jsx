import React from 'react'

const About = () => {
    return (
        <section name="about" className='w-full max-w-[1200px] mx-auto p-6 flex flex-col gap-4 mb-32 lg:px-24'>
            <div className='flex flex-row gap-10'>
                <div className='hidden max-w-[300px] md:flex'>
                    <img className='w-full h-full object-cover rounded-2xl shadow-2xl shadow-primary-color/20' style={{ filter: 'drop-shadow(0px -4px 4px rgba(0, 255, 0, 0.5))' }} src="https://imgur.com/N6owgza.png" alt="" />
                </div>

                <div className='lex flex-col justify-center text-white text-lg text-justify'>
                    <h2 className='text-4xl sm:text-7xl font-bold mb-4'>About me</h2>

                    <p className="mb-4 ">¡Hola! Vivo en Bogotá y soy Profesional en Medios Audiovisuales con más de 7 años de experiencia como editor de video. Sin embargo, sentia que tenía potencial para más, por lo que mi curiosidad intelectual me llevó a adentrarme en el mundo de la programación.
                    </p>

                    <p >Gracias a mi creatividad, mi atención al detalle y mi determinación, me dí cuenta de que tengo un gran talento para desarrollar aplicaciones web. Me fascina este gran mundo de tecnologías y posibilidades, y estoy seguro de que voy a poder crear proyectos increíbles tanto a nivel profesional como personal.</p>
                </div>
            </div>

        </section>
        
    )
}

export default About
