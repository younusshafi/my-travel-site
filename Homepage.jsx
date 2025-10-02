import React from "react";

export default function Homepage() {
  // ------------------------
  // Dummy Data
  // ------------------------
  const featuredPackages = [
    { id: 1, destination: "Bali, Indonesia", price: "$1,299", duration: "7 Days", highlight: "All-Inclusive Resort" },
    { id: 2, destination: "Paris, France", price: "$2,199", duration: "5 Days", highlight: "Romantic Getaway" },
    { id: 3, destination: "Tokyo, Japan", price: "$1,899", duration: "6 Days", highlight: "Cultural Exploration" },
    { id: 4, destination: "Maldives", price: "$3,299", duration: "5 Days", highlight: "Overwater Villa" },
    { id: 5, destination: "New York, USA", price: "$1,599", duration: "4 Days", highlight: "City Highlights" },
    { id: 6, destination: "Cape Town, South Africa", price: "$1,499", duration: "6 Days", highlight: "Adventure & Safari" },
  ];

  const testimonials = [
    { quote: "The trip exceeded all expectations! Everything was seamless.", name: "Sarah J.", rating: 5 },
    { quote: "Excellent service and curated packages. Highly recommended.", name: "Mohammed A.", rating: 4 },
    { quote: "Unforgettable memories for our family. Thank you!", name: "Emily R.", rating: 5 },
  ];

  // ------------------------
  // Sub-Components
  // ------------------------

  const Header = () => (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="font-bold text-xl text-[#264653]">TravelCo</div>
        <ul className="hidden md:flex space-x-6 text-[#264653]">
          <li><a href="#">Home</a></li>
          <li className="relative group">
            <a href="#">Holidays</a>
            <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg opacity-0 group-hover:opacity-100 transition">
              <li className="border-b"><a href="#" className="block px-4 py-2">Europe</a></li>
              <li className="border-b"><a href="#" className="block px-4 py-2">Asia</a></li>
              <li><a href="#" className="block px-4 py-2">Americas</a></li>
            </ul>
          </li>
          <li><a href="#">Flights</a></li>
          <li><a href="#">Hotels</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );

  const HeroSection = () => (
    <section className="relative bg-gray-200 h-[60vh] flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 text-white">
        <h1 className="text-3xl md:text-5xl font-bold">Curated Journeys, Unforgettable Moments</h1>
        <div className="mt-6 space-x-4">
          <button className="bg-[#2a9d8f] text-white px-6 py-3 rounded-lg shadow hover:bg-[#23867c]">Explore Holidays</button>
          <button className="bg-[#e76f51] text-white px-6 py-3 rounded-lg shadow hover:bg-[#cf5f44]">Book Now</button>
        </div>
      </div>
    </section>
  );

  const SearchBar = () => (
    <section className="container mx-auto px-6 py-8">
      <div className="hidden md:grid grid-cols-4 gap-4 bg-white p-6 rounded-lg shadow">
        <input type="text" placeholder="Destination" className="border rounded p-2" />
        <input type="text" placeholder="Dates" className="border rounded p-2" />
        <input type="range" min="0" max="10000" className="w-full" />
        <select className="border rounded p-2">
          {[...Array(8)].map((_, i) => (
            <option key={i}>{i + 1} Traveler(s)</option>
          ))}
        </select>
      </div>
      <div className="md:hidden text-center">
        <button className="bg-[#2a9d8f] text-white px-6 py-3 rounded-lg shadow">Search Holidays</button>
        {/* Mobile: This button would open a modal with stacked inputs */}
      </div>
    </section>
  );

  const FeaturedPackages = () => (
    <section className="container mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold text-[#264653] mb-6">Featured Holiday Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredPackages.map(pkg => (
          <div key={pkg.id} className="bg-white rounded-lg shadow hover:shadow-lg transition">
            <div className="bg-gray-300 h-40 rounded-t-lg"></div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{pkg.destination}</h3>
              <p className="text-[#2a9d8f] font-bold">{pkg.price}</p>
              <p className="text-sm">{pkg.duration}</p>
              <p className="text-sm text-gray-600">{pkg.highlight}</p>
              <button className="mt-4 bg-[#e76f51] text-white px-4 py-2 rounded hover:bg-[#cf5f44]">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  const Testimonials = () => (
    <section className="bg-[#f8f9fa] py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-[#264653] mb-6">What Our Customers Say</h2>
        <div className="flex space-x-6 overflow-x-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="min-w-[250px] bg-white shadow p-6 rounded-lg">
              <p className="italic">"{t.quote}"</p>
              <div className="mt-4 font-semibold">{t.name}</div>
              <div className="text-yellow-500">
                {"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // ------------------------
  // Main Render
  // ------------------------
  return (
    <div className="font-['Open Sans']">
      <Header />
      <HeroSection />
      <SearchBar />
      <FeaturedPackages />
      <Testimonials />
    </div>
  );
}
