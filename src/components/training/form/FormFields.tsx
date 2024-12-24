import React from 'react';
import FormField from '../../common/FormField';

export default function FormFields() {
  return (
    <>
      <FormField
        label="Full Name"
        name="name"
        type="text"
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
        label="Learning Mode"
        name="mode"
        as="select"
        required
      >
        <option value="">Select mode</option>
        <option value="physical">Physical</option>
        <option value="hybrid">Hybrid</option>
        <option value="virtual">Virtual</option>
      </FormField>

      <FormField
        label="Additional Information"
        name="message"
        as="textarea"
        rows={4}
      />
    </>
  );
}