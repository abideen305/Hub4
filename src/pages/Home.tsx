import React from 'react';
import { BookOpen, Globe, Building } from 'lucide-react';
import ServiceCard from '../components/home/ServiceCard';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center h-[600px]"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to Hub4
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              A comprehensive learning and development center in Lagos, providing Training Programs in Financial Management, Emotional Intelligence, and IT, Social Media Management, and Workspace Solutions with modern, rentable spaces.
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Hub4</h2>
              <div className="text-gray-600 text-lg space-y-4">
                <p>
                  At Hub4, we are passionate about empowering individuals of all ages with essential skills across three key areas: Financial Management, Emotional Intelligence, and IT Training. Our comprehensive programs cater to everyone from ages 6 to 60, ensuring that learning knows no bounds.
                </p>
                <p>
                  Beyond training, we provide professional Social Media Management services to help businesses and individuals grow their online presence, engage with their audience, and build a strong digital footprint.
                </p>
                <p>
                  Additionally, Hub4 offers Workspace Solutions—modern, well-equipped facilities available for rent. Whether you need a space for meetings, training sessions, or collaborative work, our workspace is designed to foster productivity and creativity.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={BookOpen}
              title="Training Programs"
              description="Comprehensive courses in IT, Financial Management, and Emotional Intelligence for all age groups."
              link="/training"
            />
            <ServiceCard
              icon={Globe}
              title="Social Media Management"
              description="Professional social media services to help grow your online presence and engage with your audience."
              link="/social-media"
            />
            <ServiceCard
              icon={Building}
              title="Workspace Solutions"
              description="Modern facilities available for rent, perfect for meetings, training sessions, and collaborative work."
              link="/workspace"
            />
          </div>
        </div>
      </section>

      {/* Add Testimonials section before Location section */}
      <Testimonials />
      
      {/* Location Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Visit Us</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3!2d3.3!3d6.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzYnMDAuMCJOIDPCsDE4JzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1600000000000!5m2!1sen!2sng"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}