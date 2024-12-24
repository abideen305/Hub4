import React from 'react';

interface FormErrorProps {
  errors: Array<{ message: string }>;
}

export default function FormError({ errors }: FormErrorProps) {
  return (
    <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md">
      {errors.map((error, index) => (
        <p key={index}>{error.message}</p>
      ))}
    </div>
  );
}