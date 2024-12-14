import React from 'react';
import { Wifi, Coffee, Monitor, Building2 } from 'lucide-react';

const amenities = [
  { icon: Wifi, title: "High-Speed WiFi" },
  { icon: Coffee, title: "Refreshments" },
  { icon: Monitor, title: "AV Equipment" },
  { icon: Building2, title: "24/7 Access" }
];

export default function Amenities() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {amenities.map((amenity, index) => {
        const Icon = amenity.icon;
        return (
          <div key={index} className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold">{amenity.title}</h3>
          </div>
        );
      })}
    </div>
  );
}