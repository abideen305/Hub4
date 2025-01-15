// Add curriculum and instructor data
interface Instructor {
  name: string;
  role: string;
  bio: string;
  image: string;
}

interface CurriculumModule {
  title: string;
  duration: string;
  topics: string[];
}

interface CourseDetails {
  id: string;
  title: string;
  description: string;
  curriculum: CurriculumModule[];
  instructor: Instructor;
  duration: string;
  maxStudents: number;
  prerequisites: string[];
  pricing: {
    physical: number;
    hybrid: number;
    virtual: number;
  };
}

export const courseCategories = [
  {
    id: 'it',
    title: 'IT Training',
    icon: 'Code',
    description: 'Master the latest technologies and digital skills',
    courses: [
      {
        id: 'data-engineering',
        title: 'Data Engineering',
        description: 'Master data warehousing, ETL processes, and big data technologies',
        pricing: {
          physical: 150000,
          hybrid: 120000,
          virtual: 100000
        }
      },
      {
        id: 'cyber-security',
        title: 'Cyber Security',
        description: 'Learn security principles and ethical hacking with hands-on practice',
        pricing: {
          physical: 180000,
          hybrid: 120000,
          virtual: 100000
        }
      },
      {
        id: 'software-testing',
        title: 'Software Testing',
        description: 'Master software testing methodologies and automation tools',
        pricing: {
          physical: 180000,
          hybrid: 120000,
          virtual: 80000
        }
      }
    ]
  },
  {
    id: 'design',
    title: 'Design & Animation',
    icon: 'Heart',
    description: 'Create stunning visuals and engaging animations',
    courses: [
      {
        id: 'product-design',
        title: 'Product Design',
        description: 'Learn UI/UX design principles and create stunning digital experiences',
        pricing: {
          physical: 100000,
          hybrid: 0,
          virtual: 100000
        }
      },
      {
        id: 'animation',
        title: 'Animation',
        description: 'Master 2D/3D animation and bring stories to life',
        pricing: {
          physical: 100000,
          hybrid: 0,
          virtual: 100000
        }
      }
    ]
  }
];

export const courseDetails: Record<string, CourseDetails> = {
  'data-engineering': {
    id: 'data-engineering',
    title: 'Data Engineering',
    description: 'Master data warehousing, ETL processes, and big data technologies to build robust data infrastructure.',
    curriculum: [
      {
        title: 'Foundations of Data Engineering',
        duration: '2 weeks',
        topics: [
          'Introduction to Data Engineering',
          'Data Architecture Fundamentals',
          'Database Management Systems',
          'SQL Mastery'
        ]
      },
      {
        title: 'ETL Processes & Data Warehousing',
        duration: '3 weeks',
        topics: [
          'ETL Pipeline Development',
          'Data Warehouse Design',
          'Data Quality & Validation',
          'Performance Optimization'
        ]
      },
      {
        title: 'Big Data Technologies',
        duration: '3 weeks',
        topics: [
          'Hadoop Ecosystem',
          'Apache Spark',
          'Stream Processing',
          'Data Lakes'
        ]
      },
      {
        title: 'Cloud Data Platforms',
        duration: '2 weeks',
        topics: [
          'AWS Data Services',
          'Azure Data Solutions',
          'GCP Big Data Tools',
          'Cloud Security'
        ]
      }
    ],
    instructor: {
      name: 'Dr. Sarah Chen',
      role: 'Lead Data Engineering Instructor',
      bio: '15+ years experience in big data and analytics. Former lead engineer at Google with a PhD in Computer Science.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    duration: '10 weeks',
    maxStudents: 15,
    prerequisites: [
      'Basic SQL knowledge',
      'Programming fundamentals',
      'Understanding of databases'
    ],
    pricing: {
      physical: 150000,
      hybrid: 120000,
      virtual: 100000
    }
  },
  'cyber-security': {
    id: 'cyber-security',
    title: 'Cyber Security',
    description: 'Master security principles and ethical hacking with hands-on practice.',
    curriculum: [
      {
        title: 'Security Fundamentals',
        duration: '2 weeks',
        topics: [
          'Introduction to Cybersecurity',
          'Network Security Basics',
          'Security Protocols',
          'Cryptography Fundamentals'
        ]
      },
      {
        title: 'Ethical Hacking',
        duration: '3 weeks',
        topics: [
          'Penetration Testing',
          'Vulnerability Assessment',
          'Social Engineering',
          'Web Application Security'
        ]
      },
      {
        title: 'Security Operations',
        duration: '3 weeks',
        topics: [
          'Security Information and Event Management (SIEM)',
          'Incident Response',
          'Threat Intelligence',
          'Security Automation'
        ]
      },
      {
        title: 'Advanced Security',
        duration: '2 weeks',
        topics: [
          'Cloud Security',
          'Mobile Security',
          'IoT Security',
          'Blockchain Security'
        ]
      }
    ],
    instructor: {
      name: 'Alex Thompson',
      role: 'Senior Security Expert',
      bio: 'Certified ethical hacker with 12+ years of experience in cybersecurity. Former security consultant for Fortune 500 companies.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    duration: '10 weeks',
    maxStudents: 20,
    prerequisites: [
      'Basic networking knowledge',
      'Understanding of operating systems',
      'Basic programming concepts'
    ],
    pricing: {
      physical: 180000,
      hybrid: 120000,
      virtual: 100000
    }
  },
  'product-design': {
    id: 'product-design',
    title: 'Product Design',
    description: 'Learn UI/UX design principles and create stunning digital experiences.',
    curriculum: [
      {
        title: 'Design Fundamentals',
        duration: '2 weeks',
        topics: [
          'Design Thinking',
          'User Research',
          'Information Architecture',
          'Wireframing'
        ]
      },
      {
        title: 'UI Design',
        duration: '3 weeks',
        topics: [
          'Visual Design Principles',
          'Typography & Color Theory',
          'Component Design',
          'Design Systems'
        ]
      },
      {
        title: 'UX Design',
        duration: '3 weeks',
        topics: [
          'User Journey Mapping',
          'Usability Testing',
          'Interaction Design',
          'Prototyping'
        ]
      },
      {
        title: 'Professional Practice',
        duration: '2 weeks',
        topics: [
          'Design Tools (Figma)',
          'Design Documentation',
          'Collaboration',
          'Portfolio Building'
        ]
      }
    ],
    instructor: {
      name: 'Jessica Park',
      role: 'Lead Product Designer',
      bio: 'Former design lead at Apple with 8+ years of experience in product design. Expert in creating user-centered digital experiences.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    duration: '10 weeks',
    maxStudents: 15,
    prerequisites: [
      'Basic design understanding',
      'Familiarity with design tools',
      'Creative thinking'
    ],
    pricing: {
      physical: 100000,
      hybrid: 0,
      virtual: 100000
    }
  },
  'animation': {
    id: 'animation',
    title: 'Animation',
    description: 'Master 2D/3D animation and bring stories to life.',
    curriculum: [
      {
        title: 'Animation Basics',
        duration: '2 weeks',
        topics: [
          'Principles of Animation',
          'Storyboarding',
          'Character Design',
          'Timing & Spacing'
        ]
      },
      {
        title: '2D Animation',
        duration: '3 weeks',
        topics: [
          'Digital 2D Tools',
          'Frame-by-Frame Animation',
          'Motion Graphics',
          'Character Animation'
        ]
      },
      {
        title: '3D Animation',
        duration: '3 weeks',
        topics: [
          '3D Modeling',
          'Rigging',
          'Texturing & Lighting',
          'Rendering'
        ]
      },
      {
        title: 'Advanced Techniques',
        duration: '2 weeks',
        topics: [
          'Visual Effects',
          'Compositing',
          'Project Pipeline',
          'Portfolio Development'
        ]
      }
    ],
    instructor: {
      name: 'Michael Rodriguez',
      role: 'Senior Animator',
      bio: 'Award-winning animator with 10+ years of experience in major animation studios. Expert in both 2D and 3D animation.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    duration: '10 weeks',
    maxStudents: 12,
    prerequisites: [
      'Basic art skills',
      'Understanding of digital tools',
      'Creative storytelling ability'
    ],
    pricing: {
      physical: 100000,
      hybrid: 0,
      virtual: 100000
    }
  },
  'software-testing': {
    id: 'software-testing',
    title: 'Software Testing',
    description: 'Learn comprehensive software testing methodologies and tools.',
    curriculum: [
      {
        title: 'Testing Fundamentals',
        duration: '2 weeks',
        topics: [
          'Testing Principles',
          'Test Planning',
          'Test Case Design',
          'Bug Reporting'
        ]
      },
      {
        title: 'Manual Testing',
        duration: '3 weeks',
        topics: [
          'Functional Testing',
          'UI Testing',
          'Integration Testing',
          'System Testing'
        ]
      },
      {
        title: 'Automated Testing',
        duration: '3 weeks',
        topics: [
          'Test Automation Frameworks',
          'Selenium WebDriver',
          'API Testing',
          'Performance Testing'
        ]
      },
      {
        title: 'Advanced Testing',
        duration: '2 weeks',
        topics: [
          'Mobile Testing',
          'Security Testing',
          'DevOps & CI/CD',
          'Test Management'
        ]
      }
    ],
    instructor: {
      name: 'David Kim',
      role: 'QA Lead',
      bio: '10+ years in software quality assurance. Expert in both manual and automated testing methodologies.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    duration: '10 weeks',
    maxStudents: 20,
    prerequisites: [
      'Basic software knowledge',
      'Understanding of web technologies',
      'Analytical thinking'
    ],
    pricing: {
      physical: 180000,
      hybrid: 120000,
      virtual: 80000
    }
  }
};