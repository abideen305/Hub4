import React from 'react';

interface Platform {
  value: string;
  label: string;
}

interface PlatformSelectProps {
  selectedPlatforms: string[];
  onChange: (platforms: string[]) => void;
}

const platforms: Platform[] = [
  { value: 'instagram', label: 'Instagram' },
  { value: 'facebook', label: 'Facebook' },
  { value: 'twitter', label: 'Twitter' },
  { value: 'linkedin', label: 'LinkedIn' }
];

export default function PlatformSelect({ selectedPlatforms, onChange }: PlatformSelectProps) {
  const handleChange = (platform: string) => {
    const newSelection = selectedPlatforms.includes(platform)
      ? selectedPlatforms.filter(p => p !== platform)
      : [...selectedPlatforms, platform];
    onChange(newSelection);
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        Platforms to Manage <span className="text-red-500">*</span>
      </label>
      <div className="space-y-2">
        {platforms.map((platform) => (
          <label key={platform.value} className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="platforms"
              value={platform.value}
              checked={selectedPlatforms.includes(platform.value)}
              onChange={() => handleChange(platform.value)}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span>{platform.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}