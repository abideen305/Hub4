import React, { useState } from 'react';
import FormField from '../common/FormField';
import { useForm } from '@formspree/react';

interface CourseSchedule {
  dates: string[];
  sessions: {
    [key: string]: string[];
  };
}

export default function RegistrationSection() {
  const [state, handleSubmit] = useForm("myzzzkgo");
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  if (state.succeeded) {
    return (
      <div className="text-center p-6">
        <div className="mb-4">
          <svg className="mx-auto h-12 w-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-green-600 mb-4">
          Registration Successful!
        </h3>
        <p className="text-gray-600">
          Thank you for registering. We'll contact you shortly with more details.
        </p>
      </div>
    );
  }

  return (
    <section className="py-20 bg-gray-50" id="registration">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Register for Master Class</h2>
          <p className="text-xl text-gray-600">
            Secure your spot in our upcoming master classes
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <FormField
              label="Full Name"
              name="name"
              required
            />

            <FormField
              label="Email"
              name="email"
              type="email"
              required
            />

            <FormField
              label="Phone Number"
              name="phone"
              type="tel"
              required
            />

            <FormField
              label="Course"
              name="course"
              as="select"
              required
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
            >
              <option value="">Select a course</option>
              <option value="data-engineering">Data Engineering</option>
              <option value="cybersecurity">Cybersecurity</option>
              <option value="animation">Animation</option>
              <option value="product-design">Product Design</option>
              <option value="software-testing">Software Testing</option>
            </FormField>

            <FormField
              label="Preferred Mode"
              name="mode"
              as="select"
              required
            >
              <option value="">Select mode</option>
              <option value="physical">Physical</option>
              <option value="virtual">Virtual</option>
            </FormField>

            <FormField
              label="Additional Information"
              name="message"
              as="textarea"
              rows={4}
            />

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 disabled:opacity-50"
            >
              {state.submitting ? 'Registering...' : 'Register Now'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}