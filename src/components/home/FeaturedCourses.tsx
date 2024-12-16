import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, DollarSign, Heart } from 'lucide-react';

const featuredCourses = [
  {
    icon: BookOpen,
    title: 'Cyber Security',
    description:
      'Master security principles and ethical hacking with hands-on practice.',
    image:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    color: 'text-blue-600',
  },
  {
    icon: DollarSign,
    title: 'Investment Strategies',
    description:
      'Learn proven investment techniques for long-term financial growth.',
    image:
      'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    color: 'text-green-600',
  },
  {
    icon: Heart,
    title: 'Leadership Development',
    description:
      'Develop essential leadership skills and emotional intelligence.',
    image:
      'https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    color: 'text-red-600',
  },
];

export default function FeaturedCourses() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Courses</h2>
          <p className="text-xl text-gray-600">
            Popular training programs to kickstart your journey
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCourses.map((course, index) => {
            const Icon = course.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Icon className={`h-6 w-6 ${course.color} mr-2`} />
                    <h3 className="text-xl font-semibold">{course.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <Link
                    to="/training"
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
