import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Training from './pages/Training';
import SocialMedia from './pages/SocialMedia';
import Workspace from './pages/Workspace';
import Careers from './pages/Careers';
import Test from './pages/Test';
import Results from './pages/Results';
import MasterClass from './pages/MasterClass';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/training" element={<Training />} />
            <Route path="/social-media" element={<SocialMedia />} />
            <Route path="/workspace" element={<Workspace />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/start-test" element={<Test />} />
            <Route path="/results" element={<Results />} />
            <Route path="/masterclass" element={<MasterClass />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}