import React, { useState } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { calculateResults } from '../utils/testResults';
import { Send } from 'lucide-react';

export default function Results() {
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!location.state?.answers) {
    return <Navigate to="/" replace />;
  }

  const results = calculateResults(location.state.answers);
  const topCareer = Object.entries(results).sort((a, b) => b[1] - a[1])[0];

  const handleSubmitEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/mvggdnwg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          results,
          topCareer: topCareer[0],
          _subject: 'Tech Career Test Results',
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error('Failed to send results');
      }
    } catch (error) {
      alert('Failed to send results. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Your Tech Career Results</h1>
          <p className="text-xl text-gray-600">
            Based on your answers, here's how you align with different tech careers
          </p>
        </div>

        {/* Results Chart */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="space-y-6">
            {Object.entries(results).map(([career, percentage]) => (
              <div key={career}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{career}</span>
                  <span>{Math.round(percentage)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-blue-600 rounded-full h-4 transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendation */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Your Best Match</h2>
          <p className="text-lg">
            Based on your responses, you show a strong aptitude for{' '}
            <span className="font-semibold text-blue-700">{topCareer[0]}</span>. 
            This career path aligns well with your interests and skills.
          </p>
        </div>

        {/* Email Form */}
        {!isSubmitted ? (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Get Detailed Results</h2>
            <p className="text-gray-600 mb-6">
              Enter your email to receive a detailed analysis and personalized course recommendations.
            </p>
            <form onSubmit={handleSubmitEmail} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="your@email.com"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Detailed Results
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-green-800 mb-4">Results Sent!</h2>
            <p className="text-green-700">
              Check your email for detailed results and next steps in your tech career journey.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}