import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                2, Afisman, Ikeja Along, Lagos
              </p>
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                08133048918, 08179651769
              </p>
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                info@hub4.org
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/training" className="hover:text-blue-400">Training Programs</a></li>
              <li><a href="/social-media" className="hover:text-blue-400">Social Media Management</a></li>
              <li><a href="/workspace" className="hover:text-blue-400">Workspace Rental</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">Facebook</a>
              <a href="#" className="hover:text-blue-400">Twitter</a>
              <a href="#" className="hover:text-blue-400">LinkedIn</a>
              <a href="#" className="hover:text-blue-400">Instagram</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Hub4. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}