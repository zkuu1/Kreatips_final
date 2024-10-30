import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-customLightGreen text-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
               
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-lg font-bold">KreaTips</h3>
                        <p className="text-sm">&copy; {new Date().getFullYear()} KreaTips. All rights reserved.</p>
                    </div>
                    
              
                    <div className="flex space-x-6 mb-4 md:mb-0">
                        <a href="#about" className="text-sm text-customGreen hover:text-white">About</a>
                        <a href="#categori" className="text-sm text-customGreen hover:text-white">Gallery Seni</a>
                        <a href="#gallery" className="text-sm text-customGreen hover:text-white">Gallery Saya</a>
                        <a href="https://id.pinterest.com/" className="text-sm text-customGreen hover:text-white">Credit</a>
                    </div>
                    
             
                    <div className="flex space-x-4">
                        <a href="https://web.facebook.com/zakariaakmalpasha.zakariaakmalpasha.1/" aria-label="Facebook" className="hover:text-gray-300">
                            <FaFacebook />
                        </a>
                       
                        <a href="https://www.instagram.com/ds.zkuu/" aria-label="Instagram" className="hover:text-gray-300">
                            <FaInstagram />
                        </a>
                        
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
