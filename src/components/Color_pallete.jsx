import React from "react";
import png1 from '../assets/ColorPallete/colorp2.png';
import png2 from '../assets/ColorPallete/colorp3.png';
import png3 from '../assets/ColorPallete/colorp4.png';
import png4 from '../assets/ColorPallete/colorp5.png';
import png5 from '../assets/ColorPallete/colorp6.png';
import png6 from '../assets/ColorPallete/colorp7.png';
import png7 from '../assets/ColorPallete/colorp8.png';
import png8 from '../assets/ColorPallete/colorp9.png';
import png9 from '../assets/ColorPallete/colorp10.png';


const ColorPalette = () => {
    return (
        <section className="py-20 bg-white" id="projects">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-bold mb-8 text-customGreen">Rekomendasi Color Pallete</h2>

                <div className="marquee-container">
                    <div className="marquee">
                        <div className="slide-item bg-customWhite p-4 rounded  mx-2">
                            <img src={png2} alt="Tenki No Ko" className="w-full h-44 object-cover mb-4 rounded" />
                            <h3 className="text-lg font-bold mb-2">Alice blue, light sky blue</h3>
                            <p className="text-gray-700">Hex : #83C9F4</p>
                            <p className="text-gray-700">Hex : #A3D5FF</p>
                            <p className="text-gray-700">Hex : #D0F0FF</p>
                        </div>
                        <div className="slide-item bg-customWhite p-4 rounded  mx-2">
                            <img src={png4} alt="Fate Grand: Order" className="w-full h-44 object-cover mb-4 rounded" />
                            <h3 className="text-lg font-bold mb-2">Baby blue & white</h3>
                            <p className="text-gray-700">Hex :  #FFFFFF</p>
                            <p className="text-gray-700">Hex : #8AAAE5</p>
                        </div>
                        <div className="slide-item bg-customWhite p-4 rounded  mx-2">
                            <img src={png1} alt="Oshi No Ko" className="w-full h-44 object-cover mb-4 rounded" />
                            <h3 className="text-lg font-bold mb-2">Light Blue, Cadet Gray, Payne's gray</h3>
                            <p className="text-gray-700">Hex :  #4F6367</p>
                            <p className="text-gray-700">Hex : #7A9E9F</p>
                            <p className="text-gray-700">Hex : #B8D8D8</p>
                        </div>
                        {/* Duplikasi elemen untuk efek loop */}
                        <div className="slide-item bg-customWhite p-4 rounded  mx-2">
                            <img src={png3} alt="Tenki No Ko" className="w-full h-44 object-cover mb-4 rounded" />
                            <h3 className="text-lg font-bold mb-2">Bittersweet, Lemon chiffon, Ash gray</h3>
                            <p className="text-gray-700">Hex :  #ED6A5A</p>
                            <p className="text-gray-700">Hex : #F4F1BB</p>
                            <p className="text-gray-700">Hex : #9BC1BC</p>
                        </div>
                        <div className="slide-item bg-customWhite p-4 rounded  mx-2">
                            <img src={png5} alt="Fate Grand: Order" className="w-full h-44 object-cover mb-4 rounded" />
                            <h3 className="text-lg font-bold mb-2">Azure, Ruddy Blue, Anti flash</h3>
                            <p className="text-gray-700">Hex :  #207BFF</p>
                            <p className="text-gray-700">Hex : #4EA5FF</p>
                            <p className="text-gray-700">Hex : #F5F7FA</p>
                        </div>
                        <div className="slide-item bg-customWhite p-4 rounded  mx-2">
                            <img src={png6} alt="Oshi No Ko" className="w-full h-44 object-cover mb-4 rounded" />
                            <h3 className="text-lg font-bold mb-2">Carribean current, Tiffany green, white</h3>
                            <p className="text-gray-700">Hex :  #006D77</p>
                            <p className="text-gray-700">Hex : #83C58E</p>
                            <p className="text-gray-700">Hex : #EDF6F9</p>
                        </div>
                        <div className="slide-item bg-customWhite p-4 rounded  mx-2">
                            <img src={png8} alt="Oshi No Ko" className="w-full h-44 object-cover mb-4 rounded" />
                            <h3 className="text-lg font-bold mb-2">Blue & pastel pink</h3>
                            <p className="text-gray-700">Hex :  #2F3C7E</p>
                            <p className="text-gray-700">Hex : #FBEAEB</p>
                        
                        </div>
                        <div className="slide-item bg-customWhite p-4 rounded  mx-2">
                            <img src={png7} alt="Oshi No Ko" className="w-full h-44 object-cover mb-4 rounded" />
                            <h3 className="text-lg font-bold mb-2">Dark blue & light blue</h3>
                            <p className="text-gray-700">Hex :  #00246B</p>
                            <p className="text-gray-700">Hex : #CADCFC</p>
                         
                        </div>
                        <div className="slide-item bg-customWhite p-4 rounded  mx-2">
                            <img src={png9} alt="Oshi No Ko" className="w-full h-44 object-cover mb-4 rounded" />
                            <h3 className="text-lg font-bold mb-2">Dark charcoal & bright yellow</h3>
                            <p className="text-gray-700">Hex : #101820</p>
                            <p className="text-gray-700">Hex : #FEE715</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ColorPalette;
