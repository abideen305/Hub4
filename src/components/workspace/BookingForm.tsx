import React from 'react';
import { useForm } from '@formspree/react';
import BookingFormFields from './form/BookingFormFields';
import BookingSuccess from './form/BookingSuccess';

export default function BookingForm() {
  const [state, handleSubmit] = useForm("meoojwep");

  if (state.succeeded) {
    return <BookingSuccess onClose={() => {}} />;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <BookingFormFields />
      
      <button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 disabled:opacity-50"
      >
        {state.submitting ? 'Submitting...' : 'Book Appointment'}
      </button>
    </form>
  );
}