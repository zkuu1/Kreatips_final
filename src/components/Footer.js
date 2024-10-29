import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-customLightGreen text-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    {/* Brand and Copyright */}
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-lg font-bold">KreaTips</h3>
                        <p className="text-sm">&copy; {new Date().getFullYear()} KreaTips. All rights reserved.</p>
                    </div>
                    
                    {/* Navigation Links */}
                    <div className="flex space-x-6 mb-4 md:mb-0">
                        <a href="#about" className="text-sm text-customGreen hover:text-white">About</a>
                        <a href="#categori" className="text-sm text-customGreen hover:text-white">Gallery Seni</a>
                        <a href="#gallery" className="text-sm text-customGreen hover:text-white">Gallery Saya</a>
                        <a href="#blog" className="text-sm text-customGreen hover:text-white">Credit</a>
                    </div>
                    
                    {/* Social Media Icons */}
                    <div className="flex space-x-4">
                        <a href="#" aria-label="Facebook" className="hover:text-gray-300">
                            <FaFacebook />
                        </a>
                        <a href="#" aria-label="Twitter" className="hover:text-gray-300">
                            <FaTwitter />
                        </a>
                        <a href="#" aria-label="Instagram" className="hover:text-gray-300">
                            <FaInstagram />
                        </a>
                        <a href="#" aria-label="LinkedIn" className="hover:text-gray-300">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
