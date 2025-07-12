import React from 'react';
import { Calendar, Clock, Star, Gift } from 'lucide-react';

export default function Specials() {
  const weeklySpecials = [
    {
      day: 'Monday',
      special: 'Wine Monday',
      description: '50% off all wine bottles',
      icon: <Gift className="w-8 h-8" />
    },
    {
      day: 'Tuesday',
      special: 'Surf & Turf Tuesday',
      description: 'Special pricing on lobster tail & filet combinations',
      icon: <Star className="w-8 h-8" />
    },
    {
      day: 'Wednesday',
      special: 'Wagyu Wednesday',
      description: 'Exclusive wagyu tasting menu available',
      icon: <Calendar className="w-8 h-8" />
    },
    {
      day: 'Thursday',
      special: 'Throwback Thursday',
      description: 'Classic steakhouse favorites at original 1998 prices',
      icon: <Clock className="w-8 h-8" />
    }
  ];

  const monthlyEvents = [
    {
      title: 'Wine Tasting Dinner',
      date: 'First Friday of Each Month',
      description: 'Five-course meal paired with premium wines from our cellar',
      price: '$125 per person'
    },
    {
      title: 'Chef\'s Table Experience',
      date: 'Third Saturday of Each Month',
      description: 'Intimate dining experience with Chef Blackhorn',
      price: '$195 per person'
    },
    {
      title: 'Whiskey & Steak Night',
      date: 'Last Thursday of Each Month',
      description: 'Premium whiskey pairings with our finest cuts',
      price: '$85 per person'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg)',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4 text-white">Special Offers & Events</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Exclusive weekly specials and monthly events designed to enhance your dining experience
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Weekly Specials */}
        <div className="mb-20 py-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-amber-400">Weekly Specials</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {weeklySpecials.map((special, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-8 text-center hover:bg-gray-700 transition-colors duration-300">
                <div className="text-amber-400 mb-4 flex justify-center">
                  {special.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{special.day}</h3>
                <h4 className="text-lg font-semibold text-amber-400 mb-4">{special.special}</h4>
                <p className="text-gray-400">{special.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Events */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-amber-400">Monthly Events</h2>
          <div className="space-y-8">
            {monthlyEvents.map((event, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-8 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-gray-700 transition-colors duration-300">
                <div className="flex-1 mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-amber-400 font-semibold mb-2">{event.date}</p>
                  <p className="text-gray-400">{event.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-amber-400">{event.price}</div>
                  <button className="mt-2 bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300">
                    Reserve Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Holiday Specials */}
        <div className="bg-gradient-to-r from-red-900 to-amber-900 rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Holiday & Seasonal Specials</h2>
          <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
            Throughout the year, we offer special holiday menus and seasonal dishes featuring the finest 
            ingredients at their peak. From Valentine's Day romantic dinners to New Year's Eve celebrations, 
            make your special occasions even more memorable.
          </p>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12">
            <div className="bg-black bg-opacity-30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Valentine's Day</h3>
              <p className="text-amber-100">Romantic five-course dinner for two with champagne service</p>
            </div>
            <div className="bg-black bg-opacity-30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">New Year's Eve</h3>
              <p className="text-amber-100">Exclusive celebration menu with midnight champagne toast</p>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 bg-gray-800 rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Stay Updated</h2>
          <p className="text-xl text-gray-400 mb-8">
            Subscribe to our newsletter to be the first to know about new specials and exclusive events
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-amber-400 focus:outline-none w-full"
            />
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 w-full sm:w-auto">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}