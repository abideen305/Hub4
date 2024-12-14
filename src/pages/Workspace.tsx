import React from 'react';
import PageHeader from '../components/PageHeader';
import SpaceOverview from '../components/workspace/SpaceOverview';
import Amenities from '../components/workspace/Amenities';
import BookingForm from '../components/workspace/BookingForm';

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
          <SpaceOverview />
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Included Amenities</h2>
          <Amenities />
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