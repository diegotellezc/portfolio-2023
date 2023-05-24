import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link as ScrollLink } from 'react-scroll';
import CertificateModal from './CertificateModal';

const CertificateSlider = ({ certificates }) => {
    const [selectedImage, setSelectedImage] = React.useState(null);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToScroll: 1,
        draggable: true,
        rows: 2,
        responsive: [{
            breakpoint: 3000,
            settings: {
                slidesToShow: 3,
                infinite: true
                }
        
            }, {
        
                breakpoint: 800,
                settings: {
                slidesToShow: 2,
                dots: true
                }
        
            },{
        
                breakpoint: 600,
                settings: {
                slidesToShow: 1,
                dots: true
                }
        
            }, {
        
                breakpoint: 280,
                settings: "unslick" // destroys slick
        
            }]
    };

    const openCertificateModal = (image) => {
        setSelectedImage(image);
    };
    

    return (
        <section name='Education' className='relative w-full h-unset md:h-screen text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

                <div className='mb-2'>
                    <h2 className='text-4xl font-bold inline border-b-4 border-primary-color/40 sm:text-5xl pb-1'>Education</h2>
                    <p className='py-6'>Check out some of my certificates</p>
                </div>

                <Slider {...settings} className="grid w-[90%] lg:w-full mx-auto">
                    {certificates.map((certificate, index) => (
                    <div onClick={() => openCertificateModal(certificate.image)} key={index} className="p-4 cursor-zoom-in">
                        <img src={certificate.image} alt="Certificate}" className="mx-auto w-full h-[200px] lg:h-[220px] rounded-md object-contain" />
                    </div>
                ))}
                </Slider>
            </div>

            <ScrollLink to="Contact" smooth duration={500} className='absolute bottom-2 -left-full md:left-1/2 md:-translate-x-1/2 cursor-pointer hover:text-primary-color'>
                <i className='bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color'></i>
            </ScrollLink>

            <CertificateModal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
        </section>
        
    );
};

export default CertificateSlider;
