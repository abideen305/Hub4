import React, { useState } from 'react';
import { useForm } from '@formspree/react';
import FormField from '../common/FormField';
import { AlertCircle } from 'lucide-react';

interface CourseSchedule {
  dates: string[];
  sessions: { [key: string]: string[] };
}

const courseSchedules: { [key: string]: CourseSchedule } = {
  'data-engineering': {
    dates: ['2025-01-18', '2025-01-25'],
    sessions: {
      '2025-01-18': ['Morning (11:00 AM)', 'Afternoon (2:00 PM)'],
      '2025-01-25': ['Morning (11:00 AM)', 'Afternoon (2:00 PM)']
    }
  },
  'cybersecurity': {
    dates: ['2025-01-18', '2025-01-25'],
    sessions: {
      '2025-01-18': ['Morning (11:00 AM)', 'Afternoon (2:00 PM)'],
      '2025-01-25': ['Morning (11:00 AM)', 'Afternoon (2:00 PM)']
    }
  },
  'animation': {
    dates: ['2025-01-19', '2025-01-26'],
    sessions: {
      '2025-01-19': ['Morning (11:00 AM)', 'Afternoon (2:00 PM)'],
      '2025-01-26': ['Morning (11:00 AM)', 'Afternoon (2:00 PM)']
    }
  },
  'product-design': {
    dates: ['2025-01-19', '2025-01-26'],
    sessions: {
      '2025-01-19': ['Morning (11:00 AM)', 'Afternoon (2:00 PM)'],
      '2025-01-26': ['Morning (11:00 AM)', 'Afternoon (2:00 PM)']
    }
  }
};

interface FormData {
  name: string;
  email: string;
  phone: string;
  course: string;
  date: string;
  session: string;
  mode: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function RegistrationSection() {
  const [state, handleSubmit] = useForm("myzzbvoa");
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [availableSessions, setAvailableSessions] = useState<string[]>([]);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    course: '',
    date: '',
    session: '',
    mode: '',
    message: ''
  });

  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^\d{10,}$/.test(formData.phone.replace(/[^\d]/g, ''))) {
      errors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.course) {
      errors.course = 'Please select a course';
    }
    
    if (!formData.date) {
      errors.date = 'Please select a date';
    }
    
    if (!formData.session) {
      errors.session = 'Please select a session';
    }
    
    if (!formData.mode) {
      errors.mode = 'Please select a mode';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleCourseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const course = e.target.value;
    setSelectedCourse(course);
    setSelectedDate('');
    setAvailableSessions([]);
    handleInputChange(e);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const date = e.target.value;
    setSelectedDate(date);
    if (date && selectedCourse) {
      setAvailableSessions(courseSchedules[selectedCourse].sessions[date] || []);
    } else {
      setAvailableSessions([]);
    }
    handleInputChange(e);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Scroll to the first error
      const firstError = document.querySelector('[data-error]');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    await handleSubmit(e);
  };

  if (state.succeeded) {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2000);
    
    return (
      <div className="text-center p-8 bg-green-50 rounded-lg">
        <h3 className="text-2xl font-semibold text-green-600 mb-4">Registration Successful!</h3>
        <p className="text-gray-600">Thank you for registering. We'll contact you shortly with more details.</p>
      </div>
    );
  }

  return (
    <section id="registration" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Sign Up Now!</h2>
        <div className="bg-white rounded-lg shadow-lg p-8">
          {state.errors && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center text-red-600 mb-2">
                <AlertCircle className="w-5 h-5 mr-2" />
                <span className="font-semibold">Please correct the following errors:</span>
              </div>
              <ul className="list-disc list-inside text-red-600">
                {state.errors.map((error, index) => (
                  <li key={index}>{error.message}</li>
                ))}
              </ul>
            </div>
          )}

          <form onSubmit={onSubmit} className="space-y-6">
            <div data-error={formErrors.name}>
              <FormField
                label="Full Name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
              />
              {formErrors.name && (
                <p className="mt-1 text-sm text-red-600">{formErrors.name}</p>
              )}
            </div>

            <div data-error={formErrors.email}>
              <FormField
                label="Email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
              />
              {formErrors.email && (
                <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
              )}
            </div>

            <div data-error={formErrors.phone}>
              <FormField
                label="Phone Number"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleInputChange}
              />
              {formErrors.phone && (
                <p className="mt-1 text-sm text-red-600">{formErrors.phone}</p>
              )}
            </div>

            <div data-error={formErrors.course}>
              <FormField
                label="Course Interest"
                name="course"
                as="select"
                required
                value={formData.course}
                onChange={handleCourseChange}
              >
                <option value="">Select a course</option>
                <option value="data-engineering">Data Engineering</option>
                <option value="cybersecurity">Cybersecurity</option>
                <option value="animation">Animation</option>
                <option value="product-design">Product Design</option>
              </FormField>
              {formErrors.course && (
                <p className="mt-1 text-sm text-red-600">{formErrors.course}</p>
              )}
            </div>

            <div data-error={formErrors.date}>
              <FormField
                label="Preferred Date"
                name="date"
                as="select"
                required
                value={selectedDate}
                onChange={handleDateChange}
                disabled={!selectedCourse}
              >
                <option value="">Select a date</option>
                {selectedCourse && courseSchedules[selectedCourse].dates.map((date) => (
                  <option key={date} value={date}>
                    {new Date(date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </option>
                ))}
              </FormField>
              {formErrors.date && (
                <p className="mt-1 text-sm text-red-600">{formErrors.date}</p>
              )}
            </div>

            <div data-error={formErrors.session}>
              <FormField
                label="Preferred Session"
                name="session"
                as="select"
                required
                value={formData.session}
                onChange={handleInputChange}
                disabled={!selectedDate}
              >
                <option value="">Select a session</option>
                {availableSessions.map((session, index) => (
                  <option key={index} value={session}>
                    {session}
                  </option>
                ))}
              </FormField>
              {formErrors.session && (
                <p className="mt-1 text-sm text-red-600">{formErrors.session}</p>
              )}
            </div>

            <div data-error={formErrors.mode}>
              <FormField
                label="Preferred Mode"
                name="mode"
                as="select"
                required
                value={formData.mode}
                onChange={handleInputChange}
              >
                <option value="">Select mode</option>
                <option value="physical">Physical (In-Person)</option>
                <option value="virtual">Virtual (Online)</option>
              </FormField>
              {formErrors.mode && (
                <p className="mt-1 text-sm text-red-600">{formErrors.mode}</p>
              )}
            </div>

            <FormField
              label="Additional Information"
              name="message"
              as="textarea"
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
            />

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 disabled:opacity-50"
            >
              {state.submitting ? 'Submitting...' : 'Join the Master Class!'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}