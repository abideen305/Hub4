interface CoursePricing {
  physical: number;
  hybrid: number;
  virtual: number;
}

interface Course {
  id: string;
  title: string;
  description: string;
  pricing: CoursePricing;
}

interface CourseCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  courses: Course[];
}

export const courseCategories: CourseCategory[] = [
  {
    id: 'it',
    title: 'IT Training',
    description: 'Master the latest technologies and digital skills',
    icon: 'Code',
    courses: [
      {
        id: 'agile',
        title: 'Agile Delivery',
        description: 'Learn Agile principles, Scrum framework, and product delivery strategies.',
        pricing: {
          physical: 150000,
          hybrid: 120000,
          virtual: 100000
        }
      },
      {
        id: 'data-engineering',
        title: 'Data Engineering',
        description: 'Master data warehousing, ETL processes, and big data handling.',
        pricing: {
          physical: 150000,
          hybrid: 120000,
          virtual: 100000
        }
      },
      {
        id: 'testing',
        title: 'Software Testing',
        description: 'Learn manual and automated testing methodologies.',
        pricing: {
          physical: 180000,
          hybrid: 120000,
          virtual: 80000
        }
      },
      {
        id: 'cyber-security',
        title: 'Cyber Security',
        description: 'Master security principles and ethical hacking.',
        pricing: {
          physical: 180000,
          hybrid: 120000,
          virtual: 100000
        }
      },
      {
        id: 'animation',
        title: 'Animation',
        description: '2D/3D animation and storyboarding techniques.',
        pricing: {
          physical: 100000,
          hybrid: 0,
          virtual: 100000
        }
      },
      {
        id: 'product-design',
        title: 'Product Design',
        description: 'UI/UX design principles and prototyping.',
        pricing: {
          physical: 100000,
          hybrid: 0,
          virtual: 100000
        }
      }
    ]
  },
  {
    id: 'finance',
    title: 'Financial Management',
    description: 'Build strong financial literacy and management skills',
    icon: 'DollarSign',
    courses: [
      {
        id: 'personal-finance',
        title: 'Personal Budgeting',
        description: 'Master personal finance and budgeting strategies.',
        pricing: {
          physical: 150000,
          hybrid: 120000,
          virtual: 100000
        }
      },
      // Add other financial courses...
    ]
  },
  {
    id: 'ei',
    title: 'Emotional Intelligence',
    description: 'Develop crucial soft skills for personal and professional growth',
    icon: 'Heart',
    courses: [
      {
        id: 'self-awareness',
        title: 'Self-Awareness',
        description: 'Develop emotional awareness and management strategies.',
        pricing: {
          physical: 150000,
          hybrid: 120000,
          virtual: 100000
        }
      },
      // Add other EI courses...
    ]
  }
];