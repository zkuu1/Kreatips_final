import React, { useState } from 'react';

const images = [
  { src: 'path/to/image1.jpg', category: 'Nature' },
  { src: 'path/to/image2.jpg', category: 'Nature' },
  { src: 'path/to/image3.jpg', category: 'Architecture' },
  { src: 'path/to/image4.jpg', category: 'Architecture' },
  { src: 'path/to/image5.jpg', category: 'Animals' },
  { src: 'path/to/image6.jpg', category: 'Animals' },
];

const categories = ['All', 'Nature', 'Architecture', 'Animals'];

const Categori = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredImages = selectedCategory === 'All' 
    ? images 
    : images.filter(image => image.category === selectedCategory);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Gallery</h1>
      <div className="flex mb-4">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`mx-2 px-4 py-2 rounded ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredImages.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img src={image.src} alt={`Gallery ${index}`} className="w-full h-48 object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categori;
