// Utility function to shuffle array
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

interface Results {
  'Data Engineering': number;
  'Cybersecurity': number;
  'UI/UX Design': number;
  'Animation': number;
  'Software Testing': number;
}

const careerMapping = {
  data: 'Data Engineering',
  security: 'Cybersecurity',
  design: 'UI/UX Design',
  animation: 'Animation',
  testing: 'Software Testing'
} as const;

export function calculateResults(answers: Record<string, string>): Results {
  const results: Results = {
    'Data Engineering': 0,
    'Cybersecurity': 0,
    'UI/UX Design': 0,
    'Animation': 0,
    'Software Testing': 0
  };

  const totalQuestions = Object.keys(answers).length;
  
  Object.values(answers).forEach(answer => {
    const career = careerMapping[answer as keyof typeof careerMapping];
    results[career] += (100 / totalQuestions);
  });

  return results;
}

export { shuffleArray };