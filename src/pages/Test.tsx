import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { questions } from '../data/testQuestions';
import { shuffleArray } from '../utils/testResults';

export default function Test() {
  const [currentSection, setCurrentSection] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [shuffledOptions, setShuffledOptions] = useState<any[]>([]);
  const navigate = useNavigate();

  const currentSectionQuestions = questions[currentSection].questions;
  const totalSections = questions.length;
  const totalQuestions = currentSectionQuestions.length;
  const progress = (((currentSection * totalQuestions) + currentQuestion + 1) / (totalSections * totalQuestions)) * 100;

  useEffect(() => {
    // Shuffle options when question changes
    setShuffledOptions(shuffleArray(currentSectionQuestions[currentQuestion].options));
  }, [currentSection, currentQuestion]);

  const handleAnswer = (answer: string) => {
    setAnswers({
      ...answers,
      [`${currentSection}-${currentQuestion}`]: answer
    });
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else if (currentSection < totalSections - 1) {
      setCurrentSection(currentSection + 1);
      setCurrentQuestion(0);
    } else {
      navigate('/results', { state: { answers } });
    }
  };

  // Rest of the component remains the same, but use shuffledOptions instead of currentQuestionData.options
  // ...

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Progress Bar */}
      <div className="fixed top-16 left-0 w-full h-2 bg-gray-200">
        <div 
          className="h-full bg-blue-600 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Section Title */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Section {currentSection + 1}: {questions[currentSection].title}
          </h2>
          <p className="mt-2 text-gray-600">{questions[currentSection].description}</p>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-xl font-semibold mb-6">
            {currentSectionQuestions[currentQuestion].question}
          </h3>

          <div className="space-y-4">
            {shuffledOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.value)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                  answers[`${currentSection}-${currentQuestion}`] === option.value
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-3 ${
                    answers[`${currentSection}-${currentQuestion}`] === option.value
                      ? 'border-blue-600 bg-blue-600'
                      : 'border-gray-300'
                  }`}>
                    {answers[`${currentSection}-${currentQuestion}`] === option.value && (
                      <CheckCircle className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <span className="flex-grow">{option.text}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={() => {
                if (currentQuestion > 0) {
                  setCurrentQuestion(currentQuestion - 1);
                } else if (currentSection > 0) {
                  setCurrentSection(currentSection - 1);
                  setCurrentQuestion(questions[currentSection - 1].questions.length - 1);
                }
              }}
              disabled={currentSection === 0 && currentQuestion === 0}
              className="flex items-center px-6 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={!answers[`${currentSection}-${currentQuestion}`]}
              className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentSection === totalSections - 1 && currentQuestion === totalQuestions - 1 ? 'Submit' : 'Next'}
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>

        {/* Question Progress */}
        <div className="mt-6 text-center text-gray-600">
          Question {currentQuestion + 1} of {totalQuestions}
        </div>
      </div>
    </div>
  );
}