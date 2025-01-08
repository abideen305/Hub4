import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

export default function HeroSection() {
  const [showVideo, setShowVideo] = React.useState(false);
  const [videoError, setVideoError] = React.useState(false);

  const handleVideoError = () => {
    setVideoError(true);
    console.error('Failed to load YouTube video');
  };

  return (
    <div 
      className="relative bg-cover bg-center min-h-[700px]"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white max-w-3xl py-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Empowering Growth Through Learning
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Hub4 is a comprehensive learning and development center in Lagos, providing training programs in{' '}
            <span className="text-orange-400 font-semibold">Financial Management</span>,{' '}
            <span className="text-orange-400 font-semibold">Emotional Intelligence</span>, and{' '}
            <span className="text-orange-400 font-semibold">IT</span>, as well as{' '}
            <span className="text-emerald-400 font-semibold">Social Media Management</span> and{' '}
            <span className="text-emerald-400 font-semibold">Workspace Solutions</span> with modern, rentable spaces.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <Link to="/training" className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
              View Training Programs
            </Link>
            <Link to="/workspace" className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition duration-300">
              Book a Workspace
            </Link>
            <button 
              onClick={() => setShowVideo(true)}
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-white/10 transition duration-300"
            >
              <Play className="w-5 h-5" />
              Watch Intro
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video">
            <button 
              onClick={() => setShowVideo(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
            >
              Close
            </button>
            {videoError ? (
              <div className="w-full h-full flex items-center justify-center bg-gray-900 rounded-lg">
                <p className="text-white text-center">
                  Sorry, the video could not be loaded.<br />
                  Please visit our <a 
                    href="https://www.youtube.com/watch?v=7ElHOhu7GgA" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    YouTube channel
                  </a> to watch the video.
                </p>
              </div>
            ) : (
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/7ElHOhu7GgA"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onError={handleVideoError}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}