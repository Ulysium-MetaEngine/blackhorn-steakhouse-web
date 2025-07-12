import { Clock, Star, Award } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg)',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            <span className="text-amber-400">Blackhorn</span> Steakhouse
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            Serving only the finest cuts of beef, seafood, veal, lamb, chicken and pasta. Experience the finest steaks in an atmosphere of refined elegance since 1969.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.opentable.com/blackhorn-steakhouse"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-block text-center"
            >
              Make a Reservation
            </a>
            <button className="border-2 border-gray-600 text-gray-400 hover:bg-gray-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
              View Our Menu
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Why Choose Blackhorn?</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our commitment to excellence shines through every aspect of your dining experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors duration-300">
              <Award className="w-16 h-16 text-amber-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-white">Premium Quality</h3>
              <p className="text-gray-400 leading-relaxed">
                Hand-selected USDA Prime beef, aged to perfection and prepared by our master chefs with decades of experience.
              </p>
            </div>
            
            <div className="text-center p-8 bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors duration-300">
              <Star className="w-16 h-16 text-amber-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-white">Award-Winning</h3>
              <p className="text-gray-400 leading-relaxed">
                Recognized by culinary experts and beloved by patrons. Multiple awards for excellence in dining and service.
              </p>
            </div>
            
            <div className="text-center p-8 bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors duration-300">
              <Clock className="w-16 h-16 text-amber-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-white">Timeless Excellence</h3>
              <p className="text-gray-400 leading-relaxed">
                Over 25 years of serving exceptional cuisine in an atmosphere that celebrates the art of fine dining.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-amber-900 to-red-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready for an Unforgettable Experience?</h2>
          <p className="text-xl mb-8 text-amber-100">
            Join us for an evening of exceptional cuisine, fine wines, and impeccable service.
          </p>
          <button className="bg-white text-red-900 px-10 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
            Reserve Your Table Tonight
          </button>
        </div>
      </section>
    </div>
  );
}