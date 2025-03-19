import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
import aboutpng from '../assets/About/huohuo.png';
import aboutpng2 from '../assets/About/fauzan.png';
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mt-8">
                    <div className="space-y-8 text-center" data-aos="fade-up">
                        <h2 className="text-3xl text-customYellow font-bold">About Me</h2>
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-green-300 transition-colors duration-300" data-aos="fade-up">
                            <h3 className="text-2xl font-bold mb-4 text-customBlue">Name</h3>
                            <p className="text-gray-700 mb-4">Zakaria Akmal Pasha | Zkuu</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-green-300 transition-colors duration-300" data-aos="fade-up">
                            <h3 className="text-2xl font-bold mb-4 text-customBlue">Hobby</h3>
                            <p className="text-gray-700 mb-4">Gaming , Editting And Programming</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-green-300 transition-colors duration-300" data-aos="fade-up">
                            <h3 className="text-2xl font-bold mb-4 text-customBlue">Get in Touch</h3>
                            <p className="text-gray-700 mb-4">Instagram : @zkuu_lewd | Github : @zkuu1</p>
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
