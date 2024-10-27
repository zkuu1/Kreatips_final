import React from "react";
import png1 from '../assets/akane.png';
import png2 from '../assets/tenki.png';
import png4 from '../assets/tamao.png';
import png5 from '../assets/webpoke.png';
import png6 from '../assets/nijika.jpg';
import png7 from '../assets/majt.png';

const Projects = () => {
    return (
        <section className="py-20 bg-white" id="projects">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-bold mb-8">My Project</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-purple-950 p-4 rounded bg-opacity-30">
                        <img src={png2} alt="Zkuu jawir" className="w-full h-45 object-cover mb-4 rounded" />
                        <h3 className="text-2xl font-bold mb-2">Poster</h3>
                        <p className="text-gray-700">Tenki No Ko</p>
                    </div>

                    <div className="bg-purple-950 p-4 rounded bg-opacity-30">
                        <img src={png4} alt="Zkuu jawir" className="w-full h-45 object-cover mb-4 rounded" />
                        <h3 className="text-2xl font-bold mb-2">Poster</h3>
                        <p className="text-gray-700">Fate Grand:Order</p>
                    </div>

                    <div className="bg-purple-950 p-4 rounded bg-opacity-30">
                        <img src={png1} alt="Zkuu jawir" className="w-full h-45 object-cover mb-4 rounded" />
                        <h3 className="text-2xl font-bold mb-2">Poster</h3>
                        <p className="text-gray-700">Oshi No Ko</p>
                    </div>

                    <div className="bg-purple-950 p-4 rounded bg-opacity-30">
                        <img src={png5} alt="Zkuu jawir" className="w-full h-45 object-cover mb-4 rounded" />
                        <h3 className="text-2xl font-bold mb-2">Website Project Based Learning</h3>
                        <p className="text-gray-700">Class Profile</p>
                    </div>

                    <div className="bg-purple-950 p-4 rounded bg-opacity-30">
                        <img src={png6} alt="Zkuu jawir" className="w-full h-45 object-cover mb-4 rounded" />
                        <h3 className="text-2xl font-bold mb-2">Poster</h3>
                        <p className="text-gray-700">Bocchi The Rock</p>
                    </div>

                    <div className="bg-purple-950 p-4 rounded bg-opacity-30">
                        <img src={png7} alt="Zkuu jawir" className="w-full h-45 object-cover mb-4 rounded" />
                        <h3 className="text-2xl font-bold mb-2">Poster</h3>
                        <p className="text-gray-700">Masjid Agung Jawa Tengah</p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Projects;
