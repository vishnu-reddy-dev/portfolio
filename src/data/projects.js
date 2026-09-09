export const projectsData = [
  {
    id: 1,
    number: "01",
    title: "Multi-Tenant SaaS CRM Platform",
    description: "A scalable multi-tenant CRM platform engineered with role-based access control and tenant-specific configurations to support multiple client organizations on a single platform.",
    technologies: ["Java", "Spring Boot", "REST APIs", "MySQL", "HTML", "CSS", "JavaScript"],
    categories: ["FULL STACK", "JAVA"],
    image: "/images/smart-office.jpg",
    features: [
      "Multi-tenant architecture with role-based access control (RBAC)",
      "Tenant-specific configurations for isolated client environments"
    ],
    contribution: "Built RESTful APIs for frontend-backend communication and optimized database queries for performance.",
    businessImpact: "Enabled a single platform to scale across multiple client organizations with isolated data per tenant.",
    githubUrl: null,
    demoUrl: null,
    featured: true
  },
  {
    id: 2,
    number: "02",
    title: "Library Management System",
    description: "Digitized library operations system managing book cataloging, member registrations, issue-return workflows, and automated fine calculation.",
    technologies: ["Java", "Spring Boot", "REST APIs", "MySQL", "HTML", "CSS", "JavaScript"],
    categories: ["FULL STACK", "JAVA"],
    image: "/images/library-system.jpg",
    features: [
      "Book cataloging & catalog search",
      "Member registration",
      "Issue-return workflow",
      "Automated fine calculation"
    ],
    contribution: "Implemented RESTful APIs for catalog search and record management with optimized MySQL queries.",
    businessImpact: "Digitized manual library operations, reducing turnaround time for book issue and return.",
    githubUrl: null,
    demoUrl: null,
    featured: true
  },
  {
    id: 3,
    number: "03",
    title: "Smart Office Management System",
    description: "Full-stack administrative management application enabling employee attendance tracking, leave request workflows, task assignment, and department-wise reporting.",
    technologies: ["Java", "Spring Boot", "Servlets", "JDBC", "MySQL", "HTML5", "CSS3"],
    categories: ["FULL STACK", "JAVA"],
    image: "/images/smart-office.jpg",
    features: [
      "Employee attendance tracking",
      "Leave management",
      "Task assignment",
      "Department-wise reporting"
    ],
    contribution: "Built a full-stack application with a responsive UI, deployed on Apache Tomcat with persistent MySQL storage.",
    businessImpact: "Centralized office administration tasks, improving visibility into attendance and workload across departments.",
    githubUrl: null,
    demoUrl: null,
    featured: true
  },
  {
    id: 4,
    number: "04",
    title: "Typing Master",
    description: "Interactive real-time typing application with live WPM calculation, accuracy tracking, timed test modes, error highlighting, and leaderboard score history.",
    technologies: ["Java", "Spring Boot", "MySQL", "HTML", "CSS", "JavaScript"],
    categories: ["FULL STACK", "WEB"],
    image: "/images/type-master.jpg",
    features: [
      "Real-time typing speed test & live WPM tracking",
      "Accuracy tracking & timed test modes",
      "Multiple difficulty levels & real-time error highlighting",
      "Score history & competitive leaderboard"
    ],
    contribution: "Designed RESTful APIs and MySQL schema to calculate and persist typing metrics; built an interactive, responsive UI with dynamic DOM manipulation.",
    businessImpact: "Delivered a gamified, engaging typing practice tool that helps users track and improve typing speed and accuracy over time.",
    githubUrl: null,
    demoUrl: null,
    featured: false
  },
  {
    id: 5,
    number: "05",
    title: "Placement / Interview Preparation Platform",
    description: "Web application featuring curated question banks by topic and company, mock practice tests with instant scoring, progress dashboard, bookmarking, and searchable resource library.",
    technologies: ["Next.js", "React.js", "JavaScript", "REST APIs"],
    categories: ["FULL STACK", "REACT", "WEB"],
    image: "/images/hospital-system.jpg",
    features: [
      "Curated question bank by topic/company",
      "Mock/practice tests with instant scoring",
      "Progress dashboard & bookmarking",
      "Searchable resource library for interview preparation"
    ],
    contribution: "Built a component-based frontend using React.js and Next.js SSR for fast page loads; implemented client-side routing and REST API integration with React Hooks.",
    businessImpact: "Created a centralized, easy-to-navigate preparation platform to help job seekers and students prepare efficiently.",
    githubUrl: null,
    demoUrl: null,
    featured: true
  }
];

export const projectCategories = ["ALL", "WEB", "FULL STACK", "JAVA", "REACT"];
