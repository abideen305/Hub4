import React, { useState } from 'react';
import { useForm } from '@formspree/react';
import FormField from '../common/FormField';
import PlatformSelect from './PlatformSelect';

interface ContactFormProps {
  onClose: () => void;
}

export default function ContactForm({ onClose }: ContactFormProps) {
  const [state, handleSubmit] = useForm("meoooejw");
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedPlatforms.length === 0) {
      alert('Please select at least one platform');
      return;
    }

    const formData = new FormData(e.currentTarget);
    formData.set('platforms', selectedPlatforms.join(', '));
    
    const formObject = Object.fromEntries(formData.entries());
    handleSubmit(formObject);
  };

  if (state.succeeded) {
    setTimeout(() => {
      onClose();
      window.scrollTo(0, 0);
    }, 2000);
    
    return (
      <div className="text-center p-6">
        <div className="mb-4">
          <svg className="mx-auto h-12 w-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-green-600 mb-4">
          Message Sent Successfully!
        </h3>
        <p className="text-gray-600">
          Thank you for your interest. We'll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form 
      onSubmit={handleFormSubmit}
      className="space-y-4"
      action="https://formspree.io/f/meoooejw"
      method="POST"
    >
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
      
      <FormField
        label="Phone Number"
        name="phone"
        type="tel"
        required
      />

      <FormField
        label="Business Name"
        name="business"
        required
      />

      <PlatformSelect
        selectedPlatforms={selectedPlatforms}
        onChange={setSelectedPlatforms}
      />

      <FormField
        label="Message"
        name="message"
        as="textarea"
        rows={4}
        required
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
          {state.submitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  );
}