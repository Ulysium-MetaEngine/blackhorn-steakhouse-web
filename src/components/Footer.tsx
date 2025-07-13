import { Instagram, Star, MapPin, Facebook, Twitter, Youtube } from 'lucide-react';
import logo from '../assets/images/logo.jpg';

export default function Footer() {
  const socialLinks = [
    { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, url: 'https://instagram.com/blackhornsteakhouse' },
    { name: 'Facebook', icon: <Facebook className="w-5 h-5" />, url: 'https://facebook.com/blackhornsteakhouse' },
    { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, url: 'https://twitter.com/blackhornsteakhouse' },
    { name: 'YouTube', icon: <Youtube className="w-5 h-5" />, url: 'https://youtube.com/blackhornsteakhouse' },
    { name: 'Yelp', icon: <Star className="w-5 h-5" />, url: 'https://yelp.com/biz/blackhorn-steakhouse' },
    { name: 'TripAdvisor', icon: <MapPin className="w-5 h-5" />, url: 'https://tripadvisor.com/restaurant/blackhorn-steakhouse' },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <img src={logo} alt="Blackhorn Steakhouse Logo" className="h-16 w-auto mb-4" />
            <h3 className="text-2xl font-bold text-amber-400 mb-4">The Blackhorn Steakhouse</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Serving only the finest cuts of beef, seafood, veal, lamb, chicken and pasta. Experience the finest steaks in an atmosphere of refined elegance since 1969.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">Menu</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">Private Dining</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">Gift Cards</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">Careers</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>251 Ellesmere Rd</p>
              <p>Toronto, ON</p>
              <p>M1R 4E4</p>
              <p className="mt-4">
                <span className="block">Reservations:</span>
                <span className="text-amber-400">(416) 449-2841</span>
              </p>
              <p>
                <span className="block">Email:</span>
                <span className="text-amber-400">blackhornscarborough@gmail.com</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Blackhorn Steakhouse. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-300">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}