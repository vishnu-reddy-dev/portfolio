import React from 'react';
import { ArrowDown, FileText, Send, Mail, Code, Terminal, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, NaukriIcon } from './BrandIcons';
import './Hero.css';

export default function Hero() {
  const handleResumeDownload = () => {
    fetch('/resume.pdf', { method: 'HEAD' })
      .then((res) => {
        if (!res.ok) {
          alert('Resume file is ready to be linked! Please place your resume.pdf file into the public/ directory.');
        }
      })
      .catch(() => { });
  };

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
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              onClick={handleResumeDownload}
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
                href="mailto:vishnumatamala10@gmail.com"
                className="btn-icon"
                aria-label="Email Contact"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Animated Visual Hero Graphic */}
        <div className="hero-visual reveal-on-scroll">
          <div className="hero-visual-card">
            <div className="card-header">
              <div className="card-dots">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <span className="card-filename">VishnuReddy.java</span>
            </div>

            <div className="card-body">
              <pre className="code-block">
                <code>
                  <span className="keyword">public class</span> <span className="class-name">Developer</span> &#123;<br />
                  &nbsp;&nbsp;<span className="keyword">private final String</span> name = <span className="string">"M. Vishnu Vardhan Reddy"</span>;<br />
                  &nbsp;&nbsp;<span className="keyword">private final String</span> title = <span className="string">"Associate Software Engineer"</span>;<br />
                  &nbsp;&nbsp;<span className="keyword">private final String[]</span> coreStack = &#123;<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"Java"</span>, <span className="string">"Spring Boot"</span>, <span className="string">"React.js"</span>, <span className="string">"MySQL"</span><br />
                  &nbsp;&nbsp;&#125;;<br /><br />
                  &nbsp;&nbsp;<span className="keyword">public void</span> <span className="function">buildEnterpriseApps</span>() &#123;<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="type">System</span>.out.println(<span className="string">"Engineering scalable backend services &amp; modern UIs."</span>);<br />
                  &nbsp;&nbsp;&#125;<br />
                  &#125;
                </code>
              </pre>
            </div>

            {/* Floating Tech Badges */}
            <div className="floating-badge badge-top">
              <Terminal size={14} />
              <span>Spring Boot</span>
            </div>
            <div className="floating-badge badge-bottom">
              <Code size={14} />
              <span>React.js &amp; Next.js</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
