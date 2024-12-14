import React from 'react';
import { Users, Award, Clock, Laptop } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: "Expert Trainers",
    description: "Learn from industry professionals with years of experience"
  },
  {
    icon: Award,
    title: "Quality Programs",
    description: "Comprehensive curriculum designed for real-world application"
  },
  {
    icon: Clock,
    title: "Flexible Learning",
    description: "Choose from physical, virtual, or hybrid learning options"
  },
  {
    icon: Laptop,
    title: "Modern Facilities",
    description: "State-of-the-art equipment and comfortable learning spaces"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Hub4</h2>
          <p className="text-xl text-gray-600">What sets us apart in delivering excellence</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}