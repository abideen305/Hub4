import React from 'react';

interface PartnerLogoProps {
  name: string;
  logo: string;
}

export default function PartnerLogo({ name, logo }: PartnerLogoProps) {
  return (
    <div className="flex-shrink-0 w-40 h-40 bg-white rounded-lg shadow-md p-4 flex items-center justify-center">
      <img
        src={logo}
        alt={name}
        className="max-w-full max-h-full object-contain"
      />
    </div>
  );
}