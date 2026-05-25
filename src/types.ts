export interface Education {
  school: string;
  degree: string;
  score: string;
  year: string;
  details?: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: { name: string; level: number }[]; // level in percentage
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  role?: string;
  githubUrl?: string;
  demoUrl?: string; // We'll link to internal interactive demo
  highlights: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  credentialId?: string;
}

export interface Extracurricular {
  title: string;
  organization: string;
  description: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
}

export const resumeData = {
  name: "Likhith S Gowda",
  title: "AI & Data Science Student",
  objective: "Passionate and driven student at Sambhram Institute of Technology, actively pursuing a degree in AI & DS, where I combine theoretical knowledge with hands-on experience in software development throughout my academic career. I have been deeply involved in various hackathons and technical projects, that have allowed me to apply my skills in real-world scenarios.",
  contact: {
    email: "likhithsgowda11@gmail.com",
    phone: "+91 7996502991",
    location: "Bengaluru, India",
    linkedin: "https://www.linkedin.com/in/likhith-s-gowda",
  } as ContactInfo,
  education: [
    {
      school: "Sambhram Institute of Technology",
      degree: "B.E in Artificial Intelligence and Data Science",
      score: "CGPA: 7.5",
      year: "2022 - 2026",
      details: "Actively studying core subjects including Machine Learning, Deep Learning, Natural Language Processing, Big Data Analytics, and Advanced Database Management Systems. Participant in multiple college-level and inter-college hackathons.",
    },
    {
      school: "HKS Pre-University College",
      degree: "XII (STATE) - Science stream",
      score: "Percentage: 83%",
      year: "2020 - 2022",
      details: "Focused on Physics, Chemistry, Mathematics, and Computer Science.",
    },
    {
      school: "Nitte International School",
      degree: "X (CBSE)",
      score: "Percentage: 69%",
      year: "2020",
      details: "Foundation study with active participation in science exhibitions and co-curricular sports.",
    },
  ] as Education[],
  skills: [
    {
      category: "Programming Languages",
      icon: "Code2",
      skills: [
        { name: "Python", level: 90 },
        { name: "C++", level: 80 },
        { name: "C", level: 75 },
      ],
    },
    {
      category: "Database Technologies",
      icon: "Database",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 75 },
      ],
    },
    {
      category: "Data Visualization & Analytics",
      icon: "BarChart3",
      skills: [
        { name: "Power BI", level: 85 },
        { name: "Microsoft Excel", level: 80 },
      ],
    },
    {
      category: "Cloud Technologies",
      icon: "Cloud",
      skills: [
        { name: "Microsoft Azure", level: 75 },
      ],
    },
    {
      category: "Soft Skills",
      icon: "Sparkles",
      skills: [
        { name: "Critical Thinking", level: 90 },
        { name: "Time Management", level: 85 },
        { name: "Team Collaboration", level: 95 },
      ],
    },
  ] as SkillCategory[],
  projects: [
    {
      id: "product-checker",
      title: "Product Availability Checker",
      description: "A Python-based tracking system to monitor real-time product stock levels across multiple e-commerce platforms, solving the issue of tracking item inventories for customers and retailers. Coupled with a lively Power BI dashboard representing scraped information trends.",
      tags: ["Python", "Web Scraping", "Power BI", "Data Visualization", "Automation"],
      role: "Lead Developer",
      highlights: [
        "Enabled tracking of real-time inventory levels across multiple online marketplaces.",
        "Integrated dynamic visual reporting models with Power BI metrics.",
        "Improved stock visibility for customers, preventing stockout frustrations.",
      ],
    },
    {
      id: "healthcare-chatbot",
      title: "Healthcare Assistant Chatbot",
      description: "An AI-powered conversational chatbot to assist patients with answering basic health wellness queries and streamlining the clinic appointment scheduling workflow.",
      tags: ["Python", "Natural Language Processing (NLP)", "Chatbot", "AI & ML", "Patient Engagement"],
      role: "NLP Engineer & Developer",
      highlights: [
        "Built custom dialog-flow handlers with local NLP libraries to match client queries.",
        "Simulated 24/7 client booking and medical reference system with high responsiveness.",
        "Greatly streamlined patient-to-doctor connection flows.",
      ],
    },
  ] as Project[],
  certifications: [
    {
      title: "Microsoft Certified: Azure Data Fundamentals",
      issuer: "Microsoft",
      year: "2024",
      credentialId: "DP-900",
    },
    {
      title: "Machine Learning Solutions & Project Internship",
      issuer: "EBTS (Enterprise Business & Technology Solutions)",
      year: "2024",
      credentialId: "EBTS-ML-2024",
    },
    {
      title: "AI and Data Skills Project Internship",
      issuer: "Ybi Foundation",
      year: "2023",
      credentialId: "YBI-AI-DS-2023",
    },
  ] as Certification[],
  extracurriculars: [
    {
      title: "National-Level 24-Hour Hackathon Participant",
      organization: "BIT College (Bangalore Institute of Technology)",
      description: "Collaborated under high pressure with a 4-member team to design and pitch an innovative software solution within 24 hours.",
    },
    {
      title: "8-Hour Hack-a-Idea Hackathon",
      organization: "Atria College",
      description: "Pitched a rapid prototype concept resolving urban automation issues, gaining exposure to modern design sprints and mentorship.",
    },
  ] as Extracurricular[],
};
