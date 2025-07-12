import React, { useState } from 'react';
import { ChefHat, Wine, Coffee, Truck, Users } from 'lucide-react';

export default function Menus() {
  const [activeMenu, setActiveMenu] = useState('menu');

  const mainMenus = [
    { id: 'menu', label: 'Dining Menu', icon: <ChefHat className="w-5 h-5" /> },
    { id: 'wine', label: 'Wine List', icon: <Wine className="w-5 h-5" /> },
    { id: 'coffee', label: 'Coffee & Desserts', icon: <Coffee className="w-5 h-5" /> },
    { id: 'catering', label: 'Catering', icon: <Users className="w-5 h-5" /> },
    { id: 'delivery', label: 'Delivery', icon: <Truck className="w-5 h-5" /> },
  ];

  const menuData = {
    menu: {
      'Signature Steaks': {
        'Premium Cuts': [
          {
            name: 'Blackhorn Ribeye',
            description: '32oz dry-aged prime ribeye with herb butter, served with roasted garlic and seasonal vegetables',
            price: '$89',
            image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg'
          },
          {
            name: 'Wagyu Sirloin',
            description: '10oz authentic Japanese A5 wagyu with truffle oil and microgreens',
            price: '$195',
            image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg'
          },
          {
            name: 'Tomahawk Ribeye',
            description: '40oz show-stopping bone-in ribeye, perfect for sharing, aged 28 days',
            price: '$165',
            image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg'
          }
        ],
        'Classic Cuts': [
          {
            name: 'Filet Mignon',
            description: '12oz center-cut tenderloin with truffle sauce and asparagus',
            price: '$68',
            image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg'
          },
          {
            name: 'New York Strip',
            description: '16oz prime strip steak with rosemary and garlic butter',
            price: '$58',
            image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg'
          },
          {
            name: 'Porterhouse',
            description: '28oz premium cut for two, dry-aged 28 days with bone marrow',
            price: '$125',
            image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg'
          }
        ]
      },
      'Appetizers': {
        'Cold Starters': [
          {
            name: 'Oysters Rockefeller',
            description: 'Half dozen fresh Blue Point oysters with spinach, herbs, and cream',
            price: '$24',
            image: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg'
          },
          {
            name: 'Beef Carpaccio',
            description: 'Thinly sliced raw beef tenderloin with capers, arugula, and aged parmesan',
            price: '$22',
            image: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg'
          }
        ],
        'Hot Starters': [
          {
            name: 'Lobster Bisque',
            description: 'Rich lobster soup with cognac cream and fresh chives',
            price: '$18',
            image: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg'
          },
          {
            name: 'Foie Gras',
            description: 'Pan-seared foie gras with cherry compote and brioche',
            price: '$35',
            image: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg'
          }
        ]
      },
      'Seafood': [
        {
          name: 'Lobster Tail',
          description: '12oz cold water lobster tail with drawn butter and lemon',
          price: '$58',
          image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg'
        },
        {
          name: 'King Crab Legs',
          description: '2lbs Alaskan king crab with garlic lemon butter',
          price: '$85',
          image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg'
        },
        {
          name: 'Surf & Turf',
          description: '8oz filet mignon paired with 8oz lobster tail',
          price: '$95',
          image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg'
        }
      ]
    },
    wine: {
      'Red Wines': {
        'Cabernet Sauvignon': [
          {
            name: 'Caymus Cabernet Sauvignon',
            description: 'Napa Valley, California 2019 - Rich and full-bodied with dark fruit flavors',
            price: '$125',
            image: 'https://images.pexels.com/photos/434311/pexels-photo-434311.jpeg'
          },
          {
            name: 'Screaming Eagle',
            description: 'Napa Valley Cabernet 2017 - Legendary cult wine with exceptional complexity',
            price: '$850',
            image: 'https://images.pexels.com/photos/434311/pexels-photo-434311.jpeg'
          }
        ],
        'Bordeaux Blends': [
          {
            name: 'Opus One',
            description: 'Napa Valley Bordeaux Blend 2018 - Joint venture of Mondavi and Rothschild',
            price: '$495',
            image: 'https://images.pexels.com/photos/434311/pexels-photo-434311.jpeg'
          }
        ]
      },
      'Champagne & Sparkling': [
        {
          name: 'Dom Perignon',
          description: 'Champagne, France 2012 - Prestigious vintage champagne with elegant bubbles',
          price: '$285',
          image: 'https://images.pexels.com/photos/434311/pexels-photo-434311.jpeg'
        },
        {
          name: 'Krug Grande Cuvée',
          description: 'Champagne, France NV - Complex blend of over 120 wines',
          price: '$195',
          image: 'https://images.pexels.com/photos/434311/pexels-photo-434311.jpeg'
        }
      ]
    },
    coffee: {
      'Coffee Selection': [
        {
          name: 'Single Origin Espresso',
          description: 'Ethiopian Yirgacheffe beans with floral notes and bright acidity',
          price: '$6',
          image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg'
        },
        {
          name: 'Irish Coffee',
          description: 'Premium coffee with Irish whiskey, brown sugar, and whipped cream',
          price: '$12',
          image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg'
        }
      ],
      'Desserts': [
        {
          name: 'Chocolate Lava Cake',
          description: 'Warm chocolate cake with molten center, served with vanilla ice cream',
          price: '$14',
          image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg'
        },
        {
          name: 'Crème Brûlée',
          description: 'Classic vanilla custard with caramelized sugar crust',
          price: '$12',
          image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg'
        }
      ]
    },
    catering: {
      'Salads': [
        {
          name: 'Caesar Salad',
          description: 'Crisp romaine lettuce with house-made Caesar dressing, croutons, and parmesan',
          sizes: [
            { size: '1/4 Tray', serves: '6-10', price: '$35' },
            { size: '1/2 Tray', serves: '12-15', price: '$65' },
            { size: 'Full Tray', serves: '20-25', price: '$95' },
            { size: 'Double Tray', serves: '40-50', price: '$180' }
          ],
          image: 'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg'
        },
        {
          name: 'Mixed Greens Salad',
          description: 'Fresh mixed greens with cherry tomatoes, cucumbers, and balsamic vinaigrette',
          sizes: [
            { size: '1/4 Tray', serves: '6-10', price: '$30' },
            { size: '1/2 Tray', serves: '12-15', price: '$55' },
            { size: 'Full Tray', serves: '20-25', price: '$85' },
            { size: 'Double Tray', serves: '40-50', price: '$160' }
          ],
          image: 'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg'
        }
      ],
      'Main Courses': {
        'Beef Selection': [
          {
            name: 'Sliced Beef Tenderloin',
            description: 'Premium beef tenderloin sliced and served with mushroom sauce',
            sizes: [
              { size: '1/4 Tray', serves: '6-10', price: '$185' },
              { size: '1/2 Tray', serves: '12-15', price: '$350' },
              { size: 'Full Tray', serves: '20-25', price: '$650' },
              { size: 'Double Tray', serves: '40-50', price: '$1200' }
            ],
            image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg'
          },
          {
            name: 'BBQ Beef Brisket',
            description: 'Slow-smoked beef brisket with house BBQ sauce',
            sizes: [
              { size: '1/4 Tray', serves: '6-10', price: '$125' },
              { size: '1/2 Tray', serves: '12-15', price: '$235' },
              { size: 'Full Tray', serves: '20-25', price: '$450' },
              { size: 'Double Tray', serves: '40-50', price: '$850' }
            ],
            image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg'
          }
        ],
        'Poultry': [
          {
            name: 'Herb-Roasted Chicken',
            description: 'Free-range chicken with fresh herbs and seasonal vegetables',
            sizes: [
              { size: '1/4 Tray', serves: '6-10', price: '$95' },
              { size: '1/2 Tray', serves: '12-15', price: '$175' },
              { size: 'Full Tray', serves: '20-25', price: '$325' },
              { size: 'Double Tray', serves: '40-50', price: '$625' }
            ],
            image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg'
          }
        ]
      },
      'Packages': [
        {
          name: 'Executive Lunch Package',
          description: 'Complete lunch service including appetizer, main course, dessert, and beverages',
          price: '$85 per person',
          minimumOrder: 'Minimum 10 people',
          image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg'
        },
        {
          name: 'Corporate Dinner Package',
          description: 'Premium dinner service with choice of two entrees, sides, and dessert',
          price: '$125 per person',
          minimumOrder: 'Minimum 15 people',
          image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg'
        }
      ]
    },
    delivery: {
      'Steak Dinners': [
        {
          name: 'Filet Mignon Dinner',
          description: 'Pre-cooked filet mignon with sides, vacuum sealed with reheating instructions',
          price: '$75',
          image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg'
        },
        {
          name: 'Ribeye Dinner',
          description: 'Pre-cooked ribeye steak with sides, vacuum sealed with reheating instructions',
          price: '$65',
          image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg'
        }
      ],
      'Family Meals': [
        {
          name: 'Family Steak Pack',
          description: 'Four steaks with family-style sides, serves 4-6 people',
          price: '$185',
          image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg'
        }
      ]
    }
  };

  const renderMenuItems = (items: any[]) => {
    return items.map((item, index) => (
      <div key={index} className="border-b border-gray-700 last:border-b-0 pb-6 last:pb-0 mb-6 last:mb-0">
        <div className="flex flex-col lg:flex-row gap-6">
          {item.image && (
            <div className="w-full lg:w-40 h-32 lg:h-40 flex-shrink-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
          )}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
              <h4 className="text-xl font-bold text-white mb-2 sm:mb-0">{item.name}</h4>
              {item.price && !item.sizes && (
                <span className="text-xl font-bold text-amber-400 sm:ml-4">{item.price}</span>
              )}
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">{item.description}</p>
            
            {/* Handle multiple sizes for catering */}
            {item.sizes && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {item.sizes.map((sizeOption: any, sizeIndex: number) => (
                  <div key={sizeIndex} className="bg-gray-800 rounded-lg p-3 text-center">
                    <div className="text-sm font-semibold text-amber-400 mb-1">{sizeOption.size}</div>
                    <div className="text-xs text-gray-400 mb-2">Serves {sizeOption.serves}</div>
                    <div className="text-lg font-bold text-white">{sizeOption.price}</div>
                  </div>
                ))}
              </div>
            )}
            
            {/* Handle package items */}
            {item.minimumOrder && (
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-3 pt-3 border-t border-gray-700">
                <div className="text-sm text-gray-500 mb-2 sm:mb-0">
                  <span className="font-semibold">Minimum:</span> {item.minimumOrder}
                </div>
                <div className="text-xl font-bold text-amber-400">{item.price}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    ));
  };

  const renderMenuSection = (section: any, sectionName: string) => {
    // Check if section is an array (no subcategories)
    if (Array.isArray(section)) {
      return (
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-amber-400 mb-6 border-b border-amber-400 pb-2">
            {sectionName}
          </h3>
          <div className="space-y-6">
            {renderMenuItems(section)}
          </div>
        </div>
      );
    }

    // Section has subcategories
    return (
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-amber-400 mb-6 border-b border-amber-400 pb-2">
          {sectionName}
        </h3>
        {Object.entries(section).map(([subSectionName, items]) => (
          <div key={subSectionName} className="mb-8">
            <h4 className="text-xl font-semibold text-white mb-4 pl-4 border-l-4 border-amber-400">
              {subSectionName}
            </h4>
            <div className="space-y-6 ml-4">
              {Array.isArray(items) ? renderMenuItems(items) : renderMenuSection(items, subSectionName)}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const currentMenuData = menuData[activeMenu as keyof typeof menuData];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-64 sm:h-80 lg:h-96 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg)',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">Our Menus</h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
            Discover our comprehensive dining options, from premium steaks to catering services
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Main Menu Navigation */}
        <div className="flex flex-wrap justify-center mb-8 lg:mb-12 gap-2 sm:gap-4">
          {mainMenus.map((menu) => (
            <button
              key={menu.id}
              onClick={() => setActiveMenu(menu.id)}
              className={`flex items-center gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${
                activeMenu === menu.id
                  ? 'bg-amber-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {menu.icon}
              <span className="hidden sm:inline">{menu.label}</span>
              <span className="sm:hidden">{menu.label.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Menu Content */}
        <div className="bg-gray-800 rounded-lg p-4 sm:p-6 lg:p-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 lg:mb-8 text-center text-amber-400 capitalize">
            {mainMenus.find(m => m.id === activeMenu)?.label}
          </h2>
          
          <div className="max-w-5xl mx-auto">
            {Object.entries(currentMenuData).map(([sectionName, section]) => 
              renderMenuSection(section, sectionName)
            )}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 lg:mt-16 text-center bg-gray-800 rounded-lg p-6 lg:p-8">
          <div className="max-w-3xl mx-auto">
            {activeMenu === 'menu' && (
              <p className="text-gray-400 mb-4">
                All steaks are served with your choice of sides and signature sauces. 
                Please inform us of any dietary restrictions or allergies.
              </p>
            )}
            {activeMenu === 'catering' && (
              <div className="space-y-4">
                <p className="text-gray-400">
                  All catering packages include setup, service, and cleanup. 
                  Minimum 48-hour notice required for all catering orders.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                  <div className="bg-gray-900 rounded-lg p-3">
                    <div className="font-semibold text-amber-400">1/4 Tray</div>
                    <div className="text-gray-400">6-10 people</div>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-3">
                    <div className="font-semibold text-amber-400">1/2 Tray</div>
                    <div className="text-gray-400">12-15 people</div>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-3">
                    <div className="font-semibold text-amber-400">Full Tray</div>
                    <div className="text-gray-400">20-25 people</div>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-3">
                    <div className="font-semibold text-amber-400">Double Tray</div>
                    <div className="text-gray-400">40-50 people</div>
                  </div>
                </div>
              </div>
            )}
            {activeMenu === 'delivery' && (
              <p className="text-gray-400 mb-4">
                Delivery available within 15 miles. Minimum order $75. 
                All meals come with detailed reheating instructions.
              </p>
            )}
            <p className="text-sm text-gray-500">
              Prices subject to change. Tax and gratuity not included.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}