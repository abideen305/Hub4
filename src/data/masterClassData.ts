interface MasterClass {
  date: string;
  courses: string[];
  time: string;
  mode: 'Physical' | 'Virtual';
  location?: string;
}

export const masterClasses: MasterClass[] = [
  {
    date: 'Saturday, January 11th 2025',
    courses: ['Data Engineering', 'Animation'],
    time: '11:00 AM & 2:00 PM',
    mode: 'Physical',
    location: '2, Afisman, Ikeja Along, Lagos'
  },
  {
    date: 'Saturday, January 18th 2025',
    courses: ['Cyber Security', 'Product Design'],
    time: '11:00 AM & 2:00 PM',
    mode: 'Physical',
    location: '2, Afisman, Ikeja Along, Lagos'
  },
  {
    date: 'Sunday, January 12th 2025',
    courses: ['Data Engineering', 'Animation'],
    time: '5:00 PM',
    mode: 'Virtual'
  },
  {
    date: 'Sunday, January 19th 2025',
    courses: ['Cyber Security', 'Product Design'],
    time: '5:00 PM',
    mode: 'Virtual'
  }
];