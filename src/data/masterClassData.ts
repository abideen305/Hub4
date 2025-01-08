interface MasterClass {
  date: string;
  courses: string[];
  morningTime: string;
  afternoonTime: string;
  mode: 'Physical' | 'Virtual';
  location?: string;
}

export const masterClasses: MasterClass[] = [
  {
    date: 'Saturday, January 11th 2025',
    courses: ['Data Engineering', 'Animation', 'Cyber Security', 'Product Design'],
    morningTime: '11:00 AM',
    afternoonTime: '2:30 PM',
    mode: 'Physical',
    location: '4-6 Afisman Drive, Ikeja Along, Lagos'
  },
  {
    date: 'Saturday, January 18th 2025',
    courses: ['Data Engineering', 'Animation', 'Cyber Security', 'Product Design'],
    morningTime: '11:00 AM',
    afternoonTime: '2:30 PM',
    mode: 'Physical',
    location: '4-6 Afisman Drive, Ikeja Along, Lagos'
  },
  {
    date: 'Saturday, January 25th 2025',
    courses: ['Data Engineering', 'Animation', 'Cyber Security', 'Product Design'],
    morningTime: '11:00 AM',
    afternoonTime: '2:30 PM',
    mode: 'Physical',
    location: '4-6 Afisman Drive, Ikeja Along, Lagos'
  },
  {
    date: 'Sunday, January 12th 2025',
    courses: ['Data Engineering', 'Animation', 'Cyber Security', 'Product Design'],
    morningTime: '11:00 AM',
    afternoonTime: '2:30 PM',
    mode: 'Virtual'
  },
  {
    date: 'Sunday, January 19th 2025',
    courses: ['Data Engineering', 'Animation', 'Cyber Security', 'Product Design'],
    morningTime: '11:00 AM',
    afternoonTime: '2:30 PM',
    mode: 'Virtual'
  },
  {
    date: 'Sunday, January 26th 2025',
    courses: ['Data Engineering', 'Animation', 'Cyber Security', 'Product Design'],
    morningTime: '11:00 AM',
    afternoonTime: '2:30 PM',
    mode: 'Virtual'
  }
];