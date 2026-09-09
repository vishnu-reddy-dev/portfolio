import React from 'react';
import { UserCheck, FileText, Cpu, ShieldCheck, Zap } from 'lucide-react';
import { getExperienceDuration } from '../utils/experience';
import './About.css';

export default function About() {
  const duration = getExperienceDuration("2025-04-03");

  const handleResumeDownload = (e) => {
    // Check if resume file exists / handle graceful fallback if clicked before PDF is placed in public/
    fetch('/resume.pdf', { method: 'HEAD' })
      .then((res) => {
        if (!res.ok) {
          alert('Resume file is ready to be linked! Please place your resume.pdf file into the public/ directory.');
        }
      })
      .catch(() => {
        // Allow default download behavior
      });
  };

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

        {/* Two Column Layout */}
        <div className="about-grid">
          {/* Left Column: Image & Decorative Frame */}
          <div className="about-image-column reveal-on-scroll">
            <div className="image-frame">
              <img
                src="/images/profile-vishnu.jpg"
                alt="M. Vishnu Vardhan Reddy - Java Full Stack Developer"
                className="profile-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/profile-vishnu.png';
                }}
              />
              <div className="image-border-accent" />
            </div>
          </div>

          {/* Right Column: Bio & Core Focus */}
          <div className="about-content-column reveal-on-scroll">
            <h3 className="about-subtitle">
              Java Full Stack Developer with {duration.full} of Professional Experience.
            </h3>

            <p className="about-paragraph">
              I am M. Vishnu Vardhan Reddy, working as an Associate Software Engineer at Speshway Solutions Pvt. Ltd. I specialize in enterprise-grade web application development using Core Java, Spring Boot, Spring MVC, Spring Data JPA, and Hibernate, integrated with MySQL and PostgreSQL databases.
            </p>

            <p className="about-paragraph">
              My core expertise spans building secure REST APIs with Spring Security and JWT authentication, frontend development with React.js and Next.js, full-stack application design, performance optimization, and object-oriented design within Agile/Scrum environments.
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
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                onClick={handleResumeDownload}
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
              Designing robust RESTful microservices, object-relational mapping (Hibernate/JPA), and scalable business logic in Spring Boot.
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
