import { useForm, ValidationError } from '@formspree/react';

export function useEnrollmentForm() {
  const [state, handleSubmit] = useForm("xanygqbd");
  
  return {
    state,
    handleSubmit,
    isSubmitting: state.submitting,
    isSuccess: state.succeeded,
    errors: state.errors
  };
}