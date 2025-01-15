import React from 'react';
import { Clock } from 'lucide-react';

interface CurriculumModule {
  title: string;
  duration: string;
  topics: string[];
}

interface CurriculumSectionProps {
  curriculum: CurriculumModule[];
}

export default function CurriculumSection({ curriculum }: CurriculumSectionProps) {
  return (
    <div className="space-y-8">
      {curriculum.map((module, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">{module.title}</h3>
            <div className="flex items-center text-gray-600">
              <Clock className="w-5 h-5 mr-2" />
              {module.duration}
            </div>
          </div>
          <ul className="space-y-2">
            {module.topics.map((topic, topicIndex) => (
              <li key={topicIndex} className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                {topic}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}