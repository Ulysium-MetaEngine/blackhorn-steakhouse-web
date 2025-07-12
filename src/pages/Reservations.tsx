import React, { useState } from 'react';
import { Calendar, Clock, Users, Phone, Mail } from 'lucide-react';

export default function Reservations() {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '2',
    name: '',
    email: '',
    phone: '',
    occasion: '',
    requests: ''
  });

  const timeSlots = [
    '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', 
    '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM'
  ];

  const occasions = [
    'Casual Dining', 'Business Dinner', 'Anniversary', 'Birthday', 
    'Date Night', 'Special Celebration', 'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Reservation submitted:', formData);
  };

  return (
    <div className="min-h-screen py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-white">Make a Reservation</h1>
          <p className="text-xl text-gray-400">
            Reserve your table at Blackhorn Steakhouse for an unforgettable dining experience
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Reservation Form */}
          <div className="lg:col-span-2 bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-amber-400">Reservation Details</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Date and Time */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-300 mb-2">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-amber-400 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-300 mb-2">
                    <Clock className="w-4 h-4 inline mr-2" />
                    Time
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-amber-400 focus:outline-none"
                    required
                  >
                    <option value="">Select time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Number of Guests */}
              <div>
                <label htmlFor="guests" className="block text-sm font-medium text-gray-300 mb-2">
                  <Users className="w-4 h-4 inline mr-2" />
                  Number of Guests
                </label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-amber-400 focus:outline-none"
                >
                  {[1,2,3,4,5,6,7,8,9,10].map((num) => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-amber-400 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-amber-400 focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-amber-400 focus:outline-none"
                  required
                />
              </div>

              {/* Occasion */}
              <div>
                <label htmlFor="occasion" className="block text-sm font-medium text-gray-300 mb-2">
                  Occasion
                </label>
                <select
                  id="occasion"
                  name="occasion"
                  value={formData.occasion}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-amber-400 focus:outline-none"
                >
                  <option value="">Select occasion</option>
                  {occasions.map((occasion) => (
                    <option key={occasion} value={occasion}>{occasion}</option>
                  ))}
                </select>
              </div>

              {/* Special Requests */}
              <div>
                <label htmlFor="requests" className="block text-sm font-medium text-gray-300 mb-2">
                  Special Requests
                </label>
                <textarea
                  id="requests"
                  name="requests"
                  value={formData.requests}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-amber-400 focus:outline-none"
                  placeholder="Dietary restrictions, seating preferences, allergies, etc."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Confirm Reservation
              </button>
            </form>
          </div>

          {/* Reservation Info */}
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-amber-400">Reservation Policy</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Reservations recommended for parties of 2 or more</li>
                <li>• Large parties (8+) require confirmation call</li>
                <li>• 24-hour cancellation policy</li>
                <li>• Business casual dress code enforced</li>
                <li>• We hold tables for 15 minutes past reservation time</li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-amber-400">Need Help?</h3>
              <p className="text-gray-300 text-sm mb-4">
                For large parties, special events, or immediate seating, please call us directly.
              </p>
              <div className="space-y-2 text-sm">
                <p className="text-gray-300">
                  <Phone className="w-4 h-4 inline mr-2" />
                  (555) 123-4567
                </p>
                <p className="text-gray-300">
                  <Mail className="w-4 h-4 inline mr-2" />
                  reservations@blackhornsteakhouse.com
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-900 to-red-900 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-white">Private Dining</h3>
              <p className="text-amber-100 text-sm mb-4">
                Host your special event in our exclusive private dining room.
              </p>
              <button className="bg-white text-red-900 px-4 py-2 rounded font-semibold text-sm hover:bg-gray-100 transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}