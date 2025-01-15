import React from 'react';

const companies = [
  { 
    name: 'Google', 
    logo: 'https://images.unsplash.com/photo-1529612700005-e35377bf1415?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    color: '#4285F4'
  },
  { 
    name: 'Microsoft', 
    logo: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    color: '#00A4EF'
  },
  { 
    name: 'Amazon', 
    logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    color: '#FF9900'
  },
  { 
    name: 'Apple', 
    logo: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    color: '#A2AAAD'
  },
  { 
    name: 'Meta', 
    logo: 'https://images.unsplash.com/photo-1633675254053-d96c7668c3b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    color: '#0668E1'
  }
];

export default function TalentSection() {
  return (
    <section className="py-20 bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">Where Our Talents Have Worked</h2>
          <p className="text-xl text-blue-100">
            Hub4 prepares you to compete at the very top. Our alumni work at leading tech companies worldwide.
          </p>
        </div>
        
        <div className="relative">
          <div className="flex space-x-12 animate-scroll">
            {[...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="relative group flex-shrink-0 w-64 h-64"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg shadow-xl flex flex-col items-center justify-center min-h-[120px] transform hover:scale-105 transition-all duration-300 h-full">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-24 h-24 object-cover rounded-lg mb-4"
                  />
                  <span className="text-2xl font-bold text-white">{company.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}