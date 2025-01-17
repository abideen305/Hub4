import React from 'react';
import { Clock, MapPin } from 'lucide-react';

interface ClassCardProps {
  date: string;
  courses: string[];
  time: string;
  mode: 'Physical' | 'Virtual';
  location?: string;
}

export default function ClassCard({ date, courses, time, mode, location }: ClassCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
      <div className="mb-4">
        <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
          mode === 'Physical' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
        }`}>
          {mode}
        </span>
      </div>
      <h3 className="text-xl font-semibold mb-2">{date}</h3>
      <div className="space-y-2 mb-4">
        {courses.map((course, index) => (
          <p key={index} className="text-gray-700">{course}</p>
        ))}
      </div>
      <div className="flex items-center text-gray-600 mb-2">
        <Clock className="h-5 w-5 mr-2" />
        <span>{time}</span>
      </div>
      {location && (
        <div className="flex items-center text-gray-600">
          <MapPin className="h-5 w-5 mr-2" />
          <span>{location}</span>
        </div>
      )}
    </div>
  );
}