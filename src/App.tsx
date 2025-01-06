import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Training from './pages/Training';
import SocialMedia from './pages/SocialMedia';
import Workspace from './pages/Workspace';
import Careers from './pages/Careers';
import MasterClass from './pages/MasterClass';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/training" element={<Training />} />
            <Route path="/social-media" element={<SocialMedia />} />
            <Route path="/workspace" element={<Workspace />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/masterclass" element={<MasterClass />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}