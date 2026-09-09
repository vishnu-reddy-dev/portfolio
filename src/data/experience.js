import { getExperienceDuration } from '../utils/experience';

const duration = getExperienceDuration("2025-04-03");

export const experienceData = [
  {
    id: 1,
    role: "Associate Software Engineer",
    company: "Speshway Solutions Pvt. Ltd.",
    location: "India",
    period: "April 3, 2025 - Present",
    totalDuration: duration.full,
    shortDuration: duration.short,
    type: "Full-time",
    description: "Engineered and maintained enterprise-level Java Full Stack applications supporting core business operations.",
    responsibilities: [
      "Engineered and maintained enterprise-level Java Full Stack applications using Spring Boot, JavaScript, HTML, CSS, REST APIs, and MySQL.",
      "Built core modules for a Smart Office Management System, streamlining organizational workflows.",
      "Developed a Multi-Tenant SaaS CRM platform featuring role-based access control and tenant-specific configurations for isolated client environments.",
      "Designed and integrated RESTful APIs to facilitate efficient frontend-backend communication and third-party system integrations.",
      "Participated actively in Agile sprint cycles, delivering production-ready features on schedule.",
      "Optimized database queries and backend application logic to enhance system responsiveness and application performance.",
      "Utilized Git, GitHub, Maven, and cloud deployment workflows for version control and deployment pipelines.",
      "Diagnosed and resolved production issues through systematic debugging and performance tuning."
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "Spring Data JPA",
      "Hibernate",
      "REST APIs",
      "Spring Security",
      "JWT Authentication",
      "MySQL",
      "PostgreSQL",
      "React.js",
      "Next.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Git",
      "Maven"
    ]
  }
];
