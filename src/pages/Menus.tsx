import React, { useState } from 'react';

export default function Menus() {
  const [activeMenu, setActiveMenu] = useState('steaks');

  const menuCategories = [
    { id: 'steaks', label: 'Premium Steaks' },
    { id: 'appetizers', label: 'Appetizers' },
    { id: 'seafood', label: 'Seafood' },
    { id: 'wine', label: 'Wine Selection' },
  ];

  const menuItems = {
    steaks: [
      { name: 'Blackhorn Ribeye', description: '32oz dry-aged prime ribeye with herb butter', price: '$89' },
      { name: 'Filet Mignon', description: '12oz center-cut tenderloin with truffle sauce', price: '$68' },
      { name: 'New York Strip', description: '16oz prime strip steak with rosemary', price: '$58' },
      { name: 'Porterhouse', description: '28oz premium cut for two, aged 28 days', price: '$125' },
      { name: 'Tomahawk Ribeye', description: '40oz show-stopping bone-in ribeye', price: '$165' },
      { name: 'Wagyu Sirloin', description: '10oz authentic Japanese A5 wagyu', price: '$195' },
    ],
    appetizers: [
      { name: 'Oysters Rockefeller', description: 'Half dozen fresh oysters with spinach and cream', price: '$24' },
      { name: 'Lobster Bisque', description: 'Rich lobster soup with cognac cream', price: '$18' },
      { name: 'Beef Carpaccio', description: 'Thinly sliced raw beef with capers and parmesan', price: '$22' },
      { name: 'Shrimp Cocktail', description: 'Jumbo shrimp with spicy cocktail sauce', price: '$28' },
      { name: 'Foie Gras', description: 'Pan-seared foie gras with cherry compote', price: '$35' },
      { name: 'Tuna Tartare', description: 'Yellowfin tuna with avocado and sesame', price: '$26' },
    ],
    seafood: [
      { name: 'Lobster Tail', description: '12oz cold water lobster tail with drawn butter', price: '$58' },
      { name: 'Chilean Sea Bass', description: 'Miso-glazed sea bass with bok choy', price: '$48' },
      { name: 'King Crab Legs', description: '2lbs Alaskan king crab with lemon butter', price: '$85' },
      { name: 'Pan-Seared Scallops', description: 'Diver scallops with cauliflower puree', price: '$42' },
      { name: 'Grilled Salmon', description: 'Atlantic salmon with dill cream sauce', price: '$38' },
      { name: 'Surf & Turf', description: 'Filet mignon paired with lobster tail', price: '$95' },
    ],
    wine: [
      { name: 'Caymus Cabernet Sauvignon', description: 'Napa Valley, California 2019', price: '$125' },
      { name: 'Opus One', description: 'Napa Valley Bordeaux Blend 2018', price: '$495' },
      { name: 'Dom Perignon', description: 'Champagne, France 2012', price: '$285' },
      { name: 'Screaming Eagle', description: 'Napa Valley Cabernet 2017', price: '$850' },
      { name: 'Château Margaux', description: 'Bordeaux, France 2015', price: '$1,200' },
      { name: 'Krug Grande Cuvée', description: 'Champagne, France NV', price: '$195' },
    ],
  };

  return (
    <div className="min-h-screen py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-white">Our Menus</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover our carefully curated selection of premium steaks, fresh seafood, and world-class wines
          </p>
        </div>

        {/* Menu Navigation */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveMenu(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeMenu === category.id
                  ? 'bg-amber-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="bg-gray-800 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-amber-400">
            {menuCategories.find(cat => cat.id === activeMenu)?.label}
          </h2>
          <div className="grid gap-6">
            {menuItems[activeMenu as keyof typeof menuItems].map((item, index) => (
              <div key={index} className="flex justify-between items-center p-6 bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
                <div className="text-2xl font-bold text-amber-400 ml-4">
                  {item.price}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">
            All steaks served with your choice of sides and signature sauces
          </p>
          <p className="text-sm text-gray-500">
            Prices subject to change. Please inform us of any dietary restrictions or allergies.
          </p>
        </div>
      </div>
    </div>
  );
}