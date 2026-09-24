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
      "Engineered and maintained enterprise-level Java Full Stack applications using Spring Boot, JavaScript, HTML, CSS, REST APIs, and MySQL to support core business operations.",
      "Developed key modules for a Smart Office Management System, streamlining internal workflows and improving operational efficiency across departments.",
      "Designed a Multi-Tenant SaaS-based CRM platform with role-based access control and tenant-specific configurations, enabling scalable multi-client deployment.",
      "Integrated RESTful APIs to enable seamless frontend-backend communication and third-party system connectivity.",
      "Optimized database queries to reduce page load and API response times while collaborating with cross-functional Agile teams to deliver production-ready features on schedule.",
      "Managed source control and deployment workflows using Git, GitHub, and Maven alongside cloud-based deployment pipelines, ensuring clean releases and repeatable builds.",
      "Diagnosed and resolved production issues through debugging and performance tuning, enhancing application stability and reliability."
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
