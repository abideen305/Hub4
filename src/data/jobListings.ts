export interface JobListing {
  title: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

export const jobListings: JobListing[] = [
  {
    title: "Business Developer",
    description: "We're looking for a dynamic Business Developer to help grow our training and workspace solutions.",
    requirements: [
      "Bachelor's degree in Business Administration or related field",
      "3+ years of experience in business development",
      "Strong networking and relationship-building skills",
      "Excellent communication and presentation abilities",
      "Experience in the education or technology sector preferred"
    ],
    responsibilities: [
      "Identify and pursue new business opportunities",
      "Develop and maintain relationships with key partners",
      "Create and present business proposals",
      "Analyze market trends and competitor activities",
      "Contribute to the company's growth strategy"
    ]
  },
  {
    title: "Customer Relations Officer",
    description: "Join our team as a Customer Relations Officer to provide exceptional service to our clients.",
    requirements: [
      "Bachelor's degree in Customer Service, Communications, or related field",
      "2+ years of customer service experience",
      "Strong problem-solving abilities",
      "Excellent interpersonal skills",
      "Proficiency in CRM software"
    ],
    responsibilities: [
      "Handle customer inquiries and provide timely responses",
      "Maintain customer relationships and ensure satisfaction",
      "Process customer feedback and suggestions",
      "Coordinate with other departments to resolve issues",
      "Maintain customer service records and documentation"
    ]
  },
  {
    title: "Social Media Manager",
    description: "We're seeking a creative Social Media Manager to lead our digital presence and client campaigns.",
    requirements: [
      "Bachelor's degree in Marketing, Communications, or related field",
      "3+ years of social media management experience",
      "Proficiency in social media platforms and analytics tools",
      "Strong content creation and copywriting skills",
      "Experience with paid social advertising"
    ],
    responsibilities: [
      "Develop and implement social media strategies",
      "Create engaging content for multiple platforms",
      "Manage client social media accounts",
      "Monitor and analyze social media metrics",
      "Stay updated with social media trends and best practices"
    ]
  },
  {
    title: "UI/UX Tutor",
    description: "Share your expertise as a UI/UX Tutor and help shape the next generation of designers.",
    requirements: [
      "Bachelor's degree in Design, HCI, or related field",
      "4+ years of UI/UX design experience",
      "Strong portfolio demonstrating design expertise",
      "Experience with design tools (Figma, Adobe XD)",
      "Previous teaching or mentoring experience preferred"
    ],
    responsibilities: [
      "Develop and deliver UI/UX design curriculum",
      "Conduct practical workshops and training sessions",
      "Provide feedback and guidance to students",
      "Keep course content updated with industry trends",
      "Assess student progress and performance"
    ]
  },
  {
    title: "Admin Secretary",
    description: "Support our team as an Admin Secretary to ensure smooth operations and efficient administration.",
    requirements: [
      "Bachelor's degree in Business Administration or related field",
      "2+ years of administrative experience",
      "Proficiency in Microsoft Office Suite",
      "Strong organizational and time management skills",
      "Excellent written and verbal communication"
    ],
    responsibilities: [
      "Manage office administration and scheduling",
      "Handle correspondence and documentation",
      "Coordinate meetings and appointments",
      "Maintain filing systems and records",
      "Support other departments as needed"
    ]
  }
];