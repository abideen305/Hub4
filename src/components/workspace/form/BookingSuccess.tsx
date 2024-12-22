import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface BookingSuccessProps {
  onClose: () => void;
}

export default function BookingSuccess({ onClose }: BookingSuccessProps) {
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
        Booking Request Received!
      </h3>
      <p className="text-gray-600 mb-4">
        Thank you for your booking request. We'll get back to you shortly to confirm your reservation.
      </p>
      <p className="text-sm text-gray-500">
        Redirecting to homepage in 3 seconds...
      </p>
    </div>
  );
}