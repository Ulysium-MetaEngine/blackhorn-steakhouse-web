import { MapPin, Phone, Mail, Clock, Car, Utensils, Navigation, Globe, Wine } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-theme-900">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg)',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4 text-white">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Visit us at our downtown location or get in touch for private events
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-3 gap-12 py-20">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-theme-800 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-amber-400">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-amber-400 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Address</h3>
                    <p className="text-gray-300">
                      251 Ellesmere Rd<br />
                      Toronto, ON<br />
                      M1R 4E4
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-amber-400 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Phone</h3>
                    <p className="text-gray-300">
                      Reservations: (416) 449-2841<br />
                      {/* Private Events: (555) 123-4568 */}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-amber-400 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email</h3>
                    <p className="text-gray-300">
                      blackhornscarborough@gmail.com<br />
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-amber-400 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Hours</h3>
                    <div className="text-gray-300">
                      <p>Monday - Friday:</p>
                      <ul className="list-disc pl-5 space mx-2">
                        <li>11:30 AM - 2:30 PM</li>
                        <li>4.30 PM - 10:00 PM</li>
                      </ul>
                      <p>Saturday:</p>
                      <ul className="list-disc pl-5 space mx-2">
                        <li>12:00 PM - 10:30 PM</li>
                      </ul>
                      <p>Sunday:</p>
                      <ul className="list-disc pl-5 space mx-2">
                        <li>12:00 PM - 9:00 PM</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Services */}
            <div className="bg-theme-800 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-amber-400">Services</h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Car className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                  <h3 className="font-semibold text-white mb-1">Free Parking</h3>
                  <p className="text-sm text-gray-300">Plenty of Parking</p>
                </div>
                <div className="text-center">
                  <Utensils className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                  <h3 className="font-semibold text-white mb-1">Kids Menu</h3>
                  <p className="text-sm text-gray-300">Variety of Cuisines</p>
                </div>
                <div className="text-center">
                  <Globe className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                  <h3 className="font-semibold text-white mb-1">Reservations</h3>
                  <p className="text-sm text-gray-300">Book Online</p>
                </div>
                <div className="text-center">
                  <Wine className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                  <h3 className="font-semibold text-white mb-1">Bar on site</h3>
                  <p className="text-sm text-gray-300">Full bar Service</p>
                </div>
            </div>
          </div>
        </div>

          {/* Google Map */}
          <div className="lg:col-span-2">
            <div className="bg-theme-800 rounded-lg p-8 h-full">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-amber-400">Find Us</h2>
                <a
                  href="https://maps.app.goo.gl/Qp7wU8zcfzumBPCYA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-amber-400 hover:text-amber-300 transition-colors duration-300"
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Get Directions
                </a>
              </div>
              
              {/* Google Map Embed */}
              <div className="relative w-full h-96 bg-theme-700 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d441.4554246242009!2d-79.30188018891437!3d43.76020608854995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d2175ab60629%3A0xb12fb29e34b9ecbb!2sBlackhorn%20Steakhouse!5e1!3m2!1sen!2slk!4v1752481557061!5m2!1sen!2slk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Blackhorn Steakhouse Location"
                  className="rounded-lg"
                ></iframe>
              </div>
              
                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-theme-900 rounded-lg p-6 flex flex-col items-start">
                  <Car className="w-6 h-6 text-amber-400 mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-4">Parking Information</h3>
                  <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Free Parking available</li>
                  <li>• Wheelchair accessible entrance</li>
                  </ul>
                </div>
                <div className="bg-theme-900 rounded-lg p-6 flex flex-col items-start">
                  <Utensils className="w-6 h-6 text-amber-400 mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-4">Dining Options</h3>
                  <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Dine-in & Takeout</li>
                  <li>• Kids menu available</li>
                  </ul>
                </div>
                <div className="bg-theme-900 rounded-lg p-6 flex flex-col items-start">
                  <Mail className="w-6 h-6 text-amber-400 mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-4">Contact Methods</h3>
                  <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Email: blackhornscarborough@gmail.com</li>
                  <li>• Phone: (416) 449-2841</li>
                  </ul>
                </div>
                <div className="bg-theme-900 rounded-lg p-6 flex flex-col items-start">
                  <Globe className="w-6 h-6 text-amber-400 mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-4">Social Media</h3>
                  <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Follow us on Instagram: @blackhornsteakhouse</li>
                  <li>• Like us on Facebook: Blackhorn Steakhouse</li>  
                  </ul>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}