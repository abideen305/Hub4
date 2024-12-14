import React from 'react';
import { Building2, Users, Coffee, Wifi, Monitor, Clock } from 'lucide-react';

const spaces = [
  {
    title: "Meeting Rooms",
    description: "Professional spaces for team meetings, client presentations, and interviews.",
    image: "https://images.unsplash.com/photo-1577412647305-991150c7d163?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    features: [
      { icon: Users, text: "Capacity: 4-12 people" },
      { icon: Monitor, text: "Presentation equipment" },
      { icon: Clock, text: "Hourly booking available" }
    ]
  },
  {
    title: "Collaborative Workspace",
    description: "Open-plan areas perfect for team collaboration and creative work.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    features: [
      { icon: Users, text: "Flexible seating" },
      { icon: Coffee, text: "Break-out areas" },
      { icon: Wifi, text: "High-speed internet" }
    ]
  },
  {
    title: "Training Rooms",
    description: "Spacious rooms equipped for workshops, seminars, and training sessions.",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    features: [
      { icon: Users, text: "Capacity: up to 30 people" },
      { icon: Monitor, text: "AV equipment included" },
      { icon: Building2, text: "Configurable layout" }
    ]
  }
];

export default function SpaceOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {spaces.map((space, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={space.image}
            alt={space.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{space.title}</h3>
            <p className="text-gray-600 mb-4">{space.description}</p>
            <ul className="space-y-2">
              {space.features.map((feature, featureIndex) => {
                const Icon = feature.icon;
                return (
                  <li key={featureIndex} className="flex items-center">
                    <Icon className="h-5 w-5 text-blue-600 mr-2" />
                    <span>{feature.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}