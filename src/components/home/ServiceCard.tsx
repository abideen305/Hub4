import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
}

export default function ServiceCard({ icon: Icon, title, description, link }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105">
      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        to={link}
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
      >
        Learn More
      </Link>
    </div>
  );
}