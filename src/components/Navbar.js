import React, { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <nav className="bg-customLightGreen p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Nama brand dengan ukuran font yang lebih besar */}
                <div className="text-4xl font-bold flex items-center">
                    <span className="text-white">krea</span>
                    <span className="text-customGreen">Tips</span>
                </div>

                {/* Hamburger menu untuk perangkat mobile */}
                <div className="lg:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>

                {/* Menu navigasi untuk desktop */}
                <ul className="hidden lg:flex space-x-6 text-lg">
                    <li className="relative">
                        {/* Dropdown untuk Menu Tips */}
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="text-white hover:text-white transition duration-300 focus:outline-none"
                        >
                            Menu Tips
                        </button>
                        {isDropdownOpen && (
                            <ul className="absolute mt-2 w-40 bg-customGreen rounded-lg shadow-lg py-2">
                                <li>
                                    <a href="#fundamental" className="block px-4 py-2 text-white hover:bg-customLightGreen hover:text-white transition duration-300">
                                        Fundamental
                                    </a>
                                </li>
                                <li>
                                <a href="#preparation" className="block px-4 py-2 text-white hover:bg-customLightGreen hover:text-white transition duration-300">
                                        Preparation
                                    </a>
                                </li>
                                
                            </ul>
                        )}
                    </li>
                    <li>
                        <a href="#about" className="text-white hover:text-white transition duration-300">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#gallery" className="text-white hover:text-white transition duration-300">
                            Gallery
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="text-white hover:text-white transition duration-300">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>

            {/* Slide-out menu untuk mobile */}
<div
    className={`fixed top-0 right-0 h-full ${isOpen ? "w-64" : "w-0"} bg-customLightGreen text-white overflow-hidden transform transition-all duration-300 ease-in-out lg:hidden`}
>
    <button
        onClick={() => setIsOpen(false)}
        className="p-4 text-gray-300 focus:outline-none hover:text-white"
    >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
    </button>
    <ul className="mt-20 space-y-6 px-6 text-lg">
        <li className="relative text-center"> {/* Centered alignment */}
            <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="block text-white hover:text-white transition duration-300 focus:outline-none"
            >
                Menu Tips
            </button>
            {isDropdownOpen && (
                <ul className="mt-2 bg-customGreen rounded-lg py-2 space-y-1">
                    <li className="text-left">
                        <a href="#fundamental" className="block px-4 py-2 text-white hover:bg-customLightGreen hover:text-white transition duration-300">
                            Fundamental
                        </a>
                    </li>
                    <li className="text-left">
                    <a href="#preparation" className="block px-4 py-2 text-white hover:bg-customLightGreen hover:text-white transition duration-300">
                           Preparation
                        </a>
                    </li>
                    
                </ul>
            )}
        </li>
        <li className="text-left">
            <a href="#about" className="block text-white hover:text-white transition duration-300">
                About
            </a>
        </li>
        <li className="text-left">
            <a href="#gallery" className="block text-white hover:text-white transition duration-300">
                Gallery
            </a>
        </li>
        <li className="text-left">
            <a href="#contact" className="block text-white hover:text-white transition duration-300">
                Contact
            </a>
        </li>
    </ul>
</div>
        </nav>
    );
};

export default Navbar;