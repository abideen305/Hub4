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
  rows = 3
}: FormFieldProps) {
  const baseClassName = "mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500";
  
  const renderField = () => {
    switch (as) {
      case 'select':
        return (
          <select
            id={name}
            name={name}
            required={required}
            className={baseClassName}
          >
            {children}
          </select>
        );
      case 'textarea':
        return (
          <textarea
            id={name}
            name={name}
            rows={rows}
            required={required}
            className={baseClassName}
          />
        );
      default:
        return (
          <input
            type={type}
            id={name}
            name={name}
            required={required}
            className={baseClassName}
          />
        );
    }
  };

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {renderField()}
    </div>
  );
}