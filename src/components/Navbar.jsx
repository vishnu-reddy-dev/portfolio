import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import RainbowButton from './RainbowButton';
import './Navbar.css';

const navLinks = [
  { name: 'Home',       href: '#home' },
  { name: 'About',      href: '#about' },
  { name: 'Skills',     href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects',   href: '#projects' },
  { name: 'Education',  href: '#education' },
  { name: 'Contact',    href: '#contact' },
];

export default function Navbar() {
  const [isScrolled,      setIsScrolled]      = useState(false);
  const [mobileMenuOpen,  setMobileMenuOpen]  = useState(false);
  const [activeSection,   setActiveSection]   = useState('home');
  const navigate  = useNavigate();
  const location  = useLocation();

  /* ── Scroll shadow ── */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ── Active section highlight ── */
  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('');
      return;
    }
    const sections = navLinks
      .map(link => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );
    sections.forEach(s => observer.observe(s));
    return () => sections.forEach(s => observer.unobserve(s));
  }, [location.pathname]);

  /* ── Lock body scroll when drawer open ── */
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  /* ── Close drawer on resize to desktop ── */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 990 && mobileMenuOpen) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  /* ── Close drawer on ESC ── */
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape' && mobileMenuOpen) setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) {
          window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 85, behavior: 'smooth' });
        }
      }, 100);
      return;
    }
    const el = document.querySelector(href);
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 85, behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">

        {/* Brand */}
        <a href="#home" className="navbar-brand" onClick={() => handleNavClick('#home')}>
          <span className="brand-name">Vishnu Reddy</span>
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map(link => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                  onClick={e => { e.preventDefault(); handleNavClick(link.href); }}
                >
                  {link.name}
                  {activeSection === link.href.substring(1) && <span className="active-dot" />}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className="navbar-actions">
          <RainbowButton
            href="#contact"
            className="rainbow-button-sm desktop-only"
            onClick={e => { e.preventDefault(); handleNavClick('#contact'); }}
          >
            <span>Contact Me</span>
            <ArrowUpRight size={16} />
          </RainbowButton>

          <button
            className="mobile-toggle"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`} aria-hidden={!mobileMenuOpen}>
        <div className="mobile-drawer-header">
          <a href="#home" className="navbar-brand" onClick={() => handleNavClick('#home')}>
            <span className="brand-name">Vishnu Reddy</span>
          </a>
          <div className="mobile-drawer-actions">
            <button className="mobile-toggle" onClick={toggleMobileMenu} aria-label="Close Menu">
              <X size={26} />
            </button>
          </div>
        </div>

        <nav className="mobile-nav">
          <ul className="mobile-nav-list">
            {navLinks.map((link, idx) => (
              <li key={link.name} style={{ animationDelay: `${0.1 + idx * 0.05}s` }}>
                <a
                  href={link.href}
                  className={`mobile-nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                  onClick={e => { e.preventDefault(); handleNavClick(link.href); }}
                >
                  <span className="mobile-nav-num">0{idx + 1}.</span>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mobile-drawer-footer">
          <p className="mobile-subtitle">Associate Software Engineer | Java Full Stack</p>
          <a
            href="#contact"
            className="btn btn-primary w-full"
            onClick={e => { e.preventDefault(); handleNavClick('#contact'); }}
          >
            Contact Me
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}
