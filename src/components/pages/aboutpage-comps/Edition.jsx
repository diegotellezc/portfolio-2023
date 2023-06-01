import React from 'react'

const Edition = () => {
    return (
        <section name="Edition" className='relative text-white p-4 py-10 grid gap-10 sm:grid-cols-2 max-w-[1000px] mx-auto'>
            {/* Seccion izquierda */}
            <section className='grid gap-10'>
                <div>
                    <h3 className='text-sm text-gray-400'>Videos</h3>
                    <h2 className='text-3xl font-semibold mt-2'>Some videos that I have edited.</h2>
                </div>

                <article className='bg-gray-d relative border-[1px] border-primary-color/30 rounded-lg overflow-hidden'>
                    <div>
                        <img src="/images/videosImages/reel-diego.webp" alt="reel-diego" loading='lazy' />
                    </div>
                    <section className='p-6'>
                        <h4>Demo reel - Diego Téllez</h4>
                        <p className='text-gray-400 text-md mt-2'>Demo reel by Diego Téllez Contreras, video editor located in the city of Bogotá with more than 7 years of experience in the post-production of all kinds of audiovisual products.</p>
                        <a href="https://youtu.be/ZaNV03Y6Yfo" target='_blank' className='bg-gradient-to-t from-green-400 to-primary-color p-1 absolute bottom-0 right-0 text-lg'>
                            <i className='bx bx-link text-black'></i>
                        </a>
                    </section>
                </article>

                <article className='bg-gray-d relative border-[1px] border-primary-color/30 rounded-lg overflow-hidden'>
                    <div>
                        <img src="/images/videosImages/informal.webp" alt="informal employment" loading='lazy' />
                    </div>
                    <section className='p-6'>
                        <h4>Informal Employment - The Project is Colombia</h4>
                        <p className='text-gray-400 text-md mt-2'>Chronicle edited for the Project is Colombia from Noticias Caracol. Journalist: Marcela Pulido. Editing and coloring: Diego Téllez. Language: spanish. December 2020.</p>
                        <a href="https://youtu.be/T23Vnz8hcPc" target='_blank' className='bg-gradient-to-t from-green-400 to-primary-color p-1 absolute bottom-0 right-0 text-lg'>
                            <i className='bx bx-link text-black'></i>
                        </a>
                    </section>
                </article>
            </section>

            {/* Seccion derecha */}
            <section className='grid gap-10'>
            <article className='bg-gray-d relative border-[1px] border-primary-color/30 rounded-lg overflow-hidden'>
                    <div>
                        <img src="/images/videosImages/macroeconomics.webp" alt="macroeconomics" loading='lazy' />
                    </div>
                    <section className='p-6'>
                        <h4>Macroeconomics - The Project is Colombia</h4>
                        <p className='text-gray-400 text-md mt-2'>Chronicle edited for the Project is Colombia from Noticias Caracol. Journalist: Victor Grosso. Editing and coloring: Diego Téllez. Language: spanish. December 2020.</p>
                        <a href="https://youtu.be/-MCSBxC_a6M" target='_blank' className='bg-gradient-to-t from-green-400 to-primary-color p-1 absolute bottom-0 right-0 text-lg'>
                            <i className='bx bx-link text-black'></i>
                        </a>
                    </section>
                </article>

                <article className='bg-gray-d relative border-[1px] border-primary-color/30 rounded-lg overflow-hidden'>
                    <div>
                        <img src="/images/videosImages/burger.webp" alt="burger day" loading='lazy' />
                    </div>
                    <section className='p-6'>
                        <h4>Burger Day - 2022</h4>
                        <p className='text-gray-400 text-md mt-2'>Video edited for Fedegán on International Hamburger Day 2022 where Hector Horacio Hernandez, manager of Alimont Food Service Sas, is interviewed. Language: spanish. May 2022.</p>
                        <a href="https://youtu.be/gAcZh8c1Pa4" target='_blank' className='bg-gradient-to-t from-green-400 to-primary-color p-1 absolute bottom-0 right-0 text-lg'>
                            <i className='bx bx-link text-black'></i>
                        </a>
                    </section>
                </article>

                <div className='grid place-items-center'>
                    <a href="https://www.youtube.com/channel/UCjtCZzmhh8fafKo5L-YbSyg" target='_blank' className='text-black font-semibold text-[16px] w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-t from-green-400 to-primary-color cursor-pointer mx-auto md:mx-0 self-end max-w-max'>
                        <i className='bx bxl-youtube mr-2 text-2xl' ></i>
                        Youtube channel
                    </a>
                </div>
            </section>
        </section>
    )
}

export default Edition
