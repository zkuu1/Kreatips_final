import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import png1 from '../assets/akane.png';
import png2 from '../assets/tenki.png';
import png4 from '../assets/tamao.png';
import AOS from "aos";
import "aos/dist/aos.css"; 
import { HiArrowDown } from "react-icons/hi";

const Gallery = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const nextSlide = () => {
        sliderRef.current.slickNext();
    };

    const prevSlide = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <section id="gallery" className="py-20 bg-customWhite overflow-hidden">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold mb-8 text-customYellow text-center" data-aos="fade-up">
                    Gallery
                </h2>

                <div className="flex justify-center mb-4" data-aos="fade-up">
                    <HiArrowDown className="text-4xl animate-bounce text-customBlue" />
                </div>

                <div className="flex justify-center mb-4">
                    <button onClick={prevSlide} className="mr-2 p-2 bg-customGreen text-white rounded">Prev</button>
                    <button onClick={nextSlide} className="p-2 bg-customGreen text-white rounded">Next</button>
                </div>

                <Slider ref={sliderRef} {...settings} className="gallery-container">
                    <div className="bg-purple-950 p-4 rounded bg-opacity-30" data-aos="fade-up">
                        <img src={png2} alt="Tenki No Ko" className="w-full h-auto object-cover mb-4 rounded" />
                        <h3 className="text-2xl font-bold mb-2">Tenki No Ko</h3>
                    </div>
                    <div className="bg-purple-950 p-4 rounded bg-opacity-30" data-aos="fade-up">
                        <img src={png4} alt="Fate Grand: Order" className="w-full h-auto object-cover mb-4 rounded" />
                        <h3 className="text-2xl font-bold mb-2">Fate Grand: Order</h3>
                    </div>
                    <div className="bg-purple-950 p-4 rounded bg-opacity-30" data-aos="fade-up">
                        <img src={png1} alt="Oshi No Ko" className="w-full h-auto object-cover mb-4 rounded" />
                        <h3 className="text-2xl font-bold mb-2">Oshi No Ko</h3>
                    </div>
                </Slider>
            </div>
        </section>
    );
}

export default Gallery;
