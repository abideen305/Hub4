import React from 'react';
import PageHeader from '../components/PageHeader';
import ServiceOverview from '../components/social/ServiceOverview';
import PlatformCard from '../components/social/PlatformCard';
import ProcessSteps from '../components/social/ProcessSteps';
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const platforms = [
  {
    icon: Instagram,
    title: "Instagram Management",
    description: "Build a visually stunning Instagram presence with engaging content, stories, and reels that capture your audience's attention.",
    features: [
      "Content Creation & Scheduling",
      "Story & Reel Production",
      "Hashtag Strategy"
    ],
    iconColor: "text-pink-600"
  },
  {
    icon: Facebook,
    title: "Facebook Management",
    description: "Develop a strong Facebook presence with engaging content, community management, and targeted advertising campaigns.",
    features: [
      "Page Optimization",
      "Content Strategy",
      "Ad Campaign Management"
    ],
    iconColor: "text-blue-600"
  },
  {
    icon: Twitter,
    title: "Twitter Management",
    description: "Engage with your audience in real-time and stay relevant in fast-paced conversations on Twitter.",
    features: [
      "Tweet Strategy & Scheduling",
      "Engagement Monitoring",
      "Trend Analysis"
    ],
    iconColor: "text-blue-400"
  },
  {
    icon: Linkedin,
    title: "LinkedIn Management",
    description: "Build your professional brand and network with industry leaders on LinkedIn.",
    features: [
      "Profile Optimization",
      "Business Page Management",
      "Professional Content Strategy"
    ],
    iconColor: "text-blue-700"
  }
];

export default function SocialMedia() {
  return (
    <div className="pt-16">
      <PageHeader
        title="Social Media Management"
        description="Boost your online presence with our professional social media services"
        backgroundImage="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      />

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Comprehensive Social Media Solutions</h2>
            <p className="text-xl text-gray-600">We help businesses and individuals build and maintain a strong social media presence</p>
          </div>
          <ServiceOverview />
        </div>
      </section>

      {/* Platforms */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Platforms We Manage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {platforms.map((platform, index) => (
              <PlatformCard key={index} {...platform} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Our Process</h2>
          <ProcessSteps />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Grow Your Social Media Presence?</h2>
          <p className="text-xl text-white mb-8">Let's discuss how we can help you achieve your social media goals.</p>
          <a href="mailto:info@hub4.org" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition duration-300">
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
}