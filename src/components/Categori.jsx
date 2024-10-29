import React, { useState } from 'react';
import png2d from '../assets/Categori/2d.webp';
import png2d1 from '../assets/Categori/2d2.webp';
import png2d2 from '../assets/Categori/2d3.jpg';
import png2d3 from '../assets/Categori/2d4.webp';
import png2d4 from '../assets/Categori/2d5.jpg';

import png3d from '../assets/Categori/3d.jpg';
import png3d1 from '../assets/Categori/3d1.jpg';
import png3d2 from '../assets/Categori/3d2.webp';

import png1p from '../assets/Categori/poster.webp';
import png2p from '../assets/Categori/poster2.webp';
import png3p from '../assets/Categori/poster3.webp';
import png4p from '../assets/Categori/poster4.webp';

import png1pt from '../assets/Categori/pt1.webp';
import png2pt from '../assets/Categori/pt2.webp';
import png3pt from '../assets/Categori/pt3.jpg';
import png4pt from '../assets/Categori/pt4.webp';
import png5pt from '../assets/Categori/pt5.jpg';
import png6pt from '../assets/Categori/pt6.jpg';

const images = [
  { src: png2d , category: '2D' },
  { src: png2d2, category: '2D' },
  { src: png2d1, category: '2D' },
  { src: png2d3, category: '2D' },
  { src: png2d4, category: '2D' },
  { src: png3d, category: '3D' },
  { src:  png3d1, category: '3D' },
  { src:  png3d2, category: '3D' },
  { src:  png3d2, category: '3D' },
  { src: png1p, category: 'Poster' },
  { src:  png2p, category: 'Poster' },
  { src:  png3p, category: 'Poster' },
  { src:  png4p, category: 'Poster' },
  { src:  png1pt, category: 'Photography' },
  { src:  png2pt, category: 'Photography' },
  { src:  png3pt, category: 'Photography' },
  { src:  png4pt, category: 'Photography' },
  { src:  png5pt, category: 'Photography' },
  { src:  png6pt, category: 'Photography' },
];

const categories = ['All', '2D', '3D', 'Poster', 'Photography'];

const Categori = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredImages = selectedCategory === 'All' 
    ? images 
    : images.filter(image => image.category === selectedCategory);

  return (
    <section id="categori">
 <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Gallery Seni</h1>
      <div className="flex flex-wrap mb-4">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`mx-2 mb-2 px-4 py-2 rounded transition duration-200 
              ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img src={image.src} alt={`Gallery ${index}`} className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-300 hover:scale-105" />
          </div>
        ))}
      </div>
    </div>
 
    </section>
     );
   
};

export default Categori;
