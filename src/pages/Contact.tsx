import React from 'react';
import { MapPin, Phone, Mail, Clock, Car, Utensils } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-white">Contact Us</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're here to make your dining experience exceptional. Reach out to us for reservations, 
            private events, or any questions you may have.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-amber-400">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-amber-400 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Address</h3>
                    <p className="text-gray-400">
                      123 Financial Boulevard<br />
                      Downtown District<br />
                      New York, NY 10005
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-amber-400 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Phone</h3>
                    <p className="text-gray-400">
                      Reservations: (555) 123-4567<br />
                      Private Events: (555) 123-4568
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-amber-400 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email</h3>
                    <p className="text-gray-400">
                      info@blackhornsteakhouse.com<br />
                      events@blackhornsteakhouse.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-amber-400 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Hours</h3>
                    <div className="text-gray-400">
                      <p>Monday - Thursday: 5:00 PM - 10:00 PM</p>
                      <p>Friday - Saturday: 5:00 PM - 11:00 PM</p>
                      <p>Sunday: 4:00 PM - 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Services */}
            <div className="bg-gray-800 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-amber-400">Services</h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Car className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                  <h3 className="font-semibold text-white mb-1">Valet Parking</h3>
                  <p className="text-sm text-gray-400">Complimentary service</p>
                </div>
                <div className="text-center">
                  <Utensils className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                  <h3 className="font-semibold text-white mb-1">Private Dining</h3>
                  <p className="text-sm text-gray-400">Up to 50 guests</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-amber-400">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-amber-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-amber-400 focus:outline-none"
                >
                  <option>General Inquiry</option>
                  <option>Reservation Request</option>
                  <option>Private Event</option>
                  <option>Catering</option>
                  <option>Feedback</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-amber-400 focus:outline-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}