import React from 'react';
import { MapPin, Video } from 'lucide-react';
import ClassCard from './ClassCard';
import { masterClasses } from '../../data/masterClassData';

export default function ScheduleSection() {
  const physicalClasses = masterClasses.filter(c => c.mode === 'Physical');
  const virtualClasses = masterClasses.filter(c => c.mode === 'Virtual');

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">2025 Master Class Schedule</h2>

        <div className="space-y-16">
          <div>
            <div className="flex items-center justify-center gap-2 mb-8">
              <MapPin className="h-6 w-6 text-blue-600" />
              <h3 className="text-2xl font-semibold">Physical Classes (In-Person)</h3>
            </div>
            <p className="text-center text-gray-600 mb-8">
              Venue: 2, Afisman, Ikeja Along, Lagos
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {physicalClasses.map((classItem, index) => (
                <ClassCard key={index} {...classItem} />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-center gap-2 mb-8">
              <Video className="h-6 w-6 text-purple-600" />
              <h3 className="text-2xl font-semibold">Virtual Classes (Online)</h3>
            </div>
            <p className="text-center text-gray-600 mb-8">
              Access link will be provided after registration
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {virtualClasses.map((classItem, index) => (
                <ClassCard key={index} {...classItem} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}