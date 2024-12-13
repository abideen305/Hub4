import React from 'react';
import { Target, MessageCircle, Users, BarChart } from 'lucide-react';

const services = [
  {
    icon: Target,
    title: "Strategy Development",
    description: "Custom social media strategies aligned with your goals"
  },
  {
    icon: MessageCircle,
    title: "Content Creation",
    description: "Engaging content that resonates with your audience"
  },
  {
    icon: Users,
    title: "Community Management",
    description: "Active engagement with your followers and community"
  },
  {
    icon: BarChart,
    title: "Analytics & Reporting",
    description: "Detailed insights and performance tracking"
  }
];

export default function ServiceOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        );
      })}
    </div>
  );
}