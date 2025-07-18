import { MapPin, Clock, Award, Beef } from 'lucide-react';

export default function Info() {
  return (
    <div className="min-h-screen bg-theme-900">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg)',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4 text-white">About Blackhorn Steakhouse</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Since 1969, the premier destination for discerning diners seeking the finest steaks
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 py-20">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-amber-400">Our Story</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              The blackhorn steakhouse is Scarborough's original steakhouse and has been a favourite with locals and visitors alike since 1969.
              Over 40 years of experience in the industry has allowed us to perfect our craft.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We invite you to experience the Blackhorn difference, where every meal is a celebration of flavor, craftsmanship, and hospitality.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Serving only the finest cuts of beef, seafood, veal, lamb, chicken and pasta. Experience the finest steaks in an atmosphere of refined elegance.
            </p>
          </div>
          <div className="bg-theme-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-white text-center">Quick Facts</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-amber-400 mr-4" />
                <span className="text-gray-300">Ellesmere Road, Scaraborough</span>
              </div>
              <div className="flex items-center">
                <Beef className="w-6 h-6 text-amber-400 mr-4" />
                <span className="text-gray-300">Variety of Meats</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-6 h-6 text-amber-400 mr-4" />
                <span className="text-gray-300">25+ Years of Excellence</span>
              </div>
              <div className="flex items-center">
                <Award className="w-6 h-6 text-amber-400 mr-4" />
                <span className="text-gray-300">Award-Winning Service</span>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-theme-800 rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4 text-amber-400">Quality First</h3>
              <p className="text-gray-300">
                We never compromise on the quality of our ingredients, sourcing only the finest cuts 
                and freshest produce.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4 text-amber-400">Exceptional Service</h3>
              <p className="text-gray-300">
                Our trained staff provides attentive, professional service that enhances every aspect 
                of your dining experience.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4 text-amber-400">Culinary Innovation</h3>
              <p className="text-gray-300">
                While respecting tradition, we continuously evolve our techniques and menu to surprise 
                and delight our guests.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}