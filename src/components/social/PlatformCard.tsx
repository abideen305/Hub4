import React from 'react';
import { LucideIcon } from 'lucide-react';

interface PlatformCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  iconColor: string;
}

export default function PlatformCard({ icon: Icon, title, description, features, iconColor }: PlatformCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="flex items-center mb-6">
        <Icon className={`h-8 w-8 ${iconColor} mr-4`} />
        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="h-6 w-6 text-blue-600 mr-2">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}