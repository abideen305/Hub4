import React, { useEffect } from 'react';

interface BookingSuccessProps {
  onClose: () => void;
}

export default function BookingSuccess({ onClose }: BookingSuccessProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
      window.scrollTo(0, 0);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="text-center p-6">
      <div className="mb-4">
        <svg className="mx-auto h-12 w-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-green-600 mb-4">
        Booking Request Received!
      </h3>
      <p className="text-gray-600">
        Thank you for your booking request. We'll get back to you shortly to confirm your reservation.
      </p>
    </div>
  );
}