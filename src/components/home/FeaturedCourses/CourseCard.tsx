import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  color: string;
}

export default function CourseCard({ title, description, image, icon: Icon, color }: CourseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex items-center mb-4">
          <Icon className={`h-6 w-6 ${color} mr-2`} />
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link
          to="/training"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}