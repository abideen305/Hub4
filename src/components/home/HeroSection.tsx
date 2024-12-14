import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <div 
      className="relative bg-cover bg-center h-[600px]"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Empowering Growth Through Learning
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Hub4 is a comprehensive learning and development center in Lagos, providing training programs in{' '}
            <span className="text-orange-400 font-semibold">Financial Management</span>,{' '}
            <span className="text-orange-400 font-semibold">Emotional Intelligence</span>, and{' '}
            <span className="text-orange-400 font-semibold">IT</span>, as well as{' '}
            <span className="text-emerald-400 font-semibold">Social Media Management</span> and{' '}
            <span className="text-emerald-400 font-semibold">Workspace Solutions</span> with modern, rentable spaces.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/training" className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
              View Training Programs
            </Link>
            <Link to="/workspace" className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition duration-300">
              Book a Workspace
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}