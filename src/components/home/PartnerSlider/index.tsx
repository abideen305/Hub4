import React from 'react';
import PartnerLogo from './PartnerLogo';
import { partners } from './partnerData';

export default function PartnerSlider() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Partners</h2>
        <div className="relative">
          <div className="flex space-x-12 animate-scroll">
            {[...partners, ...partners].map((partner, index) => (
              <PartnerLogo key={index} {...partner} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}