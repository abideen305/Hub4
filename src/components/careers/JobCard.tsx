import React from 'react';

interface JobCardProps {
  title: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

export default function JobCard({ title, description, requirements, responsibilities }: JobCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-3">Requirements</h4>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          {requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>
      
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-3">Responsibilities</h4>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          {responsibilities.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>
      </div>
      
      <button 
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
        onClick={() => window.location.href = 'mailto:info@hub4.org?subject=Application for ' + title}
      >
        Apply Now
      </button>
    </div>
  );
}