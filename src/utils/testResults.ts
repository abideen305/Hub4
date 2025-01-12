interface Results {
  'Data Engineering': number;
  'Cybersecurity': number;
  'UI/UX Design': number;
  'Animation': number;
}

const careerMapping = {
  data: 'Data Engineering',
  security: 'Cybersecurity',
  design: 'UI/UX Design',
  animation: 'Animation'
} as const;

export function calculateResults(answers: Record<string, string>): Results {
  const results: Results = {
    'Data Engineering': 0,
    'Cybersecurity': 0,
    'UI/UX Design': 0,
    'Animation': 0
  };

  // Count occurrences of each answer
  const totalQuestions = Object.keys(answers).length;
  
  Object.values(answers).forEach(answer => {
    const career = careerMapping[answer as keyof typeof careerMapping];
    results[career] += (100 / totalQuestions);
  });

  return results;
}