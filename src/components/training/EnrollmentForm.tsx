import React from 'react';
import { useForm } from '@formspree/react';
import FormFields from './form/FormFields';
import FormError from './form/FormError';
import FormActions from './form/FormActions';
import SuccessMessage from './form/SuccessMessage';

interface EnrollmentFormProps {
  courseName: string;
  onClose: () => void;
}

export default function EnrollmentForm({ courseName, onClose }: EnrollmentFormProps) {
  const [state, handleSubmit] = useForm("myzzzkgo");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const formData = new FormData(e.currentTarget);
      formData.append('course', courseName);
      
      const formObject = Object.fromEntries(formData.entries());
      await handleSubmit(formObject);
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  if (state.succeeded) {
    return <SuccessMessage onClose={onClose} />;
  }

  return (
    <form 
      onSubmit={onSubmit} 
      className="space-y-4"
      action="https://formspree.io/f/myzzzkgo"
      method="POST"
    >
      {state.errors && state.errors.length > 0 && (
        <FormError errors={state.errors} />
      )}

      <input type="hidden" name="course" value={courseName} />
      <FormFields />
      
      <FormActions 
        onClose={onClose} 
        isSubmitting={state.submitting} 
      />
    </form>
  );
}