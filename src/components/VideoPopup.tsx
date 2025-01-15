import React from 'react';
import { X } from 'lucide-react';

interface VideoPopupProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
}

export default function VideoPopup({ isOpen, onClose, videoId }: VideoPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-8">
      <div className="relative w-full max-w-3xl">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 p-2 bg-black bg-opacity-50 rounded-full"
          aria-label="Close video"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="relative pt-[56.25%]">
          <iframe
            className="absolute inset-0 w-full h-full rounded-lg"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}