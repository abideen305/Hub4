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
    <div className="text-center p-6">
      <h3 className="text-xl font-semibold text-green-600 mb-4">
        Thank you for enrolling!
      </h3>
      <p className="text-gray-600 mb-4">
        We'll contact you shortly with next steps.
      </p>
      <p className="text-sm text-gray-500">
        Redirecting to homepage in 3 seconds...
      </p>
    </div>
  );
}