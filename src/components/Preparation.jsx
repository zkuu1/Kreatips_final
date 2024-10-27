import React, { useEffect } from "react"; // Tambahkan useEffect
import png2 from "../assets/Preparation/ps.png";
import png3 from "../assets/Preparation/id.png";
import png4 from "../assets/Preparation/ai.png";
import png5 from "../assets/Preparation/cdraw.jpeg";
import png6 from "../assets/Preparation/am.png";
import png7 from "../assets/Preparation/canva.png";
import png8 from "../assets/Preparation/pixellab.png";

import AOS from "aos";
import "aos/dist/aos.css";

const Preparation = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    const fundamentals = [
        { img: png2, title: "Adobe Photoshop", text: "Adobe Photoshop atau biasa disebut Photoshop, adalah perangkat lunak editor citra buatan Adobe System yang di khususkan untuk pengeditan foto/gambar dan pembuatan efek. Hasil gambar yang diolah dengan Adobe Photoshop ini banyak digunakan mulai dari periklanan, fotografi, website hingga multimedia pembelajaran." },
        { img: png3, title: "Adobe InDesign", text: "Adobe InDesign adalah perangkat lunak tata letak halaman dan desain untuk media cetak dan digital. InDesign adalah standar industri untuk desain penerbitan dan digunakan oleh para profesional grafis dan pemasaran. nDesign memungkinkan pengguna untuk memadukan teks, gambar, dan bentuk untuk membuat tata letak halaman yang menarik. InDesign dapat digunakan bersama dengan aplikasi lain yang merupakan bagian dari Adobe Creative Cloud, seperti Illustrator dan Photoshop" },
        { img: png4, title: "Adobe Illustrator", text: "Adobe Illustrator adalah perangkat lunak grafis vektor yang digunakan untuk membuat karya seni, ilustrasi, logo, dan desain lainnya. Adobe Illustrator merupakan salah satu aplikasi Creative Cloud yang dikembangkan oleh Adobe Inc." },
        { img: png5, title: "Corel Draw", text: "CorelDRAW adalah perangkat lunak desain vektor yang digunakan untuk membuat gambar dengan resolusi tinggi dan dapat diubah ukurannya tanpa kehilangan kualitas. CorelDRAW merupakan salah satu program desain grafis yang paling populer di dunia" },
        { img: png6, title: "Alight Motion", text: "Alight Motion adalah aplikasi motion design profesional pertama pada smartphone, menghadirkan animasi berkualitas profesional, motion graphic, efek visual, pengeditan video, pengomposisian video, dan masih banyak lagi!" },
        { img: png7, title: "Canva", text: "Canva adalah aplikasi desain grafis online yang dapat digunakan untuk membuat desain visual. Membuat presentasi, Membuat poster, Membuat infografis, Membuat brosur, Membuat video, Membuat resume, Membuat logo, Membuat konten media sosial, Membuat newsletter, Membuat thumbnail YouTube." },
        { img: png8, title: "Pixellab", text: "PixelLab adalah sebuah aplikasi edit foto sederhana yang berfokus pada kombinasi foto dan teks, bisa foto saja, foto dihiasi teks atau teks saja." }
    ];

    return (
        <section className="py-20 bg-white" id="preparation">
            <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold mb-3 text-customGreen">Preparation</h2>
                <p className="text-lg font-bold mb-8 text-black">Rekomendasi Software dan Aplikasi</p>

                <div className="grid grid-cols-1 gap-8">
                    {fundamentals.map((item, index) => (
                        <div
                            key={index}
                            className={`flex flex-col sm:flex-row ${index % 2 === 0 ? '' : 'sm:flex-row-reverse'} items-center bg-customWhite p-4 rounded-lg bg-opacity-30 hover:bg-customLightGreen transition-colors duration-300`}
                            data-aos="fade-up"
                            data-aos-delay={index * 100} // animasi delay berurutan
                        >
                            <img src={item.img} alt={item.title} className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg sm:mb-0 sm:w-48 sm:h-48" />
                            <div className="text-center sm:text-left sm:px-6">
                                <h3 className="text-xl md:text-2xl font-bold mb-2 text-customBlue">{item.title}</h3>
                                <p className="text-sm md:text-base text-black">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Preparation;
