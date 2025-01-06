import React from 'react';
import { useForm } from '@formspree/react';
import FormField from '../common/FormField';

export default function RegistrationSection() {
  const [state, handleSubmit] = useForm("meoojwep");

  if (state.succeeded) {
    return (
      <div className="text-center p-8 bg-green-50 rounded-lg">
        <h3 className="text-2xl font-semibold text-green-600 mb-4">Registration Successful!</h3>
        <p className="text-gray-600">Thank you for registering. We'll contact you shortly with more details.</p>
      </div>
    );
  }

  return (
    <section id="registration" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Sign Up Now!</h2>
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
              label="Course Interest"
              name="course"
              as="select"
              required
            >
              <option value="">Select a course</option>
              <option value="data-engineering">Data Engineering</option>
              <option value="animation">Animation</option>
              <option value="cybersecurity">Cybersecurity</option>
              <option value="product-design">Product Design</option>
            </FormField>
            <FormField
              label="Preferred Mode"
              name="mode"
              as="select"
              required
            >
              <option value="">Select mode</option>
              <option value="physical">Physical (In-Person)</option>
              <option value="virtual">Virtual (Online)</option>
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
              {state.submitting ? 'Submitting...' : 'Join the Master Class!'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}