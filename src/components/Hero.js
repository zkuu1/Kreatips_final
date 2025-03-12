import React from "react";
import cover from '../assets/Background/huohuo.jpeg';

const Hero = () => {
    return (
        <section 
            className="bg-fixed bg-cover bg-center h-screen text-white"
            style={{ backgroundImage: `url(${cover})` }}  
        >
            <div className="bg-black bg-opacity-60 h-full flex flex-col justify-center items-center text-center p-6">
                <span className="text-5xl font-bold mb-4">
                    Welcome To<span className="text-white">My </span>
                    <span className="text-green-300">Portofolio</span>
                </span>
                <p className="text-2xl mb-8">Scroll Untuk Lanjut</p>
                <a href="#about" className="bg-customGreen hover:bg-customLightGreen text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300">
                    Scroll Down..
                </a>
            </div>
        </section>
    );
}

export default Hero;
