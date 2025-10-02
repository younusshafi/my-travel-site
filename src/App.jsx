import { useState, useEffect } from 'react'
import './App.css'

// Import your data
import packageData from './data/packages.json'

function App() {
  const [activeHero, setActiveHero] = useState(0)
  const { destinations, heroSlides } = packageData

  // Auto-rotate hero
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHero((prev) => (prev + 1) % heroSlides.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [heroSlides.length])

  return (
    <div className="min-h-screen bg-white">
      {/* Header - Same as before */}
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
        {heroSlides.map((slide, index) => (
          <div
            key={index}
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
                ✨ World's Most Luxurious Destinations
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                {heroSlides[activeHero].title}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-cyan-100 max-w-2xl mx-auto leading-relaxed">
              {heroSlides[activeHero].subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-cyan-50 transform hover:scale-105 transition-all duration-300 shadow-2xl">
                {heroSlides[activeHero].cta}
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
                Watch Experience
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {heroSlides.map((_, index) => (
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

      {/* Search Section - Same as before */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinations.map((destination) => (
              <div key={destination.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2 border border-gray-100">
                {/* Real Image */}
                <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: `url(${destination.image})` }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  <div className="absolute top-4 left-4">
                    <span className="bg-cyan-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {destination.tag}
                    </span>
                  </div>
                  
                  <div className="absolute bottom-4 left-4">
                    <span className="text-2xl font-bold text-white">${destination.price}</span>
                  </div>
                  
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
                  <button className="w-full bg-gray-100 text-gray-700 font-semibold py-3 rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300 group-hover:scale-105">
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

      {/* Rest of your sections remain the same */}
      <section className="py-20 bg-gray-900 text-white">
        {/* Features section - same as before */}
      </section>

      <section className="py-20 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
        {/* CTA section - same as before */}
      </section>

      <footer className="bg-gray-800 text-white py-12">
        {/* Footer - same as before */}
      </footer>
    </div>
  )
}

export default App