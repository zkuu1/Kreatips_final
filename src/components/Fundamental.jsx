import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import png2 from "../assets/Fundamental/titik.webp";
import png3 from "../assets/Fundamental/garis.webp";
import png4 from "../assets/Fundamental/bidang.jpg";
import png5 from "../assets/Fundamental/color.jpg";
import png6 from "../assets/Fundamental/value.jpeg";
import png7 from "../assets/Fundamental/texture.jpg";

const Fundamental = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);
    return (
        <section className="py-20 bg-white" id="fundamental">
            <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
                <h2 data-aos="fade-down"className="text-2xl font-bold mb-3 text-customGreen">Fundamental</h2>
                <p data-aos="fade-down"className="text-lg font-bold mb-8 text-black">Hal dasar yang membuat lebih mudah belajar dalam seni visual</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">


                       <div data-aos="fade-up" className=" bg-customWhite p-4 rounded-lg bg-opacity-30 flex flex-col items-center hover:bg-customLightGreen transition-colors duration-300">
                        <img src={png2} alt="Titik" className="w-full h-60 object-cover mb-4 rounded" />
                        <h3 className="text-xl md:text-2xl font-bold mb-2 text-customBlue">Titik</h3>
                        <p className="text-sm md:text-base text-black">
                            Titik merupakan unsur paling kecil dalam suatu karya seni rupa. Titik bisa digunakan untuk menciptakan unsur-unsur lain dengan cara menyusun atau menderet hingga menjadi suatu garis. Akan tetapi titik juga bisa digunakan apa adanya tanpa suatu garis.
                        </p>
                    </div>

                    <div data-aos="fade-up" className=" bg-customWhite p-4 rounded-lg bg-opacity-30 flex flex-col items-center hover:bg-customLightGreen transition-colors duration-300">
                        <img src={png3} alt="Garis" className="w-full h-60 object-cover mb-4 rounded" />
                        <h3 className="text-xl md:text-2xl font-bold mb-2 text-customBlue">Garis</h3>
                        <p className="text-sm md:text-base text-black">
                            Garis merupakan elemen dasar dalam seni rupa yang terdiri dari kumpulan titik-titik yang memanjang. Garis memiliki peran penting dalam seni rupa, karena menjadi dasar untuk menciptakan karya seni dan membatasi ruang dan bidang.
                        </p>
                    </div>

                    <div data-aos="fade-up" className=" bg-customWhite p-4 rounded-lg bg-opacity-30 flex flex-col items-center hover:bg-customLightGreen transition-colors duration-300">
                        <img src={png4} alt="Bidang" className="w-full h-60 object-cover mb-4 rounded" />
                        <h3 className="text-xl md:text-2xl font-bold mb-2">Bidang</h3>
                        <p className="text-sm md:text-base text-black">
                            Bidang adalah elemen seni rupa yang terbentuk oleh garis yang saling terhubung dan menciptakan bentuk dua dimensi, seperti persegi, segitiga, atau lingkaran. Bidang menjadi dasar untuk menciptakan ruang dalam karya seni.
                        </p>
                    </div>

                    <div data-aos="fade-up" className=" bg-customWhite p-4 rounded-lg bg-opacity-30 flex flex-col items-center hover:bg-customLightGreen transition-colors duration-300">
                        <img src={png5} alt="Bidang" className="w-full h-60 object-cover mb-4 rounded" />
                        <h3 className="text-xl md:text-2xl font-bold mb-2">Color</h3>
                        <p className="text-sm md:text-base text-black">
                        Warna adalah spektrum cahaya yang terurai saat mengenai suatu permukaan dan terpantul ke mata. Warna memiliki berbagai sifat seperti 'hue' yang memiliki rentang warna dasar seperti merah dan biru, 'intensity' yang merupakan kekuatan warna, 'value' yang merupakan tingkat terang dan gelapnya warna, dan 'temperature' yang merupakan tingkat hangat atau dinginnya warna yang dirasakan oleh pengamat saat melihat warna tersebut.
                        </p>
                    </div>

                    <div data-aos="fade-up" className=" bg-customWhite p-4 rounded-lg bg-opacity-30 flex flex-col items-center hover:bg-customLightGreen transition-colors duration-300">
                        <img src={png6} alt="Bidang" className="w-full h-60 object-cover mb-4 rounded" />
                        <h3 className="text-xl md:text-2xl font-bold mb-2">Value / Nilai</h3>
                        <p className="text-sm md:text-base text-black">
                        Nilai mengacu pada tingkat kecerahan warna yang dapat dirasakan dalam suatu gambar. Perbedaan nilai ini disebut Kontras. Nilai ini merujuk pada warna paling terang dan paling gelap dengan varian abu-abu di antara sebuah karya seni. 
                        </p>
                    </div>

                    <div data-aos="fade-up" className=" bg-customWhite p-4 rounded-lg bg-opacity-30 flex flex-col items-center hover:bg-customLightGreen transition-colors duration-300">
                        <img src={png7} alt="Bidang" className="w-full h-60 object-cover mb-4 rounded" />
                        <h3 className="text-xl md:text-2xl font-bold mb-2">Texture</h3>
                        <p className="text-sm md:text-base text-black">
                        Tekstur biasanya digunakan untuk menggambarkan kualitas permukaan. Tekstur bisa 'nyata' atau 'tersirat'. Kualitas permukaan nyata terutama terlihat melalui karya tiga dimensi, seperti patung. Kualitas permukaan tersirat menggambarkan bagaimana mata melihat tekstur berdasarkan isyarat visual.
                        </p>
                    </div>
                </div>

                {/* SLIDER */}
            </div>



            
        </section>
    );
}

export default Fundamental;
