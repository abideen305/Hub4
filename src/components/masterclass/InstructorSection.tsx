import React from 'react';
import { instructors } from '../../data/instructorData';

export default function InstructorSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">Meet Your Instructors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{instructor.name}</h3>
                <p className="text-blue-600 mb-4">{instructor.specialty}</p>
                <p className="text-gray-600">{instructor.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}