import { getExperienceDuration } from '../utils/experience';

const duration = getExperienceDuration("2025-04-03");

export const experienceData = [
  {
    id: 1,
    role: "Associate Software Engineer",
    company: "Speshway Solutions Pvt. Ltd.",
    location: "Andhra Pradesh, India",
    period: "April 2025 – Present",
    totalDuration: duration.full,
    shortDuration: duration.short,
    type: "Full-time",
    description: "Engineered and maintained enterprise-level Java Full Stack applications supporting core business operations.",
    responsibilities: [
      "Developed Java Full Stack applications using Java, Spring Boot, JavaScript, REST APIs, and MySQL.",
      "Built Smart Office Management modules and a Multi-Tenant SaaS CRM with RBAC and tenant-specific configurations.",
      "Integrated REST APIs for frontend-backend and third-party connectivity.",
      "Optimized SQL queries and API performance to improve application responsiveness.",
      "Collaborated in Agile teams to deliver production-ready features and resolve issues.",
      "Managed Git, GitHub, Maven, and cloud deployments, ensuring reliable releases."
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
      "JavaScript",
      "HTML5",
      "CSS3",
      "Git",
      "GitHub",
      "Maven"
    ]
  }
];
