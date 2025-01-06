import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <div 
      className="relative bg-cover bg-center h-[600px]"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Master Your Future: Join Our 2025 Master Class Series!
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Learn Data Engineering, Animation, Cybersecurity, and Product Design from Industry Experts
          </p>
          <Link
            to="#registration"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Reserve Your Spot
          </Link>
        </div>
      </div>
    </div>
  );
}