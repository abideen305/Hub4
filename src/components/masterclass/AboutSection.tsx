import React from 'react';
import { BookOpen, Users, Star, Globe } from 'lucide-react';

const highlights = [
  {
    icon: BookOpen,
    title: "Practical Learning",
    description: "Hands-on training with real-world applications"
  },
  {
    icon: Users,
    title: "Professional Network",
    description: "Access to industry professionals and alumni"
  },
  {
    icon: Star,
    title: "Small Groups",
    description: "Personalized instruction and attention"
  },
  {
    icon: Globe,
    title: "Flexible Learning",
    description: "Available both in-person and online"
  }
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">What You Will Learn</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kickstart your career with hands-on training from seasoned professionals in Data Engineering, 
            Animation, Cybersecurity, and Product Design. Whether you're a beginner or looking to level up, 
            our courses will give you the skills to succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}