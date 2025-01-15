import React, { useState } from 'react';
import { TestTube, Clock, Users, Book } from 'lucide-react';
import EnrollmentForm from '../../components/training/EnrollmentForm';
import CurriculumSection from '../../components/courses/CurriculumSection';
import InstructorSection from '../../components/courses/InstructorSection';
import { courseDetails } from '../../data/courseData';

export default function SoftwareTesting() {
  const [showEnrollForm, setShowEnrollForm] = useState(false);
  const course = courseDetails['software-testing'];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-900 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {course.title}
              </h1>
              <p className="text-xl mb-8">
                {course.description}
              </p>
              <button
                onClick={() => setShowEnrollForm(true)}
                className="bg-white text-green-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-50 transition duration-300"
              >
                Enroll Now
              </button>
            </div>
            <div className="flex justify-center">
              <TestTube className="w-48 h-48 text-green-200" />
            </div>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Clock className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Duration</h3>
              <p>{course.duration}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Users className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Class Size</h3>
              <p>Maximum {course.maxStudents} students</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Book className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Prerequisites</h3>
              <ul className="list-disc list-inside">
                {course.prerequisites.map((prereq, index) => (
                  <li key={index}>{prereq}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Course Curriculum</h2>
          <CurriculumSection curriculum={course.curriculum} />
        </div>
      </section>

      {/* Instructor Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Your Instructor</h2>
          <InstructorSection instructor={course.instructor} />
        </div>
      </section>

      {/* Enrollment Form Modal */}
      {showEnrollForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-6">Enroll in {course.title}</h2>
            <EnrollmentForm 
              courseName={course.title} 
              onClose={() => setShowEnrollForm(false)} 
            />
          </div>
        </div>
      )}
    </div>
  );
}