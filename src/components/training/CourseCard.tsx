import React from 'react';
import { formatCurrency } from '../../utils/format';

interface PricingProps {
  physical: number;
  hybrid: number;
  virtual: number;
}

interface CourseCardProps {
  title: string;
  description: string;
  pricing: PricingProps;
}

export default function CourseCard({ title, description, pricing }: CourseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
      <h3 className="text-xl font-semibold text-blue-700 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className="space-y-3">
        <h4 className="font-semibold text-gray-900">Pricing Options:</h4>
        {pricing.physical > 0 && (
          <div className="flex justify-between items-center bg-blue-50 p-2 rounded">
            <span className="text-gray-700">Physical:</span>
            <span className="font-medium text-blue-600">{formatCurrency(pricing.physical)}</span>
          </div>
        )}
        {pricing.hybrid > 0 && (
          <div className="flex justify-between items-center bg-green-50 p-2 rounded">
            <span className="text-gray-700">Hybrid:</span>
            <span className="font-medium text-green-600">{formatCurrency(pricing.hybrid)}</span>
          </div>
        )}
        {pricing.virtual > 0 && (
          <div className="flex justify-between items-center bg-purple-50 p-2 rounded">
            <span className="text-gray-700">Virtual:</span>
            <span className="font-medium text-purple-600">{formatCurrency(pricing.virtual)}</span>
          </div>
        )}
      </div>
      
      <a 
        href={`https://wa.me/2348179651769?text=I'm interested in the ${title} course at Hub4`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 inline-block text-center"
      >
        Enroll Now
      </a>
    </div>
  );
}