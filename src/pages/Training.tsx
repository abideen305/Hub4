import React from 'react';
import PageHeader from '../components/PageHeader';
import CourseCard from '../components/training/CourseCard';
import { Code, DollarSign, Heart } from 'lucide-react';

const trainingCategories = [
  {
    id: 'it',
    title: 'IT Training',
    icon: Code,
    description: 'Master the latest technologies and digital skills',
    courses: [
      {
        title: 'Agile Delivery',
        description: 'Learn agile methodologies and project management',
        pricing: { physical: 150000, hybrid: 120000, virtual: 100000 }
      },
      {
        title: 'Data Engineering',
        description: 'Master data warehousing, ETL processes, and big data technologies',
        pricing: { physical: 150000, hybrid: 120000, virtual: 100000 }
      },
      {
        title: 'Software Testing',
        description: 'Learn comprehensive testing methodologies and tools',
        pricing: { physical: 150000, hybrid: 120000, virtual: 100000 }
      },
      {
        title: 'Cyber Security',
        description: 'Master security principles and ethical hacking',
        pricing: { physical: 180000, hybrid: 150000, virtual: 120000 }
      },
      {
        title: 'Animation',
        description: 'Create stunning animations and visual effects',
        pricing: { physical: 150000, hybrid: 120000, virtual: 100000 }
      },
      {
        title: 'Product Design',
        description: 'Learn UI/UX design principles and tools',
        pricing: { physical: 150000, hybrid: 120000, virtual: 100000 }
      }
    ]
  },
  {
    id: 'financial',
    title: 'Financial Management',
    icon: DollarSign,
    description: 'Build a strong foundation in personal and business finance',
    courses: [
      {
        title: 'Personal Budgeting',
        description: 'Master personal finance and budgeting strategies',
        pricing: { physical: 100000, hybrid: 80000, virtual: 60000 }
      },
      {
        title: 'Investment Strategies',
        description: 'Learn proven investment techniques for long-term growth',
        pricing: { physical: 120000, hybrid: 100000, virtual: 80000 }
      },
      {
        title: 'Retirement Planning',
        description: 'Plan for a secure financial future',
        pricing: { physical: 120000, hybrid: 100000, virtual: 80000 }
      },
      {
        title: 'Tax Management',
        description: 'Understand tax strategies and compliance',
        pricing: { physical: 120000, hybrid: 100000, virtual: 80000 }
      }
    ]
  },
  {
    id: 'emotional',
    title: 'Emotional Intelligence',
    icon: Heart,
    description: 'Develop essential soft skills for personal and professional growth',
    courses: [
      {
        title: 'Self-Awareness',
        description: 'Understand and manage your emotions effectively',
        pricing: { physical: 100000, hybrid: 80000, virtual: 60000 }
      },
      {
        title: 'Relationship Management',
        description: 'Build and maintain strong professional relationships',
        pricing: { physical: 100000, hybrid: 80000, virtual: 60000 }
      },
      {
        title: 'Leadership Development',
        description: 'Develop essential leadership skills and qualities',
        pricing: { physical: 120000, hybrid: 100000, virtual: 80000 }
      },
      {
        title: 'Conflict Resolution',
        description: 'Master techniques for managing and resolving conflicts',
        pricing: { physical: 100000, hybrid: 80000, virtual: 60000 }
      }
    ]
  }
];

export default function Training() {
  return (
    <div className="pt-16">
      <PageHeader
        title="Training Programs"
        description="Comprehensive training solutions for IT, Financial Management, and Emotional Intelligence"
        backgroundImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      />

      {trainingCategories.map((category, index) => (
        <section key={category.id} className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <category.icon className="h-8 w-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
              </div>
              <p className="text-xl text-gray-600">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.courses.map((course, courseIndex) => (
                <CourseCard
                  key={courseIndex}
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