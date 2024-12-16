import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users } from 'lucide-react';

export default function BookingSection() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8">Book your training session or workspace today and take the first step towards your goals.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/training"
                className="inline-flex items-center justify-center bg-white text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition duration-300"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Training
              </Link>
              <Link
                to="/workspace"
                className="inline-flex items-center justify-center bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-400 transition duration-300 border-2 border-white"
              >
                <Users className="w-5 h-5 mr-2" />
                Book Workspace
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Booking"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}