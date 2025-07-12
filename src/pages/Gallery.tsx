import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      title: 'Prime Ribeye Steak',
      description: 'Our signature dry-aged ribeye with herb butter',
      category: 'Food',
      image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg'
    },
    {
      title: 'Elegant Dining Room',
      description: 'Intimate atmosphere with warm lighting',
      category: 'Interior',
      image: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg'
    },
    {
      title: 'Lobster & Filet',
      description: 'Perfect surf and turf combination',
      category: 'Food',
      image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg'
    },
    {
      title: 'Wine Cellar',
      description: 'Over 500 carefully selected wines',
      category: 'Interior',
      image: 'https://images.pexels.com/photos/434311/pexels-photo-434311.jpeg'
    },
    {
      title: 'Chef\'s Special',
      description: 'Artistic presentation meets incredible flavor',
      category: 'Food',
      image: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg'
    },
    {
      title: 'Private Dining',
      description: 'Exclusive space for special occasions',
      category: 'Interior',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg'
    },
    {
      title: 'Wagyu Preparation',
      description: 'Master chef preparing premium wagyu',
      category: 'Kitchen',
      image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg'
    },
    {
      title: 'Bar Selection',
      description: 'Premium spirits and handcrafted cocktails',
      category: 'Interior',
      image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg'
    },
    {
      title: 'Dessert Artistry',
      description: 'Sweet endings to perfect meals',
      category: 'Food',
      image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg'
    },
    {
      title: 'Tomahawk Steak',
      description: 'Show-stopping presentation for sharing',
      category: 'Food',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg'
    },
    {
      title: 'Coffee Service',
      description: 'Premium coffee and espresso selections',
      category: 'Food',
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg'
    },
    {
      title: 'Restaurant Exterior',
      description: 'Welcoming entrance in the financial district',
      category: 'Exterior',
      image: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg'
    }
  ];

  const categories = ['All', ...Array.from(new Set(galleryImages.map(img => img.category)))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-64 sm:h-80 lg:h-96 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg)',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">Gallery</h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto">
            Experience the artistry of our cuisine and the elegance of our atmosphere
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 py-8 lg:py-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${
                activeCategory === category
                  ? 'bg-amber-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 pb-12 lg:pb-20">
          {filteredImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg bg-gray-800 aspect-square cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.image}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{image.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{image.description}</p>
                  <span className="inline-block bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {image.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mb-12 lg:mb-20 text-center bg-gray-800 rounded-lg p-8 lg:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Experience It Yourself</h2>
          <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Pictures can only capture so much. Come and taste the difference that passion and excellence make.
          </p>
          <a
            href="https://www.opentable.com/blackhorn-steakhouse"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Make a Reservation
          </a>
        </div>
      </div>

      {/* Modal for enlarged image */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={filteredImages[selectedImage].image}
              alt={filteredImages[selectedImage].title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 rounded-b-lg">
              <h3 className="text-xl font-bold mb-2">{filteredImages[selectedImage].title}</h3>
              <p className="text-gray-300">{filteredImages[selectedImage].description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}