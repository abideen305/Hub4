import { useState } from 'react';
import { submitFormToFormspree } from '../services/api';

interface FormSubmissionState {
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
}

export function useFormSubmission(formspreeId: string) {
  const [state, setState] = useState<FormSubmissionState>({
    isSubmitting: false,
    isSuccess: false,
    error: null
  });

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState({ isSubmitting: true, isSuccess: false, error: null });

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      await submitFormToFormspree(formData, formspreeId);
      setState({ isSubmitting: false, isSuccess: true, error: null });
    } catch (error) {
      setState({
        isSubmitting: false,
        isSuccess: false,
        error: error instanceof Error ? error.message : 'Form submission failed'
      });
    }
  };

  return { ...state, submitForm };
}