export type Page = 'home' | 'students' | 'events' | 'about' | 'login';

export interface Student {
  id: number;
  name: string;
  course: string;
  yearLevel: string;
  studentId: string;
  email: string;
  bio: string;
  interests: string[];
  avatarColor: string;
}

export interface EventItem {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  description: string;
  imageColor: string;
}

export const COURSES = [
  'Bachelor of Science in Information Technology',
  'Bachelor of Science in Computer Science',
  'Bachelor of Science in Civil Engineering',
  'Bachelor of Science in Agriculture',
  'Bachelor of Elementary Education',
  'Bachelor of Secondary Education',
  'Bachelor of Science in Business Administration',
  'Bachelor of Science in Hospitality Management',
] as const;

export const STUDENTS: Student[] = [
  {
    id: 1,
    name: 'Rocelyn Lacpao',
    course: 'Bachelor of Science in Information Technology',
    yearLevel: '3rd Year',
    studentId: 'CPSU-2021-0142-K',
    email: 'rocelyn.lacpao@cpsu.edu.ph',
    bio: 'Aspiring full-stack developer passionate about building tools that help fellow students.',
    interests: ['Web Development', 'UI/UX Design', 'Robotics'],
    avatarColor: 'from-navy-500 to-navy-700',
  },
  {
    id: 2,
    name: 'Shyra Canete',
    course: 'Bachelor of Science in Computer Science',
    yearLevel: '4th Year',
    studentId: 'CPSU-2020-0089-K',
    email: 'shyra.canete@cpsu.edu.ph',
    bio: 'Senior CS student researching machine learning applications in agriculture.',
    interests: ['Machine Learning', 'Data Science', 'Python'],
    avatarColor: 'from-sky-500 to-sky-700',
  },
  {
    id: 3,
    name: 'Dessa Hulguin',
    course: 'Bachelor of Elementary Education',
    yearLevel: '2nd Year',
    studentId: 'CPSU-2022-0317-K',
    email: 'dessa.hulguin@cpsu.edu.ph',
    bio: 'Future educator focused on inclusive teaching and early childhood development.',
    interests: ['Teaching', 'Literature', 'Community Service'],
    avatarColor: 'from-navy-400 to-sky-600',
  },
  {
    id: 4,
    name: 'Charlyn Muares',
    course: 'Bachelor of Science in Civil Engineering',
    yearLevel: '4th Year',
    studentId: 'CPSU-2020-0203-K',
    email: 'charlyn.muares@cpsu.edu.ph',
    bio: 'Engineering student leader and president of the CPSU Civil Engineering Society.',
    interests: ['Structural Design', 'Sustainability', 'Leadership'],
    avatarColor: 'from-navy-600 to-navy-800',
  },
  {
    id: 5,
    name: 'Danica Solina',
    course: 'Bachelor of Science in Business Administration',
    yearLevel: '3rd Year',
    studentId: 'CPSU-2021-0255-K',
    email: 'danica.solina@cpsu.edu.ph',
    bio: 'Entrepreneurship enthusiast building a student-led campus coffee startup.',
    interests: ['Entrepreneurship', 'Marketing', 'Finance'],
    avatarColor: 'from-sky-400 to-navy-600',
  },
  {
    id: 6,
    name: 'Aiza Manigos',
    course: 'Bachelor of Science in Agriculture',
    yearLevel: '2nd Year',
    studentId: 'CPSU-2022-0118-K',
    email: 'aiza.manigos@cpsu.edu.ph',
    bio: 'Agriculture student advocating for sustainable farming practices in rural communities.',
    interests: ['Sustainable Farming', 'Crop Science', 'Community Outreach'],
    avatarColor: 'from-navy-500 to-sky-600',
  },
  {
    id: 7,
    name: 'Darlyn Gonzales',
    course: 'Bachelor of Science in Hospitality Management',
    yearLevel: '1st Year',
    studentId: 'CPSU-2023-0064-K',
    email: 'darlyn.gonzales@cpsu.edu.ph',
    bio: 'First-year HM student exploring culinary arts and event management.',
    interests: ['Culinary Arts', 'Event Planning', 'Tourism'],
    avatarColor: 'from-sky-500 to-navy-700',
  },
  {
    id: 8,
    name: 'Lanie Lino',
    course: 'Bachelor of Science in Information Technology',
    yearLevel: '4th Year',
    studentId: 'CPSU-2020-0178-K',
    email: 'lanie.lino@cpsu.edu.ph',
    bio: 'IT graduating student specializing in network security and systems administration.',
    interests: ['Cybersecurity', 'Networking', 'Linux'],
    avatarColor: 'from-navy-700 to-navy-900',
  },
  {
    id: 9,
    name: 'Arlie Gales',
    course: 'Bachelor of Secondary Education',
    yearLevel: '3rd Year',
    studentId: 'CPSU-2021-0290-K',
    email: 'arlie.gales@cpsu.edu.ph',
    bio: 'Future English teacher and campus journalism editor-in-chief.',
    interests: ['Journalism', 'Creative Writing', 'Public Speaking'],
    avatarColor: 'from-sky-400 to-sky-600',
  },
  {
    id: 10,
    name: 'Dana Flores',
    course: 'Bachelor of Science in Computer Science',
    yearLevel: '1st Year',
    studentId: 'CPSU-2023-0102-K',
    email: 'dana.flores@cpsu.edu.ph',
    bio: 'First-year CS student eager to learn game development and competitive programming.',
    interests: ['Game Development', 'Algorithms', 'C++'],
    avatarColor: 'from-navy-400 to-navy-600',
  },
  {
    id: 11,
    name: 'Zyka Rose Arcelon',
    course: 'Bachelor of Science in Business Administration',
    yearLevel: '2nd Year',
    studentId: 'CPSU-2022-0210-K',
    email: 'zyka.rose@cpsu.edu.ph',
    bio: 'Business student organizing campus trade fairs and student enterprise projects.',
    interests: ['Event Management', 'Accounting', 'Leadership'],
    avatarColor: 'from-sky-600 to-navy-700',
  },
  {
    id: 12,
    name: 'Ehlor Joy Antenero',
    course: 'Bachelor of Science in Civil Engineering',
    yearLevel: '2nd Year',
    studentId: 'CPSU-2022-0051-K',
    email: 'ehlor.joy@cpsu.edu.ph',
    bio: 'Engineering student volunteer for rural infrastructure outreach programs.',
    interests: ['Construction', 'Surveying', 'Volunteer Work'],
    avatarColor: 'from-navy-500 to-sky-500',
  },
];

export const EVENTS: EventItem[] = [
  {
    id: 1,
    title: 'CPSU Founding Anniversary and Annual University Week(UWeek)',
    date: 'September 2, 2026',
    time: '8:00 AM',
    location: 'CPSU Main Campus, Quadrangle',
    category: 'University Event',
    description: 'A week-long celebration of CPSU\'s founding featuring parades, exhibits, sports festivals, and cultural nights across the Main Campus.',
    imageColor: 'from-navy-600 to-navy-800',
  },
  {
    id: 2,
    title: 'IT Innovation Summit 2026',
    date: 'September 14, 2026',
    time: '9:00 AM',
    location: 'CPSU Main Campus, ICT Building',
    category: 'Academic',
    description: 'Annual technology summit showcasing student capstone projects, industry talks, and a hackathon competition open to all IT and CS students.',
    imageColor: 'from-sky-500 to-navy-700',
  },
  {
    id: 3,
    title: 'Inter-College Sports Festival',
    date: 'September 20, 2026',
    time: '7:00 AM',
    location: 'CPSU Main Campus, Athletic Field',
    category: 'Sports',
    description: 'Colleges compete in basketball, volleyball, track and field, and esports. Cheer for your college and join the opening parade.',
    imageColor: 'from-navy-500 to-sky-600',
  },
  {
    id: 4,
    title: 'Future Educators Conference',
    date: 'October 5, 2026',
    time: '10:00 AM',
    location: 'CPSU Main Campus, Education Hall',
    category: 'Academic',
    description: 'A conference for Education students featuring teaching demonstrations, curriculum workshops, and a keynote from a DepEd regional director.',
    imageColor: 'from-sky-400 to-navy-600',
  },
  {
    id: 5,
    title: 'Campus Career Fair 2026',
    date: 'October 18, 2026',
    time: '9:00 AM',
    location: 'CPSU Main Campus, Gymnasium',
    category: 'Career',
    description: 'Connect with local and national employers. Bring your resume, attend on-the-spot interviews, and explore internship opportunities.',
    imageColor: 'from-navy-700 to-navy-900',
  },
  {
    id: 6,
    title: 'Agricultural Field Day & Exhibit',
    date: 'November 8, 2026',
    time: '8:00 AM',
    location: 'CPSU Main Campus, Agri Farm Lot',
    category: 'Community',
    description: 'Hands-on demonstrations of sustainable farming techniques, organic produce exhibits, and a farmers\' market open to the community.',
    imageColor: 'from-sky-500 to-sky-700',
  },
  {
    id: 7,
    title: 'Student Leaders\' General Assembly',
    date: 'November 22, 2026',
    time: '1:00 PM',
    location: 'CPSU Main Campus, Student Center',
    category: 'Organization',
    description: 'All recognized student organizations gather to present accomplishments, plan the semester calendar, and elect the Student Council.',
    imageColor: 'from-navy-600 to-sky-600',
  },
  {
    id: 8,
    title: 'Cultural Night: Voices of CPSU',
    date: 'December 3, 2026',
    time: '6:00 PM',
    location: 'CPSU Main Campus, Quadrangle',
    category: 'Cultural',
    description: 'An evening of music, dance, and theatrical performances celebrating the diverse cultures represented at CPSU Main Campus.',
    imageColor: 'from-navy-500 to-navy-800',
  },
];
