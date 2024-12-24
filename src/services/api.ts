// API service for form submissions
export async function submitFormToFormspree(formData: FormData, endpoint: string) {
  const response = await fetch(`https://formspree.io/f/${endpoint}`, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  });

  if (!response.ok) {
    throw new Error(`Form submission failed: ${response.statusText}`);
  }

  return response.json();
}