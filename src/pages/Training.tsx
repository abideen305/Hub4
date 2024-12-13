import React from 'react';
import PageHeader from '../components/PageHeader';
import CourseCard from '../components/training/CourseCard';
import { courseCategories } from '../data/courseData';
import { Code, DollarSign, Heart } from 'lucide-react';

export default function Training() {
  return (
    <div className="pt-16">
      <PageHeader
        title="Training Programs"
        description="Comprehensive training solutions for IT, Financial Management, and Emotional Intelligence"
        backgroundImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      />

      {courseCategories.map((category, index) => (
        <section key={category.id} className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center space-x-3 mb-4">
                {category.icon === 'Code' && <Code className="h-8 w-8 text-blue-600" />}
                {category.icon === 'DollarSign' && <DollarSign className="h-8 w-8 text-green-600" />}
                {category.icon === 'Heart' && <Heart className="h-8 w-8 text-red-600" />}
                <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
              </div>
              <p className="text-xl text-gray-600">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.courses.map((course) => (
                <CourseCard
                  key={course.id}
                  title={course.title}
                  description={course.description}
                  pricing={course.pricing}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Learning Options Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-16">
            <h2 className="text-3xl font-bold mb-4">Flexible Learning Options</h2>
            <p className="text-xl">Choose the learning model that works best for you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Physical Learning</h3>
              <p className="text-gray-600">Traditional classroom experience with hands-on training and direct interaction with instructors.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-green-700 mb-3">Hybrid Learning</h3>
              <p className="text-gray-600">Combination of physical and virtual classes for maximum flexibility.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-purple-700 mb-3">Virtual Learning</h3>
              <p className="text-gray-600">100% online learning with live sessions and interactive content.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}