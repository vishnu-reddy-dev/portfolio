import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, NaukriIcon } from './BrandIcons';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* Top Footer Row */}
        <div className="footer-top">
          <div className="footer-brand-group">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToTop(); }} className="footer-brand">
              <span className="brand-name">Vishnu Reddy</span>
            </a>
            <p className="footer-tagline">Associate Software Engineer | Java Full Stack Developer</p>
          </div>

          {/* Social Links */}
          <div className="footer-socials">
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

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="btn-icon scroll-top-btn"
            aria-label="Scroll to top of page"
            title="Back to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>

        {/* Bottom Copyright Row */}
        <div className="footer-bottom">
          <p className="copyright-text">
            &copy; 2026 M. Vishnu Vardhan Reddy. All rights reserved.
          </p>
          <p className="footer-subtext">
            Associate Software Engineer | Java Full Stack Developer
          </p>
        </div>
      </div>
    </footer>
  );
}
