import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-8">About the Tech Career Test</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">What is the Tech Career Test?</h2>
          <p className="text-gray-600 mb-6">
            Our Tech Career Test is a comprehensive assessment designed to help you discover which technology career path best aligns with your skills, interests, and natural aptitudes. The test evaluates your potential fit for four key tech careers: Data Engineering, Cybersecurity, UI/UX Design, and Animation.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">How It Works</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-600 font-bold mr-4 flex-shrink-0">1</div>
              <div>
                <h3 className="font-semibold mb-2">Take the Test</h3>
                <p className="text-gray-600">Answer questions across five different categories, including interests, skills, problem-solving approach, creativity, and real-world scenarios.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-600 font-bold mr-4 flex-shrink-0">2</div>
              <div>
                <h3 className="font-semibold mb-2">Get Your Results</h3>
                <p className="text-gray-600">Receive instant results showing how well you match with each career path, complete with detailed explanations and recommendations.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-600 font-bold mr-4 flex-shrink-0">3</div>
              <div>
                <h3 className="font-semibold mb-2">Detailed Analysis</h3>
                <p className="text-gray-600">Get a comprehensive breakdown of your results via email, including personalized course recommendations and next steps.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Career Paths We Assess</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-blue-600 mb-2">Data Engineering</h3>
              <p className="text-gray-600">Build and maintain data systems and infrastructure.</p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-600 mb-2">Cybersecurity</h3>
              <p className="text-gray-600">Protect systems and networks from digital threats.</p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-600 mb-2">UI/UX Design</h3>
              <p className="text-gray-600">Create intuitive and beautiful digital experiences.</p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-600 mb-2">Animation</h3>
              <p className="text-gray-600">Bring stories to life through digital animation.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}