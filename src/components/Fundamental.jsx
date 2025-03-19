import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import png2 from "../assets/Fundamental/tuberta.png";
import png3 from "../assets/Fundamental/ambatron.jpg";
import png4 from "../assets/Fundamental/discord.png";


const Fundamental = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);
    return (
        <section className="py-20 bg-white" id="fundamental">
            <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
                <h2 data-aos="fade-down"className="text-2xl font-bold mb-3 text-customGreen">My Project</h2>
                <p data-aos="fade-down"className="text-lg font-bold mb-8 text-black">Website Developer & Game Developer</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">


                       <div data-aos="fade-up" className=" bg-customWhite p-4 rounded-lg bg-opacity-30 flex flex-col items-center hover:bg-customLightGreen transition-colors duration-300">
                        <img src={png2} alt="Titik" className="w-full h-60 object-cover mb-4 rounded" />
                        <h3 className="text-xl md:text-2xl font-bold mb-2 text-customBlue">Tuberta Catering UMKM</h3>
                        <p className="text-sm md:text-base text-black">
                            Our Team Handle This Project For Tuberta Catering UMKM. We Use React JS And Next JS
                        </p>
                    </div>

                    <div data-aos="fade-up" className=" bg-customWhite p-4 rounded-lg bg-opacity-30 flex flex-col items-center hover:bg-customLightGreen transition-colors duration-300">
                        <img src={png3} alt="Garis" className="w-full h-60 object-cover mb-4 rounded" />
                        <h3 className="text-xl md:text-2xl font-bold mb-2 text-customBlue">Ambatron Invade</h3>
                        <p className="text-sm md:text-base text-black">
                           Project Based Learning Game Development. We Use Unity Engine And C# Programming Language
                        </p>
                    </div>

                    <div data-aos="fade-up" className=" bg-customWhite p-4 rounded-lg bg-opacity-30 flex flex-col items-center hover:bg-customLightGreen transition-colors duration-300">
                        <img src={png4} alt="Garis" className="w-full h-60 object-cover mb-4 rounded" />
                        <h3 className="text-xl md:text-2xl font-bold mb-2 text-customBlue">Discord Bot</h3>
                        <p className="text-sm md:text-base text-black">
                           I Use Discord JS Btw Under Maintenance
                        </p>
                    </div>

                   
                </div>

                {/* SLIDER */}
            </div>



            
        </section>
    );
}

export default Fundamental;
