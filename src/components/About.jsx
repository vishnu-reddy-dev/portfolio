import React from 'react';
import { UserCheck, FileText, Cpu, ShieldCheck, Zap } from 'lucide-react';
import { getExperienceDuration } from '../utils/experience';
import './About.css';

export default function About() {
  const duration = getExperienceDuration("2025-04-03");

  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Header */}
        <div className="about-header reveal-on-scroll">
          <div className="section-tag">
            <UserCheck size={16} />
            <span>01 / About Me</span>
          </div>
          <h2 className="section-title">Professional Summary.</h2>
        </div>

        {/* Full-width Bio & Core Focus Content */}
        <div className="about-content-wrapper reveal-on-scroll">
          <div className="about-content-column">
            <h3 className="about-subtitle">
              Java Full Stack Developer with {duration.full} of Professional Experience.
            </h3>

            <p className="about-paragraph">
              Java Full Stack Developer with {duration.full} of experience designing, building, and maintaining enterprise-grade web applications using Java, Spring Boot, Spring MVC, Spring Data JPA, and Hibernate. Skilled in building secure, scalable REST APIs with Spring Security and JWT Authentication, backed by MySQL and PostgreSQL, with growing expertise in React.js and Next.js for modern frontend development.
            </p>

            <p className="about-paragraph">
              Experienced in Agile/Scrum teams, using Git, GitHub, and Maven for version control and build automation. Strong foundation in clean architecture and object-oriented design, with a track record of improving application performance and delivering production-ready features on schedule.
            </p>

            {/* Core Pillars Grid */}
            <div className="stats-grid">
              <div className="stat-card">
                <span className="stat-number">{duration.short}</span>
                <span className="stat-label">Industry Experience</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">Full Stack</span>
                <span className="stat-label">Java &amp; React Ecosystem</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">Agile</span>
                <span className="stat-label">Production Delivery</span>
              </div>
            </div>

            {/* Action CTA */}
            <div className="about-actions">
              <a
                href="/resume.pdf"
                download="M_Vishnu_Vardhan_Reddy_Resume.pdf"
                className="btn btn-primary"
              >
                <FileText size={18} />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>

        {/* 3 Key Engineering Highlights */}
        <div className="feature-cards-grid">
          <div className="feature-card reveal-on-scroll">
            <div className="feature-icon">
              <Cpu size={24} />
            </div>
            <h4 className="feature-title">Backend &amp; REST APIs</h4>
            <p className="feature-desc">
              Designing robust RESTful APIs, object-relational mapping (Hibernate/JPA), and scalable business logic in Spring Boot.
            </p>
          </div>

          <div className="feature-card reveal-on-scroll">
            <div className="feature-icon">
              <ShieldCheck size={24} />
            </div>
            <h4 className="feature-title">Security &amp; Architecture</h4>
            <p className="feature-desc">
              Implementing Spring Security, JWT authentication, multi-tenant isolation, role-based access control, and clean object-oriented architecture.
            </p>
          </div>

          <div className="feature-card reveal-on-scroll">
            <div className="feature-icon">
              <Zap size={24} />
            </div>
            <h4 className="feature-title">Frontend &amp; Performance</h4>
            <p className="feature-desc">
              Building responsive frontend interfaces with React.js and Next.js while optimizing MySQL database queries and API response times.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
