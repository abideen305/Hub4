import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  purpose: string;
  message: string;
}

const WHATSAPP_NUMBER = '2348179651769';

export default function BookingForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    purpose: '',
    message: ''
  });

  const [step, setStep] = useState(1);

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-NG', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (time: string) => {
    return new Date(`2000/01/01 ${time}`).toLocaleTimeString('en-NG', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
  };

  const getPurposeText = (purpose: string) => {
    const purposes: { [key: string]: string } = {
      meeting: 'Meeting Room',
      workspace: 'Workspace',
      event: 'Event Space',
      training: 'Training Room'
    };
    return purposes[purpose] || purpose;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `*New Workspace Booking Request*%0A
-----------------------------------%0A
*Purpose:* ${getPurposeText(formData.purpose)}%0A
*Date:* ${formatDate(formData.date)}%0A
*Time:* ${formatTime(formData.time)}%0A
%0A*Contact Details*%0A
*Name:* ${formData.name}%0A
*Email:* ${formData.email}%0A
*Phone:* ${formData.phone}%0A
${formData.message ? `%0A*Additional Information:*%0A${formData.message}` : ''}`;

    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Select Purpose</h3>
            <select
              name="purpose"
              id="purpose"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              onChange={handleChange}
              value={formData.purpose}
            >
              <option value="">Select a purpose</option>
              <option value="meeting">Meeting Room</option>
              <option value="workspace">Workspace</option>
              <option value="event">Event Space</option>
              <option value="training">Training Room</option>
            </select>
            <button
              type="button"
              onClick={() => setStep(2)}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
              disabled={!formData.purpose}
            >
              Next
            </button>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Choose Date & Time</h3>
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
              <input
                type="date"
                name="date"
                id="date"
                required
                min={new Date().toISOString().split('T')[0]}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                onChange={handleChange}
                value={formData.date}
              />
            </div>
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
              <input
                type="time"
                name="time"
                id="time"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                onChange={handleChange}
                value={formData.time}
              />
            </div>
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-1/2 bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="w-1/2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                disabled={!formData.date || !formData.time}
              >
                Next
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                onChange={handleChange}
                value={formData.name}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                onChange={handleChange}
                value={formData.email}
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                onChange={handleChange}
                value={formData.phone}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Additional Information</label>
              <textarea
                name="message"
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                onChange={handleChange}
                value={formData.message}
              ></textarea>
            </div>
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-1/2 bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300"
              >
                Back
              </button>
              <button
                type="submit"
                className="w-1/2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                disabled={!formData.name || !formData.email || !formData.phone}
              >
                Submit Booking
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {renderStep()}
    </form>
  );
}