import React from 'react';
import FormField from '../../common/FormField';

export default function BookingFormFields() {
  return (
    <>
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
        label="Purpose"
        name="purpose"
        as="select"
        required
      >
        <option value="">Select purpose</option>
        <option value="meeting">Meeting Room</option>
        <option value="workspace">Workspace</option>
        <option value="event">Event Space</option>
        <option value="training">Training Room</option>
      </FormField>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          label="Date"
          name="date"
          type="date"
          required
        />
        <FormField
          label="Time"
          name="time"
          type="time"
          required
        />
      </div>

      <FormField
        label="Additional Information"
        name="message"
        as="textarea"
        rows={4}
      />
    </>
  );
}