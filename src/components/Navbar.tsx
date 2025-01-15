import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [showCourses, setShowCourses] = useState(false);
  const navigate = useNavigate();

  const mainNavigation = [
    { name: 'Home', href: '/' },
    { name: 'Training', href: '/training' },
    { name: 'Workspace', href: '/workspace' },
    { name: 'Social Media', href: '/social-media' }
  ];

  const courses = [
    { name: 'Cyber Security', href: '/courses/cyber-security' },
    { name: 'Data Engineering', href: '/courses/data-engineering' },
    { name: 'Product Design', href: '/courses/product-design' },
    { name: 'Animation', href: '/courses/animation' },
    { name: 'Software Testing', href: '/courses/software-testing' }
  ];

  const moreNavigation = [
    { name: 'Careers', href: '/careers' },
    { name: 'Career Test', href: '/start-test' },
    { name: 'Master Class', href: '/masterclass' }
  ];

  const handleCourseClick = (href: string) => {
    navigate(href);
    setShowCourses(false);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="https://i.ibb.co/pJVSvSb/hub4-logo-new.png" 
                alt="Hub4 Logo" 
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {mainNavigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}

            {/* Courses Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowCourses(!showCourses);
                  setShowMore(false);
                }}
                className="flex items-center text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Courses
                <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform ${showCourses ? 'rotate-180' : ''}`} />
              </button>
              {showCourses && (
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1">
                  {courses.map((course) => (
                    <button
                      key={course.name}
                      onClick={() => handleCourseClick(course.href)}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {course.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* More Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowMore(!showMore);
                  setShowCourses(false);
                }}
                className="flex items-center text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                More
                <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform ${showMore ? 'rotate-180' : ''}`} />
              </button>
              {showMore && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  {moreNavigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setShowMore(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {mainNavigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Courses */}
            <div className="space-y-1">
              <div className="px-3 py-2 text-base font-medium text-gray-700">Courses</div>
              {courses.map((course) => (
                <Link
                  key={course.name}
                  to={course.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 pl-6"
                  onClick={() => setIsOpen(false)}
                >
                  {course.name}
                </Link>
              ))}
            </div>

            {/* Mobile More Menu */}
            {moreNavigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}