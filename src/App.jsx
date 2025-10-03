import { useState, useEffect } from 'react';
import { ALL_DESTINATIONS, HERO_SLIDES } from './data/all-destinations';
import './App.css';

function App() {
  const [activeHero, setActiveHero] = useState(0);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [activeRegion, setActiveRegion] = useState('all');
  
  // Remove all Strapi-related code and use static data directly
  const loading = false;
  const error = null;

  // Get destinations based on active region
  const getFilteredDestinations = () => {
    if (activeRegion === 'all') {
      return [
        ...ALL_DESTINATIONS.kashmir,
        ...ALL_DESTINATIONS.india,
        ...ALL_DESTINATIONS.international
      ];
    }
    return ALL_DESTINATIONS[activeRegion] || [];
  };

  const formattedDestinations = getFilteredDestinations();
  const formattedHeroSlides = HERO_SLIDES;


  // Auto-rotate hero
  useEffect(() => {
    if (formattedHeroSlides.length > 0) {
      const interval = setInterval(() => {
        setActiveHero((prev) => (prev + 1) % formattedHeroSlides.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [formattedHeroSlides.length]);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl">Loading amazing destinations...</p>
          <p className="text-sm opacity-80 mt-2">Powered by Strapi CMS</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-white">
        <header className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-2xl">✈</span>
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-cyan-600 bg-clip-text text-transparent">
                    LuxeTravel
                  </h1>
                  <p className="text-xs text-gray-500 -mt-1">Premium Experiences</p>
                </div>
              </div>
            </div>
          </div>
        </header>
        
        <div className="pt-20 p-8 text-center">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-2xl mx-auto">
            <div className="text-4xl mb-4">⚠️</div>
            <h2 className="text-xl font-bold text-yellow-800 mb-2">CMS Not Connected</h2>
            <p className="text-yellow-700 mb-4">
              Your travel content is currently using fallback data. 
              To manage content via CMS, start your Strapi server.
            </p>
            <div className="text-sm text-yellow-600 bg-yellow-100 p-3 rounded">
              <strong>Run in separate terminal:</strong><br/>
              <code>cd travel-cms && npm run develop</code>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Package Detail Modal Component
  const PackageModal = () => (
    selectedPackage && (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="relative h-80 bg-cover bg-center" style={{ backgroundImage: `url(${selectedPackage.image})` }}>
            <button 
              onClick={() => setSelectedPackage(null)}
              className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 w-8 h-8 rounded-full flex items-center justify-center"
            >
              ×
            </button>
          </div>
          
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-gray-800">{selectedPackage.name}</h3>
              <span className="text-2xl font-bold text-cyan-600">${selectedPackage.price}</span>
            </div>
            
            <div className="flex items-center mb-4">
              <span className="bg-cyan-500 text-white text-sm font-semibold px-3 py-1 rounded-full mr-4">
                {selectedPackage.tag}
              </span>
              <div className="flex items-center text-yellow-400">
                <span>★</span>
                <span className="text-gray-700 ml-1">{selectedPackage.rating}</span>
              </div>
              <span className="text-gray-500 mx-4">•</span>
              <span className="text-gray-600">{selectedPackage.duration}</span>
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed">{selectedPackage.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Highlights</h4>
                <ul className="text-gray-600 space-y-2">
                  {selectedPackage.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Includes</h4>
                <ul className="text-gray-600 space-y-2">
                  {selectedPackage.includes.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-xl transition-colors">
              Book Now - ${selectedPackage.price}
            </button>
          </div>
        </div>
      </div>
    )
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Your existing header */}
      <header className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">✈</span>
              </div>
              <div>
                <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-800 to-cyan-600 bg-clip-text text-transparent">
                  Palm International
                </h1>
                <p className="text-xs text-gray-500 -mt-1">25 Years of Trusted Travel</p>
              </div>
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              {['Home', 'Destinations', 'Experiences', 'About', 'Contact'].map((item) => (
                <a key={item} href="#" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors duration-300 relative group">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            <button className="hidden lg:block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Plan Your Trip
            </button>

            <button className="lg:hidden p-2 rounded-lg bg-gray-100">
              <div className="w-6 h-0.5 bg-gray-600 mb-1.5"></div>
              <div className="w-6 h-0.5 bg-gray-600 mb-1.5"></div>
              <div className="w-6 h-0.5 bg-gray-600"></div>
            </button>
          </div>
        </div>
      </header>

      {/* Dynamic Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {formattedHeroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 bg-cover bg-center ${
              index === activeHero ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
          </div>
        ))}

        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-6">
          <div className="max-w-4xl">
            <div className="mb-6">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                ✨ Trusted Since 1999 • Based in Kashmir
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                {formattedHeroSlides[activeHero]?.title}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-cyan-100 max-w-2xl mx-auto leading-relaxed">
              {formattedHeroSlides[activeHero]?.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-cyan-50 transform hover:scale-105 transition-all duration-300 shadow-2xl">
                {formattedHeroSlides[activeHero]?.cta}
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
                Watch Experience
              </button>
            </div>
          </div>
        </div>

        {/* Hero Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {formattedHeroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveHero(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeHero ? 'bg-white scale-125' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Search Section */}
      <section className="relative -mt-20 z-40 px-6">
        <div className="container mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-6xl mx-auto border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-end">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Destination</label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">🌍</div>
                  <input type="text" placeholder="Where to next?" className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"/>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Dates</label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">📅</div>
                  <input type="text" placeholder="Select dates" className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"/>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Travelers</label>
                <select className="w-full py-4 px-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300">
                  <option>1 Traveler</option>
                  <option>2 Travelers</option>
                  <option>3 Travelers</option>
                  <option>4+ Travelers</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Budget</label>
                <div className="space-y-2">
                  <input type="range" min="0" max="10000" step="500" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-cyan-500"/>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>$0</span>
                    <span>$5,000</span>
                    <span>$10,000</span>
                  </div>
                </div>
              </div>
              
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-4 px-6 rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg">
                Search Holidays
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Destinations Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">Premium Selection</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4 mb-6">Featured Destinations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Handpicked luxury experiences in the world's most breathtaking locations</p>
          </div>
              {/* Region Filter Buttons */}
    <div className="flex justify-center mb-12 space-x-4 flex-wrap">
      <button
        onClick={() => setActiveRegion('all')}
        className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 mb-2 ${
          activeRegion === 'all' 
            ? 'bg-cyan-500 text-white shadow-lg' 
            : 'bg-gray-100 text-gray-700 hover:bg-cyan-100'
        }`}
      >
        All Destinations
      </button>
      <button
        onClick={() => setActiveRegion('kashmir')}
        className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 mb-2 ${
          activeRegion === 'kashmir' 
            ? 'bg-cyan-500 text-white shadow-lg' 
            : 'bg-gray-100 text-gray-700 hover:bg-cyan-100'
        }`}
      >
        Kashmir
      </button>
      <button
        onClick={() => setActiveRegion('india')}
        className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 mb-2 ${
          activeRegion === 'india' 
            ? 'bg-cyan-500 text-white shadow-lg' 
            : 'bg-gray-100 text-gray-700 hover:bg-cyan-100'
        }`}
      >
        India
      </button>
      <button
        onClick={() => setActiveRegion('international')}
        className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 mb-2 ${
          activeRegion === 'international' 
            ? 'bg-cyan-500 text-white shadow-lg' 
            : 'bg-gray-100 text-gray-700 hover:bg-cyan-100'
        }`}
      >
        International
      </button>
    </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {formattedDestinations.map((destination) => (
              <div key={destination.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2 border border-gray-100">
                {/* Real Image */}
                <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: `url(${destination.image})` }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-cyan-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {destination.tag}
                    </span>
                  </div>
                  
                  {/* Price */}
                  <div className="absolute bottom-4 left-4">
                    <span className="text-2xl font-bold text-white">${destination.price}</span>
                  </div>
                  
                  {/* Rating */}
                  <div className="absolute bottom-4 right-4 flex items-center space-x-1 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full">
                    <span className="text-yellow-400">★</span>
                    <span className="text-white text-sm font-semibold">{destination.rating}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-cyan-600 transition-colors">
                    {destination.name}
                  </h3>
                  <p className="text-gray-600 mb-4 flex items-center">
                    <span className="text-cyan-500 mr-2">⏱</span>
                    {destination.duration}
                  </p>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                    {destination.description}
                  </p>
                  <button 
                    onClick={() => setSelectedPackage(destination)}
                    className="w-full bg-gray-100 text-gray-700 font-semibold py-3 rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300 group-hover:scale-105"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
              Explore All Destinations
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">The Ultimate Travel Experience</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: "🏔️", 
                title: "Kashmir Based Experts", 
                desc: "Local knowledge and 25 years of experience serving travelers from our home in Kashmir" 
              },
              { 
                icon: "🌍", 
                title: "Global Destinations", 
                desc: "From Srinagar to Switzerland, we curate the world's best travel experiences" 
              },
              { 
                icon: "🤝", 
                title: "Personalized Service", 
                desc: "Family-owned business providing personalized attention to every traveler" 
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-8 bg-gray-800 rounded-2xl hover:bg-gray-700 transition-all duration-300 group hover:-translate-y-2">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300 text-lg">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for Your Dream Vacation?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let our 25 years of Kashmiri hospitality craft your perfect travel experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl">
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transform hover:scale-105 transition-all duration-300">
                Call Now: +91-XXXXXXXXXX
              </button>
            </div>
          </div>
        </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-cyan-600 bg-clip-text text-transparent">
                Palm International
              </h1>
              <p className="text-xs text-gray-500 -mt-1">25 Years of Trusted Travel</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Destinations</h4>
              <ul className="space-y-2 text-gray-400">
                {['Europe', 'Asia', 'Caribbean', 'Middle East', 'Africa'].map(item => (
                  <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                {['About', 'Team', 'Careers', 'Contact', 'Blog'].map(item => (
                  <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                {['Help Center', 'Terms', 'Privacy', 'Status'].map(item => (
                  <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Palm International. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Package Modal */}
      <PackageModal />
    </div>
  );
}

export default App;