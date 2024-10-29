import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
import aboutpng from '../assets/About/chara.png';
import aboutpng2 from '../assets/About/chara2.png';
import { HiArrowDown } from "react-icons/hi";

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, 
            easing: 'ease-in-out', 
            once: true, 
        });
    }, []);

    return (
        <section id="about" className="py-20 bg-customWhite overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold mb-8 text-customYellow text-center" data-aos="fade-up">
                    Tentang Website
                </h2>

                <div className="flex justify-center mb-8" data-aos="fade-up">
                    <HiArrowDown className="text-4xl animate-bounce text-customBlue" />
                </div>

                <div className="flex flex-col md:flex-row items-center mb-12">
                    <div className="mb-6 md:mb-0 md:w-1/2 flex justify-center" data-aos="fade-right">
                        <img src={aboutpng} alt="About" className="w-full md:w-2/3 lg:w-1/2" />
                    </div>
                    <div className="md:w-1/2 text-center md:text-left" data-aos="fade-left">
                        <p className="text-2xl text-gray-700 font-semibold mb-4">
                           KreaTips adalah singkatan dari Kreativitas dan Tips bagi anak muda di bidang seni visual.
                        </p>
                        <p className="text-2xl text-gray-700 font-semibold mb-4">
                           Website ini berisi tentang hal-hal yang mengandung unsur dari seni visual, semoga website ini bisa bermanfaat ^^.
                        </p>
                        <p className="text-xl text-gray-600 mb-10">
                            Admin Zkuu
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mt-8">
                    <div className="space-y-8 text-center" data-aos="fade-up">
                        <h2 className="text-3xl text-customYellow font-bold">Short Map Website</h2>
                        <div className="flex justify-center mb-4">
                            <HiArrowDown className="text-4xl animate-bounce text-customBlue" />
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-green-300 transition-colors duration-300" data-aos="fade-up">
                            <h3 className="text-2xl font-bold mb-4 text-customBlue">Fundamental</h3>
                            <p className="text-gray-700 mb-4">Fundamental dari seni visual</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-green-300 transition-colors duration-300" data-aos="fade-up">
                            <h3 className="text-2xl font-bold mb-4 text-customBlue">Preparation</h3>
                            <p className="text-gray-700 mb-4">Hal yang wajib dipersiapkan ketika ingin memulai seni visual</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-green-300 transition-colors duration-300" data-aos="fade-up">
                            <h3 className="text-2xl font-bold mb-4 text-customBlue">Tips & Gallery</h3>
                            <p className="text-gray-700 mb-4">Basic tips yang mungkin akan mengimprove skill kamu</p>
                        </div>
                    </div>
                    <div className="flex justify-center" data-aos="fade-left">
                        <img src={aboutpng2} className="object-cover h-auto md:h-full rounded-lg w-full md:w-1/2" alt="About" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
