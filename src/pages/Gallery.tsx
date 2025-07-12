import React from 'react';

export default function Gallery() {
  const galleryImages = [
    {
      title: 'Prime Ribeye Steak',
      description: 'Our signature dry-aged ribeye with herb butter',
      category: 'Food'
    },
    {
      title: 'Elegant Dining Room',
      description: 'Intimate atmosphere with warm lighting',
      category: 'Interior'
    },
    {
      title: 'Lobster & Filet',
      description: 'Perfect surf and turf combination',
      category: 'Food'
    },
    {
      title: 'Wine Cellar',
      description: 'Over 500 carefully selected wines',
      category: 'Interior'
    },
    {
      title: 'Chef\'s Special',
      description: 'Artistic presentation meets incredible flavor',
      category: 'Food'
    },
    {
      title: 'Private Dining',
      description: 'Exclusive space for special occasions',
      category: 'Interior'
    },
    {
      title: 'Wagyu Preparation',
      description: 'Master chef preparing premium wagyu',
      category: 'Kitchen'
    },
    {
      title: 'Bar Selection',
      description: 'Premium spirits and handcrafted cocktails',
      category: 'Interior'
    },
    {
      title: 'Dessert Artistry',
      description: 'Sweet endings to perfect meals',
      category: 'Food'
    }
  ];

  return (
    <div className="min-h-screen py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-white">Gallery</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Step inside Blackhorn Steakhouse and experience the artistry of our cuisine and the elegance of our atmosphere
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg bg-gray-800 aspect-square">
              {/* Placeholder for image */}
              <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-amber-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{image.title}</h3>
                  <p className="text-sm text-gray-400">{image.category}</p>
                </div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{image.title}</h3>
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
        <div className="mt-20 text-center bg-gray-800 rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-6 text-white">Experience It Yourself</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Pictures can only capture so much. Come and taste the difference that passion and excellence make.
          </p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Make a Reservation
          </button>
        </div>
      </div>
    </div>
  );
}