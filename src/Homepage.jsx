import { useState, useEffect } from 'react';

const Homepage = () => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isHolidaysDropdownOpen, setIsHolidaysDropdownOpen] = useState(false);
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);

  // Enhanced dummy data with more compelling content
  const featuredPackages = [
    {
      id: 1,
      destination: "Santorini, Greece",
      price: 1299,
      duration: "7 Days",
      highlight: "Luxury Cliffside Resort",
      image: "santorini",
      badge: "Most Popular",
      rating: 4.9
    },
    {
      id: 2,
      destination: "Bali, Indonesia",
      price: 899,
      duration: "10 Days",
      highlight: "Private Villa Experience",
      image: "bali",
      badge: "Best Value",
      rating: 4.7
    },
    {
      id: 3,
      destination: "Kyoto, Japan",
      price: 1899,
      duration: "8 Days",
      highlight: "Cultural Immersion Tour",
      image: "kyoto",
      badge: "Cultural",
      rating: 4.8
    },
    {
      id: 4,
      destination: "Maldives",
      price: 2199,
      duration: "6 Days",
      highlight: "Overwater Bungalow",
      image: "maldives",
      badge: "Luxury",
      rating: 4.9
    },
    {
      id: 5,
      destination: "Swiss Alps",
      price: 1599,
      duration: "5 Days",
      highlight: "Mountain Retreat",
      image: "swiss-alps",
      badge: "Adventure",
      rating: 4.6
    },
    {
      id: 6,
      destination: "Dubai, UAE",
      price: 1499,
      duration: "4 Days",
      highlight: "Desert Luxury Escape",
      image: "dubai",
      badge: "Luxury",
      rating: 4.7
    }
  ];

  const testimonials = [
    {
      quote: "The attention to detail in our holiday package was exceptional. Every moment felt curated just for us. The private villa in Bali was beyond our wildest dreams!",
      name: "Sarah Johnson",
      rating: 5,
      location: "New York",
      avatar: "SJ",
      trip: "Bali Luxury Escape"
    },
    {
      quote: "From booking to return, everything was seamless. The premium experience was worth every penny. Our Santorini sunset dinner was magical!",
      name: "Michael Chen",
      rating: 5,
      location: "London",
      avatar: "MC",
      trip: "Santorini Dreams"
    },
    {
      quote: "Our family holiday exceeded all expectations. The resort selection and activities were perfect for both kids and adults. We'll cherish these memories forever.",
      name: "The Rodriguez Family",
      rating: 4,
      location: "Miami",
      avatar: "RF",
      trip: "Maldives Family Adventure"
    }
  ];

  const heroSlides = [
    {
      title: "Luxury Redefined",
      subtitle: "Experience Santorini's breathtaking sunsets from your private cliffside villa",
      cta: "Explore Greek Islands",
      image: "santorini-hero"
    },
    {
      title: "Tropical Paradise",
      subtitle: "Discover Bali's hidden gems and pristine beaches in ultimate luxury",
      cta: "Discover Bali",
      image: "bali-hero"
    },
    {
      title: "Cultural Wonders",
      subtitle: "Immerse yourself in Japan's ancient traditions and modern marvels",
      cta: "Experience Japan",
      image: "kyoto-hero"
    }
  ];

  // Auto-rotate hero slides
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Enhanced Header with glass morphism
  const Header = () => (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-white/20">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#2a9d8f] to-[#264653] rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
              ✈
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#264653] to-[#2a9d8f] bg-clip-text text-transparent">TravelEase</span>
              <p className="text-xs text-gray-500 -mt-1">Premium Journeys</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            {['Home', 'Holidays', 'Flights', 'Hotels', 'Contact'].map((item) => (
              <div key={item} className="relative group">
                <button className="text-[#264653] hover:text-[#2a9d8f] font-medium transition-all duration-300 group-hover:scale-105 flex items-center">
                  {item}
                  {item === 'Holidays' && (
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
                
                {item === 'Holidays' && (
                  <div className="absolute left-0 mt-2 w-64 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="grid grid-cols-2 gap-1 px-3">
                      <div className="p-3 rounded-lg hover:bg-[#2a9d8f]/10 transition-colors">
                        <div className="font-semibold text-[#264653] mb-1">Europe</div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <div className="hover:text-[#2a9d8f] cursor-pointer">Greece</div>
                          <div className="hover:text-[#2a9d8f] cursor-pointer">Italy</div>
                          <div className="hover:text-[#2a9d8f] cursor-pointer">Spain</div>
                        </div>
                      </div>
                      <div className="p-3 rounded-lg hover:bg-[#2a9d8f]/10 transition-colors">
                        <div className="font-semibold text-[#264653] mb-1">Asia</div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <div className="hover:text-[#2a9d8f] cursor-pointer">Japan</div>
                          <div className="hover:text-[#2a9d8f] cursor-pointer">Bali</div>
                          <div className="hover:text-[#2a9d8f] cursor-pointer">Thailand</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button className="hidden lg:block bg-gradient-to-r from-[#2a9d8f] to-[#23857a] text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
            Plan Your Trip
          </button>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 rounded-lg bg-gray-100">
            <svg className="w-6 h-6 text-[#264653]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );

  // Enhanced Hero with animated background
  const HeroBanner = () => (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2a9d8f] via-[#23857a] to-[#264653]">
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Animated shapes */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#e76f51]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <div className="mb-6">
          <span className="bg-white/20 backdrop-blur-sm text-white/90 px-4 py-2 rounded-full text-sm font-medium">
            ✨ Premium Curated Travel Experiences
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Curated Journeys,
          </span>
          <br />
          <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            Unforgettable Moments
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
          Discover handpicked luxury experiences in the world's most breathtaking destinations, tailored exclusively for you.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <button className="bg-white text-[#264653] font-semibold py-4 px-8 rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
            <span className="flex items-center justify-center">
              Explore Luxury Holidays
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
          <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 group">
            <span className="flex items-center justify-center">
              Watch Story
              <svg className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              </svg>
            </span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          {[
            { number: '50K+', label: 'Happy Travelers' },
            { number: '120+', label: 'Destinations' },
            { number: '98%', label: 'Satisfaction Rate' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">{stat.number}</div>
              <div className="text-white/70 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );

  // Enhanced Search with glass morphism
  const SearchSection = () => (
    <section className="relative -mt-20 z-20 px-4">
      <div className="container mx-auto">
        {/* Desktop Search */}
        <div className="hidden lg:block bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8">
          <div className="grid grid-cols-5 gap-6 items-end">
            <div>
              <label className="block text-sm font-semibold text-[#264653] mb-3">Destination</label>
              <div className="relative">
                <svg className="w-5 h-5 absolute left-3 top-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input 
                  type="text" 
                  placeholder="Where to?" 
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2a9d8f] focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-[#264653] mb-3">Dates</label>
              <div className="relative">
                <svg className="w-5 h-5 absolute left-3 top-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <input 
                  type="text" 
                  placeholder="Select dates" 
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2a9d8f] focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-[#264653] mb-3">Budget</label>
              <div className="space-y-2">
                <input 
                  type="range" 
                  min="0" 
                  max="10000" 
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#2a9d8f]"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>$0</span>
                  <span>$5,000</span>
                  <span>$10,000</span>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-[#264653] mb-3">Travelers</label>
              <select className="w-full py-3 px-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2a9d8f] focus:border-transparent transition-all duration-300">
                {[1,2,3,4,5,6,7,8].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Traveler' : 'Travelers'}</option>
                ))}
              </select>
            </div>
            
            <button className="bg-gradient-to-r from-[#e76f51] to-[#d45a3d] text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 transform">
              Search Holidays
            </button>
          </div>
        </div>

        {/* Mobile Search Button */}
        <div className="lg:hidden fixed bottom-6 right-6 z-40">
          <button 
            onClick={() => setIsSearchModalOpen(true)}
            className="bg-gradient-to-r from-[#e76f51] to-[#d45a3d] text-white font-semibold py-4 px-6 rounded-full shadow-2xl flex items-center space-x-2 hover:scale-105 transition-transform duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span>Search</span>
          </button>
        </div>
      </div>
    </section>
  );

  // Enhanced Package Cards with hover effects
  const FeaturedPackages = () => (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="bg-gradient-to-r from-[#2a9d8f] to-[#e76f51] bg-clip-text text-transparent text-sm font-semibold uppercase tracking-wider">
            Premium Selection
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#264653] mt-4 mb-6">
            Featured Holiday Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Handpicked luxury experiences crafted by our travel experts for unforgettable journeys that create lifelong memories.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPackages.map(pkg => (
            <div key={pkg.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2">
              {/* Image with overlay */}
              <div className="relative h-64 bg-gradient-to-br from-[#2a9d8f] to-[#264653] overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-[#e76f51] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {pkg.badge}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex justify-between items-center text-white">
                    <div className="flex items-center space-x-1">
                      <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                      <span className="text-sm font-semibold">{pkg.rating}</span>
                    </div>
                    <div className="text-2xl font-bold">${pkg.price}</div>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#264653] mb-2 group-hover:text-[#2a9d8f] transition-colors duration-300">
                  {pkg.destination}
                </h3>
                <p className="text-gray-600 mb-4 flex items-center">
                  <svg className="w-4 h-4 mr-2 text-[#2a9d8f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {pkg.duration} • {pkg.highlight}
                </p>
                <button className="w-full bg-gradient-to-r from-[#2a9d8f] to-[#23857a] text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 group-hover:scale-105 transform">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-transparent border-2 border-[#2a9d8f] text-[#2a9d8f] hover:bg-[#2a9d8f] hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 transform group">
            <span className="flex items-center justify-center">
              View All 120+ Packages
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );

  // Enhanced Testimonials with cards
  const Testimonials = () => (
    <section className="py-20 bg-gradient-to-br from-[#264653] to-[#2a9d8f] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#e76f51]/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-white/80 text-sm font-semibold uppercase tracking-wider">
            Traveler Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            What Our Travelers Say
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our community of luxury travelers
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-white/30'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              
              <p className="text-white/90 text-lg leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#2a9d8f] to-[#e76f51] rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-white/70 text-sm">{testimonial.location}</div>
                  <div className="text-[#e76f51] text-sm font-medium">{testimonial.trip}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Enhanced Footer
  const Footer = () => (
    <footer className="bg-gradient-to-br from-[#1a2e3a] to-[#264653] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#2a9d8f] to-[#e76f51] rounded-lg flex items-center justify-center text-white font-bold text-xl">
                ✈
              </div>
              <span className="text-2xl font-bold">TravelEase</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Crafting exceptional luxury travel experiences that create lifelong memories and unforgettable adventures.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
                <div key={social} className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#2a9d8f] transition-colors duration-300 cursor-pointer">
                  <span className="text-lg">📱</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Destinations</h3>
            <ul className="space-y-3 text-gray-300">
              {['Europe', 'Asia', 'Middle East', 'Africa', 'North America', 'South America'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#2a9d8f] transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-[#2a9d8f] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3 text-gray-300">
              {['About Us', 'Our Team', 'Careers', 'Press', 'Sustainability', 'Blog'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#2a9d8f] transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-[#2a9d8f] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3 text-gray-300">
              {['Contact Us', 'FAQ', 'Booking Conditions', 'Privacy Policy', 'Terms of Service', 'Travel Insurance'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#2a9d8f] transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-[#2a9d8f] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-gray-400">
          <p>© 2024 TravelEase Premium Journeys. All rights reserved. | Crafted with ❤️ for extraordinary travelers</p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="font-['Open_Sans'] text-[#264653]">
      <Header />
      <HeroBanner />
      <SearchSection />
      <FeaturedPackages />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Homepage;