// Edit this file to update the content of the whole site.
export const profile = {
  name: 'Casey Regalario',
  age: 20,
  title: 'Aspiring Frontend Developer & UI/UX Designer',
  tagline: 'Where Creativity Meets Functionality.',
  location: 'Hagonoy, Bulacan, Philippines',
  email: 'caseyregalario@gmail.com',
  phone: '0969 643 8255',
  phoneHref: 'tel:+639696438255',
  github: 'https://github.com/kashew-05',
  githubLabel: 'github.com/kashew-05',
  goal: 'Frontend Developer',
  photoFormal: '/images/casey-formal.jpg',
  photoBookstore: '/images/casey-bookstore.png',
  bio: [
    'Hi, I’m Casey, a 20-year-old third-year BS Information Technology student at Bulacan State University, specializing in Web and Mobile Application Development.',
    'I’m creative, introverted, adaptable, and always willing to learn. I enjoy turning ideas into interfaces that are both easy to use and nice to look at.',
    'My goal is to grow into a frontend developer who builds thoughtful, well-designed web experiences.',
  ],
  interests: ['Arts', 'Animals', 'Crafts'],
  traits: ['Creative', 'Introverted', 'Adaptable', 'Willing to learn'],
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export const skillGroups = [
  { title: 'Frontend', icon: 'code', color: 'mint', items: ['HTML', 'CSS', 'JavaScript'] },
  { title: 'Backend & Data', icon: 'database', color: 'blush', items: ['PHP', 'MySQL', 'Firebase'] },
  { title: 'Mobile & Languages', icon: 'phone', color: 'yellow', items: ['Flutter', 'Java'] },
  { title: 'Design & Tools', icon: 'palette', color: 'cream', items: ['Figma', 'Visual Studio Code'] },
]

const placeholders = {
  type: 'Academic group project',
  role: '[Add your role in the team]',
  tech: '[Add the technologies used]',
  features: '[Add key features you can verify]',
}

export const projects = [
  {
    id: 'pacx',
    name: 'PACX CoopSurvey',
    subtitle: 'Cooperative Survey Management System',
    image: '/images/pacx-coopsurvey.png',
    short: 'A web-based system for cooperative members to access surveys, participate in questionnaires, and manage survey-related information.',
    description: 'A web-based system for cooperative members to access surveys, participate in questionnaires, and manage survey-related information.',
    ...placeholders,
    live: 'https://kashewbsit3gg2.infinityfreeapp.com/?i=1',
  },
  {
    id: 'lynx',
    name: 'LYNX Clothing Apparel',
    subtitle: 'Clothing and Apparel Website',
    image: '/images/lynx-clothing.png',
    short: 'A fashion-oriented website showcasing clothing products through an online storefront.',
    description: 'A fashion-oriented website showcasing clothing products through an online storefront.',
    ...placeholders,
    live: '',
  },
  {
    id: 'luba',
    name: 'LUBACanFindIT',
    subtitle: 'Road Pothole Reporting and Monitoring System for LGUs',
    image: '/images/lubacanfindit.png',
    short: 'A web-based system designed to help LGUs manage road reports, monitor pothole incidents, and track road repair operations.',
    description: 'A web-based system designed to help Local Government Units manage road reports, monitor pothole incidents, and track road repair operations.',
    ...placeholders,
    live: '',
  },
]

export const education = {
  university: 'Bulacan State University – Main Campus',
  degree: 'Bachelor of Science in Information Technology',
  specialization: 'Web and Mobile Application Development (WMAD)',
  year: '3rd Year',
  graduation: '2028',
}
