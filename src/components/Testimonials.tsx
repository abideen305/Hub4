import React from 'react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    text: "The IT training at Hub4 transformed my career. The practical approach and expert instructors made learning enjoyable and effective."
  },
  {
    name: "Michael Adebayo",
    role: "Financial Analyst",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    text: "The Financial Management program provided invaluable insights. I now manage my business finances with confidence."
  },
  {
    name: "Linda Chen",
    role: "Team Lead",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    text: "The Emotional Intelligence training has significantly improved my leadership skills and team relationships."
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-blue-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 italic">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}