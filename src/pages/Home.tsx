import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import FeaturedServices from '../components/home/FeaturedServices';
import FeaturedCourses from '../components/home/FeaturedCourses';
import BookingSection from '../components/home/BookingSection';
import PartnerSlider from '../components/home/PartnerSlider';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import NewsletterSignup from '../components/home/NewsletterSignup';
import TalentSection from '../components/home/TalentSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <FeaturedServices />
      <WhyChooseUs />
      <FeaturedCourses />
      <TalentSection />
      <BookingSection />
      <PartnerSlider />
      <Testimonials />
      <NewsletterSignup />
      
      {/* Location Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Visit Us</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3!2d3.3!3d6.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzYnMDAuMCJOIDPCsDE4JzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1600000000000!5m2!1sen!2sng"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}