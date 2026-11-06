export const profile = {
  name: "Kaushal Raj",
  firstName: "Kaushal",
  lastName: "Raj",
  initials: "KR",
  headline: "Backend & Full-Stack Software Engineer",
  subtitle: "Final-year Computer Science and Engineering student at Asansol Engineering College, building reliable backend systems, full-stack applications, and applied AI projects.",
  college: "Asansol Engineering College",
  degree: "B.Tech in Computer Science and Engineering",
  graduation: "2027",
  availability: "Open to software engineering opportunities",
  github: "https://github.com/rajkaushall",
  linkedin: "https://linkedin.com/in/rajkaushall",
  leetcode: "https://leetcode.com/u/rajkaushall",
  about: [
    "I’m a final-year Computer Science and Engineering student at Asansol Engineering College. I enjoy understanding systems deeply, designing clean APIs, and turning ideas into practical software.",
    "My current focus is backend development with Node.js and Express, databases, full-stack applications, and applied machine learning. I also practice data structures and algorithms and explore deployment and DevOps fundamentals.",
  ],
} as const;

export type Project = {
  title: string;
  category: string;
  description: string;
  stack: readonly string[];
  repo: string | null;
  status?: string;
  featured?: boolean;
  code: string;
};

// Project claims are conservatively worded. Review each project's implementation
// and replace source-derived descriptions with current verified outcomes.
export const projects: readonly Project[] = [
  {
    code: "01", title: "SignalOps", category: "Incident Management Platform",
    description: "An incident-management application with JWT authentication, multi-tenant services, log ingestion, Redis/BullMQ alert evaluation, deduplication, incident timelines, and a React operations console.",
    stack: ["Node.js", "Express", "React", "MongoDB", "Redis", "BullMQ"],
    repo: "https://github.com/rajkaushall/signalops", status: "Active build", featured: true,
  },
  {
    code: "02", title: "C++ Chess Engine", category: "Systems / Algorithms",
    description: "A modular chess-engine project exploring board representation, FEN parsing, move generation, and classical search techniques in C++.",
    stack: ["C++", "OOP", "Algorithms"],
    repo: "https://github.com/rajkaushall/chess-engine",
  },
  {
    code: "03", title: "ChronoCLI", category: "C++ Developer Tool",
    description: "A terminal calendar and event manager featuring modular C++ design, persistent file storage, CMake builds, automated tests, and CI workflows.",
    stack: ["C++", "STL", "CMake", "GitHub Actions"],
    repo: "https://github.com/rajkaushall/ChronoCLI",
  },
  {
    code: "04", title: "AI Recipe Generator", category: "Applied AI / Web",
    description: "A Flask web application for generating personalized recipe suggestions using available ingredients and language-model prompts.",
    stack: ["Python", "Flask", "OpenAI API"],
    repo: null,
  },
  {
    code: "05", title: "Deforestation Detection", category: "Machine Learning / Environment",
    description: "A satellite-imagery analysis project using Landsat data and NDVI calculations to explore vegetation-change and deforestation patterns.",
    stack: ["Python", "NumPy", "Pandas", "NDVI"],
    repo: "https://github.com/rajkaushall/deforestation-forestation",
  },
];

export const skillGroups = [
  { title: "Programming", subtitle: "Languages", items: ["C++", "JavaScript", "Python"] },
  { title: "Backend", subtitle: "APIs & services", items: ["Node.js", "Express.js", "REST APIs", "Flask"] },
  { title: "Frontend", subtitle: "Web applications", items: ["React", "HTML", "CSS"] },
  { title: "Databases", subtitle: "Data persistence", items: ["MongoDB", "MySQL"] },
  { title: "Developer Tools", subtitle: "Engineering workflow", items: ["Git", "OOP", "DSA", "System Design"] },
  { title: "DevOps — Learning", subtitle: "Currently exploring", items: ["Docker", "Kubernetes", "CI/CD", "Terraform"] },
] as const;

export const certifications = [
  { title: "Python for Data Science, AI & Development", issuer: "IBM · Coursera", description: "Python, NumPy, Pandas, and introductory data science and AI workflows.", verification: null },
] as const;
