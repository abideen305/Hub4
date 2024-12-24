import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface SuccessMessageProps {
  onClose: () => void;
}

export default function SuccessMessage({ onClose }: SuccessMessageProps) {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
      navigate('/');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate, onClose]);

  return (
    <div className="text-center py-8">
      <div className="mb-4">
        <svg className="mx-auto h-12 w-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-green-600 mb-4">
        Enrollment Successful!
      </h3>
      <p className="text-gray-600 mb-4">
        Thank you for enrolling. We'll contact you shortly with next steps.
      </p>
      <p className="text-sm text-gray-500">
        Redirecting to homepage in 3 seconds...
      </p>
    </div>
  );
}