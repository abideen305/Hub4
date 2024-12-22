import React, { useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import FormField from './form/FormField';
import SuccessMessage from './form/SuccessMessage';
import { useHistory } from 'react-router-dom';

interface EnrollmentFormProps {
  courseName: string;
  onClose: () => void;
}

export default function EnrollmentForm({ courseName, onClose }: EnrollmentFormProps) {
  const [state, handleSubmit] = useForm("xanygqbd");
  const history = useHistory();

  useEffect(() => {
    if (state.succeeded) {
      setTimeout(() => {
        history.push('/');
      }, 3000);
    }
  }, [state.succeeded, history]);

  if (state.succeeded) {
    return <SuccessMessage onClose={onClose} />;
  }

  return (
    <form action="https://formspree.io/f/xanygqbd" method="POST" onSubmit={handleSubmit} className="space-y-4">
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
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
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
      {state.errors.length > 0 && (
        <div className="text-red-600">
          {state.errors.map((error, index) => (
            <p key={index}>{error.message}</p>
          ))}
        </div>
      )}
    </form>
  );
}