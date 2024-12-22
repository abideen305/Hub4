import React from 'react';
import { useForm } from '@formspree/react';
import FormField from './form/FormField';
import SuccessMessage from './form/SuccessMessage';

interface EnrollmentFormProps {
  courseName: string;
  onClose: () => void;
}

export default function EnrollmentForm({ courseName, onClose }: EnrollmentFormProps) {
  const [state, handleSubmit] = useForm("xanygqbd");

  if (state.succeeded) {
    return <SuccessMessage onClose={onClose} />;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="hidden" name="course" value={courseName} />
      
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
        label="Learning Mode"
        name="mode"
        as="select"
        required
      >
        <option value="">Select mode</option>
        <option value="physical">Physical</option>
        <option value="hybrid">Hybrid</option>
        <option value="virtual">Virtual</option>
      </FormField>

      <FormField
        label="Additional Information"
        name="message"
        as="textarea"
        rows={4}
      />

      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={onClose}
          className="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition duration-300"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={state.submitting}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300 disabled:opacity-50"
        >
          {state.submitting ? 'Submitting...' : 'Enroll Now'}
        </button>
      </div>
    </form>
  );
}