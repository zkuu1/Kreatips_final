import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import png1 from '../assets/akane.png';
import png2 from '../assets/tenki.png';
import png4 from '../assets/tamao.png';
import AOS from "aos";
import "aos/dist/aos.css";

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
                    infinite: true,
                    dots: true,
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
        <section className="py-20 bg-white" id="gallery">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-bold mb-8">Gallery</h2>

                <div className="flex justify-center mb-4">
                    <button onClick={prevSlide} className="mr-2 p-2 bg-customGreen text-white rounded">Prev</button>
                    <button onClick={nextSlide} className="p-2 bg-customGreen text-white rounded">Next</button>
                </div>

                <Slider ref={sliderRef} {...settings}>
                    <div className="bg-purple-950 p-4 rounded bg-opacity-30" data-aos="fade-up">
                        <img src={png2} alt="Tenki No Ko" className="w-full h-45 object-cover mb-4 rounded" />
                        <h3 className="text-2xl font-bold mb-2">Poster</h3>
                        <p className="text-gray-700">Tenki No Ko</p>
                    </div>
                    <div className="bg-purple-950 p-4 rounded bg-opacity-30" data-aos="fade-up">
                        <img src={png4} alt="Fate Grand: Order" className="w-full h-45 object-cover mb-4 rounded" />
                        <h3 className="text-2xl font-bold mb-2">Poster</h3>
                        <p className="text-gray-700">Fate Grand: Order</p>
                    </div>
                    <div className="bg-purple-950 p-4 rounded bg-opacity-30" data-aos="fade-up">
                        <img src={png1} alt="Oshi No Ko" className="w-full h-45 object-cover mb-4 rounded" />
                        <h3 className="text-2xl font-bold mb-2">Poster</h3>
                        <p className="text-gray-700">Oshi No Ko</p>
                    </div>
                </Slider>
            </div>
        </section>
    );
}

export default Gallery;
