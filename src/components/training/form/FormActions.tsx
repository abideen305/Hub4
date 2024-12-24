import React from 'react';

interface FormActionsProps {
  onClose: () => void;
  isSubmitting: boolean;
}

export default function FormActions({ onClose, isSubmitting }: FormActionsProps) {
  return (
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
        disabled={isSubmitting}
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300 disabled:opacity-50"
      >
        {isSubmitting ? 'Submitting...' : 'Enroll Now'}
      </button>
    </div>
  );
}