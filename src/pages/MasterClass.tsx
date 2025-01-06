import React from 'react';
import HeroSection from '../components/masterclass/HeroSection';
import AboutSection from '../components/masterclass/AboutSection';
import ScheduleSection from '../components/masterclass/ScheduleSection';
import InstructorSection from '../components/masterclass/InstructorSection';
import TestimonialSection from '../components/masterclass/TestimonialSection';
import RegistrationSection from '../components/masterclass/RegistrationSection';
import ContactSection from '../components/masterclass/ContactSection';
import WhatsAppButton from '../components/WhatsAppButton';

export default function MasterClass() {
  return (
    <div className="pt-16">
      <HeroSection />
      <AboutSection />
      <ScheduleSection />
      <InstructorSection />
      <TestimonialSection />
      <RegistrationSection />
      <ContactSection />
      <WhatsAppButton />
    </div>
  );
}