export const profile = {
  name: "Iswarya S",
  role: "Full-Stack Developer",
  tagline: "Building practical, full-stack solutions with the MERN stack — from campus tools to healthcare systems.",
  email: "iswaryas504@gmail.com",
  phone: "+91 8190911829",
  github: "https://github.com/ISWARYA107",
  linkedin: "https://www.linkedin.com/in/iswarya-s-019602377/",
  location: "Perundurai, Tamil Nadu",
  summary:
    "3rd-year B.E. Computer Science and Engineering student with strong skills in MERN Stack development, database management, and modern web technologies. Experienced in building and deploying full-stack web applications using React.js, Node.js, Express.js, and MongoDB Atlas. Proficient in REST API development, Git/GitHub version control, and responsive web design.",
};

export const roles = [
  "MERN Stack Developer",
  "Python Backend Engineer",
  "ML & Deep Learning Enthusiast",
  "B.E. CSE Student",
];

export const languages = [
  "C", "Java", "Python", "JavaScript", "HTML", "CSS",
];

export const skillGroups = [
  {
    label: "Frontend",
    items: ["React.js", "HTML", "CSS", "JavaScript", "TailwindCSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "FastAPI (learning)", "Flask", "REST APIs"],
  },
  {
    label: "Databases",
    items: ["MongoDB Atlas", "MySQL", "PostgreSQL-compatible SQL"],
  },
  {
    label: "Tools & Platforms",
    items: ["Git & GitHub", "VS Code", "Power BI", "Vercel"],
  },
  {
    label: "Other Languages",
    items: ["C++", "Java", "PHP"],
  },
];

// type: "live" -> View Project opens the deployed link
// type: "github" -> View Project opens the GitHub profile (no individual repo link provided)
export const projects = [
  {
    id: "club-management",
    title: "Club Management System",
    description:
      "A full-stack MERN platform for student club registration, enrollment, and event management, with RESTful APIs and a MongoDB Atlas backend.",
    stack: ["React", "Node.js", "Express.js", "MongoDB"],
    type: "live",
    url: "https://kongu-club.vercel.app/",
  },
  {
    id: "food-shop",
    title: "Food Shop Website",
    description:
      "An online food delivery platform with user authentication, menu browsing, cart management, and order placement, built end-to-end on the MERN stack.",
    stack: ["React", "Node.js", "Express.js", "MongoDB"],
    type: "live",
    url: "https://new-food-shop.vercel.app/",
  },
  {
    id: "hospital-management",
    title: "Hospital Management System",
    description:
      "A full-stack system for managing patient records, appointments, and hospital workflows with a clean, responsive interface.",
    stack: ["React", "Node.js", "Express.js", "MongoDB"],
    type: "live",
    url: "https://hospital-frontend-zmh3.vercel.app/",
  },
  {
    id: "cervical-cancer-detection",
    title: "Cervical Cancer Detection",
    description:
      "An ML and deep learning system built with TensorFlow/Keras using clean, modular OOP design, with data preprocessing pipelines and model evaluation via NumPy, Pandas, and Scikit-learn.",
    stack: ["Python", "TensorFlow", "Keras", "Scikit-learn"],
    type: "github",
    url: "https://github.com/iswarya-s",
  },
  {
    id: "library-management",
    title: "Library Management System",
    description:
      "A Java console application integrated with JDBC and a SQL database for book tracking and member management, with optimised CRUD queries.",
    stack: ["Java", "JDBC", "SQL", "OOP"],
    type: "github",
    url: "https://github.com/iswarya-s",
  },
 
];
