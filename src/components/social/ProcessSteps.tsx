import React from 'react';

const steps = [
  {
    number: "1",
    title: "Analysis",
    description: "Evaluate your current social media presence and goals"
  },
  {
    number: "2",
    title: "Strategy",
    description: "Develop a customized plan for your brand"
  },
  {
    number: "3",
    title: "Implementation",
    description: "Execute the strategy across platforms"
  },
  {
    number: "4",
    title: "Optimization",
    description: "Monitor, analyze, and improve performance"
  }
];

export default function ProcessSteps() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {steps.map((step, index) => (
        <div key={index} className="text-center">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-blue-600">{step.number}</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
          <p className="text-gray-600">{step.description}</p>
        </div>
      ))}
    </div>
  );
}