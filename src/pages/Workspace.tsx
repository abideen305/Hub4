import React from 'react';
import PageHeader from '../components/PageHeader';
import BookingForm from '../components/BookingForm';
import { Building2, Users, Coffee, Wifi, Monitor, Clock } from 'lucide-react';

export default function Workspace() {
  return (
    <div className="pt-16">
      <PageHeader
        title="Workspace Solutions"
        description="Modern facilities for meetings, training, and collaborative work"
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      />

      {/* Spaces Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Available Spaces</h2>
            <p className="text-xl text-gray-600">Choose the perfect space for your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1577412647305-991150c7d163?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Meeting Room"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Meeting Rooms</h3>
                <p className="text-gray-600 mb-4">Professional spaces for team meetings, client presentations, and interviews.</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Users className="h-5 w-5 text-blue-600 mr-2" />
                    <span>Capacity: 4-12 people</span>
                  </li>
                  <li className="flex items-center">
                    <Monitor className="h-5 w-5 text-blue-600 mr-2" />
                    <span>Presentation equipment</span>
                  </li>
                  <li className="flex items-center">
                    <Clock className="h-5 w-5 text-blue-600 mr-2" />
                    <span>Hourly booking available</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Collaborative Workspace"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Collaborative Workspace</h3>
                <p className="text-gray-600 mb-4">Open-plan areas perfect for team collaboration and creative work.</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Users className="h-5 w-5 text-blue-600 mr-2" />
                    <span>Flexible seating</span>
                  </li>
                  <li className="flex items-center">
                    <Coffee className="h-5 w-5 text-blue-600 mr-2" />
                    <span>Break-out areas</span>
                  </li>
                  <li className="flex items-center">
                    <Wifi className="h-5 w-5 text-blue-600 mr-2" />
                    <span>High-speed internet</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Training Room"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Training Rooms</h3>
                <p className="text-gray-600 mb-4">Spacious rooms equipped for workshops, seminars, and training sessions.</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Users className="h-5 w-5 text-blue-600 mr-2" />
                    <span>Capacity: up to 30 people</span>
                  </li>
                  <li className="flex items-center">
                    <Monitor className="h-5 w-5 text-blue-600 mr-2" />
                    <span>AV equipment included</span>
                  </li>
                  <li className="flex items-center">
                    <Building2 className="h-5 w-5 text-blue-600 mr-2" />
                    <span>Configurable layout</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Included Amenities</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wifi className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold">High-Speed WiFi</h3>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold">Refreshments</h3>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold">AV Equipment</h3>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold">24/7 Access</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Book Your Space</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <BookingForm />
          </div>
        </div>
      </section>
    </div>
  );
}