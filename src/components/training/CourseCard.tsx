import React, { useState } from 'react';
import { formatCurrency } from '../../utils/format';
import EnrollmentForm from './EnrollmentForm';

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
  const [showEnrollForm, setShowEnrollForm] = useState(false);

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
      
      <button
        onClick={() => setShowEnrollForm(true)}
        className="mt-6 w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
      >
        Enroll Now
      </button>

      {showEnrollForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-6">Enroll in {title}</h2>
            <EnrollmentForm 
              courseName={title} 
              onClose={() => setShowEnrollForm(false)} 
            />
          </div>
        </div>
      )}
    </div>
  );
}