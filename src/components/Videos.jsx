import React from 'react'

const Videos = () => {
    return (
        <section className='relative text-white p-4 py-10 grid gap-10 sm:grid-cols-2 max-w-[1000px] mx-auto'>
            {/* Seccion izquierda */}
            <section className='grid gap-10'>
                <div>
                    <h3 className='text-sm text-gray-400'>Videos</h3>
                    <h2 className='text-3xl font-semibold mt-2'>Some videos that I have edited.</h2>
                </div>

                <article className='bg-gray-d relative'>
                    <div>
                        <img src="https://fabric.inc/wp-content/uploads/2022/02/170220221645086627.png" alt="" />
                    </div>
                    <section className='p-6'>
                        <h4>Restaurant Website Design</h4>
                        <p className='text-gray-400 text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit odit ipsam, laudantium id veniam hic doloremque doloribus consequuntur cumque libero sequi minima amet iusto. Dolores aut odit optio vitae quisquam.</p>
                        <a href="#" className='bg-indigo-700 p-1 absolute bottom-0 right-0 text-lg'>
                            <i className='bx bx-link text-white'></i>
                        </a>
                    </section>
                </article>

                <article className='bg-gray-d relative'>
                    <div>
                        <img src="https://fabric.inc/wp-content/uploads/2022/02/170220221645086627.png" alt="" />
                    </div>
                    <section className='p-6'>
                        <h4>Restaurant Website Design</h4>
                        <p className='text-gray-400 text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit odit ipsam, laudantium id veniam hic doloremque doloribus consequuntur cumque libero sequi minima amet iusto. Dolores aut odit optio vitae quisquam.</p>
                        <a href="#" className='bg-indigo-700 p-1 absolute bottom-0 right-0 text-lg'>
                            <i className='bx bx-link text-white'></i>
                        </a>
                    </section>
                </article>
            </section>

            {/* Seccion derecha */}
            <section className='grid gap-10'>
            <article className='bg-gray-d relative'>
                    <div>
                        <img src="https://fabric.inc/wp-content/uploads/2022/02/170220221645086627.png" alt="" />
                    </div>
                    <section className='p-6'>
                        <h4>Restaurant Website Design</h4>
                        <p className='text-gray-400 text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit odit ipsam, laudantium id veniam hic doloremque doloribus consequuntur cumque libero sequi minima amet iusto. Dolores aut odit optio vitae quisquam.</p>
                        <a href="#" className='bg-indigo-700 p-1 absolute bottom-0 right-0 text-lg'>
                            <i className='bx bx-link text-white'></i>
                        </a>
                    </section>
                </article>

                <article className='bg-gray-d relative'>
                    <div>
                        <img src="https://fabric.inc/wp-content/uploads/2022/02/170220221645086627.png" alt="" />
                    </div>
                    <section className='p-6'>
                        <h4>Restaurant Website Design</h4>
                        <p className='text-gray-400 text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit odit ipsam, laudantium id veniam hic doloremque doloribus consequuntur cumque libero sequi minima amet iusto. Dolores aut odit optio vitae quisquam.</p>
                        <a href="#" className='bg-indigo-700 p-1 absolute bottom-0 right-0 text-lg'>
                            <i className='bx bx-link text-white'></i>
                        </a>
                    </section>
                </article>

                <button className='p-2 border-[2px] border-indigo-700 max-w-max mx-auto'>VIEW ALL PROJECTS</button>
            </section>
        </section>
    )
}

export default Videos
