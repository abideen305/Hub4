import React from 'react';
import { BookOpen, Globe, Building } from 'lucide-react';
import ServiceCard from './ServiceCard';

export default function FeaturedServices() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Core Services</h2>
          <p className="text-xl text-gray-600">
            Comprehensive solutions for your growth and development needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            icon={BookOpen}
            title="Training Programs"
            description="Comprehensive courses in IT, Financial Management, and Emotional Intelligence for all age groups."
            link="/training"
            color="text-purple-600"
          />
          <ServiceCard
            icon={Globe}
            title="Social Media Management"
            description="Professional social media services to help grow your online presence and engage with your audience."
            link="/social-media"
            color="text-blue-600"
          />
          <ServiceCard
            icon={Building}
            title="Workspace Solutions"
            description="Modern facilities available for rent, perfect for meetings, training sessions, and collaborative work."
            link="/workspace"
            color="text-green-600"
          />
        </div>
      </div>
    </section>
  );
}
