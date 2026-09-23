import React from 'react';
import { ArrowDown, FileText, Send, Mail, Code, Terminal, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, NaukriIcon } from './BrandIcons';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero-section bg-grid-pattern">
      {/* Background Ambient Glow */}
      <div className="hero-glow" />

      <div className="container hero-container">
        <div className="hero-content">
          {/* Status Badge */}
          <div className="hero-badge reveal-on-scroll">
            <span className="pulse-indicator" />
            <Sparkles size={14} className="sparkle-icon" />
            <span>Available for Opportunities</span>
          </div>

          {/* Main Title */}
          <h1 className="hero-title reveal-on-scroll">
            <span className="hero-name">M. Vishnu Vardhan Reddy</span>
            <span className="hero-role">Associate Software Engineer | Java Full Stack Developer</span>
          </h1>

          {/* Intro Description */}
          <p className="hero-intro reveal-on-scroll">
            Java Full Stack Developer with 1 Year 5 Months of experience building secure, scalable enterprise web applications using Java, Spring Boot, REST APIs, MySQL, PostgreSQL, React.js, and Next.js.
          </p>

          {/* Action CTAs */}
          <div className="hero-actions reveal-on-scroll">
            <a href="#projects" className="btn btn-primary">
              <span>View Projects</span>
              <ArrowDown size={18} />
            </a>

            <a href="#contact" className="btn btn-secondary">
              <Send size={18} />
              <span>Contact Me</span>
            </a>

            <a
              href="/resume.pdf"
              download="M_Vishnu_Vardhan_Reddy_Resume.pdf"
              className="btn btn-secondary"
            >
              <FileText size={18} />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="hero-socials reveal-on-scroll">
            <span className="socials-label">Connect:</span>
            <div className="socials-group">
              <a
                href="https://github.com/vishnu-reddy000"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/matamalavishnu/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={20} />
              </a>

              <a
                href="https://www.naukri.com/mnjuser/profile"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                aria-label="Naukri Profile"
              >
                <NaukriIcon size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Developer Portrait Visual Card */}
        <div className="hero-visual reveal-on-scroll">
          <div className="hero-portrait-card">
            <div className="portrait-image-wrapper">
              <img
                src="/images/hero-vishnu.png"
                alt="M. Vishnu Vardhan Reddy - Java Full Stack Developer"
                className="hero-portrait-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/hero-vishnu.jpg';
                }}
              />
              <div className="portrait-gradient-overlay" />
            </div>

            {/* Floating Tech Accent Badges */}
            <div className="floating-badge badge-top">
              <Terminal size={14} className="badge-icon" />
              <span>Spring Boot &amp; Java</span>
            </div>

            <div className="floating-badge badge-bottom">
              <Code size={14} className="badge-icon" />
              <span>React.js &amp; Next.js</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
