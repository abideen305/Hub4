import React from 'react';
import PageHeader from '../components/PageHeader';
import JobCard from '../components/careers/JobCard';
import { jobListings } from '../data/jobListings';

export default function Careers() {
  return (
    <div className="pt-16">
      <PageHeader
        title="Join Our Team"
        description="Build your career with Hub 4 and help shape the future of learning and development"
        backgroundImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      />

      {/* Why Join Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Join Hub 4?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a dynamic team passionate about education, technology, and innovation. We offer a collaborative environment where you can grow professionally while making a real impact in people's lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Growth Opportunities</h3>
              <p className="text-gray-600">Continuous learning and development opportunities to advance your career.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Innovative Environment</h3>
              <p className="text-gray-600">Work with the latest technologies and methodologies in a modern workspace.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Impactful Work</h3>
              <p className="text-gray-600">Make a difference in people's lives through education and skill development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Open Positions</h2>
          <div className="max-w-4xl mx-auto">
            {jobListings.map((job, index) => (
              <JobCard key={index} {...job} />
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Apply", description: "Submit your application through email" },
              { step: "2", title: "Review", description: "We'll review your application within 5 business days" },
              { step: "3", title: "Interview", description: "Selected candidates will be invited for interviews" },
              { step: "4", title: "Offer", description: "Successful candidates will receive an offer letter" }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}