import React from 'react';

export default function AboutSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-blue-600">About Hub4</h2>
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
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Team collaboration"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}