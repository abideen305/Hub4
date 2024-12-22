import React from 'react';

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  as?: 'input' | 'select' | 'textarea';
  children?: React.ReactNode;
  rows?: number;
}

export default function FormField({ 
  label, 
  name, 
  type = 'text', 
  required = false,
  as = 'input',
  children,
  rows
}: FormFieldProps) {
  const baseClassName = "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500";
  
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      {as === 'select' ? (
        <select
          name={name}
          id={name}
          required={required}
          className={baseClassName}
        >
          {children}
        </select>
      ) : as === 'textarea' ? (
        <textarea
          name={name}
          id={name}
          rows={rows}
          required={required}
          className={baseClassName}
        />
      ) : (
        <input
          type={type}
          name={name}
          id={name}
          required={required}
          className={baseClassName}
        />
      )}
    </div>
  );
}