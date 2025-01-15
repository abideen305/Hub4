import React from 'react';

interface Instructor {
  name: string;
  role: string;
  bio: string;
  image: string;
}

interface InstructorSectionProps {
  instructor: Instructor;
}

export default function InstructorSection({ instructor }: InstructorSectionProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <img
          src={instructor.image}
          alt={instructor.name}
          className="w-48 h-48 rounded-full object-cover"
        />
        <div>
          <h3 className="text-2xl font-semibold mb-2">{instructor.name}</h3>
          <p className="text-blue-600 text-lg mb-4">{instructor.role}</p>
          <p className="text-gray-600">{instructor.bio}</p>
        </div>
      </div>
    </div>
  );
}