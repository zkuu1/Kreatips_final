import React from "react";

const Contact = () => {
     return (
        <section className="py-20 bg-gray-100" id="contact">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-8 text-gray-800">Contact Me</h2>
                <p className="text-xl mb-4 text-gray-600">Beri kritik dan masukan untuk website ini !</p>
                <a href="mailto:zakarisemarang33@gmail.com" className="bg-customGreen hover:bg-customLightGreen text-white font-bold py-2 rounded-lg shadow-md transition duration-300">
                    Email saya
                </a>
            </div>
        </section>
     )
}

export default Contact;