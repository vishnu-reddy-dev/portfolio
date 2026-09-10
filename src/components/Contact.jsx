import React, { useState } from 'react';
import { Mail, Phone, Send, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message cannot be empty.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'submitting') return;
    if (!validateForm()) return;

    setStatus('submitting');

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'fddb70b8-f73f-46d6-8da9-db2c070000ba';

    try {
      const web3FormData = new FormData();
      web3FormData.append('access_key', accessKey);
      web3FormData.append('name', formData.name.trim());
      web3FormData.append('email', formData.email.trim());
      web3FormData.append('subject', formData.subject.trim() || `New Portfolio Message from ${formData.name.trim()}`);
      web3FormData.append('message', formData.message.trim());
      web3FormData.append('from_name', formData.name.trim());

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: web3FormData
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 6000);
      } else {
        console.error('Web3Forms submit error:', data);
        setStatus('error');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="contact-header reveal-on-scroll">
          <div className="section-tag">
            <MessageSquare size={16} />
            <span>07 / Contact</span>
          </div>
          <h2 className="section-title">
            Get In Touch.
          </h2>
          <p className="section-description">
            Feel free to reach out for software engineering roles, project discussions, or technology inquiries.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Contact Info Cards */}
          <div className="contact-cards-column reveal-on-scroll">
            <a
              href="mailto:vishnumatamala10@gmail.com"
              className="contact-info-card"
            >
              <div className="contact-icon-wrapper">
                <Mail size={22} />
              </div>
              <div>
                <span className="contact-card-label">Email</span>
                <span className="contact-card-value">vishnumatamala10@gmail.com</span>
              </div>
            </a>

            <a
              href="tel:+918074407095"
              className="contact-info-card"
            >
              <div className="contact-icon-wrapper">
                <Phone size={22} />
              </div>
              <div>
                <span className="contact-card-label">Phone</span>
                <span className="contact-card-value">+91 80744 07095</span>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/matamalavishnu/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info-card"
            >
              <div className="contact-icon-wrapper">
                <LinkedinIcon size={22} />
              </div>
              <div>
                <span className="contact-card-label">LinkedIn</span>
                <span className="contact-card-value">linkedin.com/in/matamalavishnu</span>
              </div>
            </a>

            <a
              href="https://github.com/vishnu-reddy000"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info-card"
            >
              <div className="contact-icon-wrapper">
                <GithubIcon size={22} />
              </div>
              <div>
                <span className="contact-card-label">GitHub</span>
                <span className="contact-card-value">github.com/vishnu-reddy000</span>
              </div>
            </a>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-column reveal-on-scroll">
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              {status === 'success' && (
                <div className="form-alert success">
                  <CheckCircle size={20} />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}

              {status === 'error' && (
                <div
                  className="form-alert error"
                  style={{
                    background: 'rgba(239, 68, 68, 0.1)',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    color: '#ef4444',
                    padding: '1rem',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '1rem'
                  }}
                >
                  <AlertCircle size={20} />
                  <span>Unable to send your message. Please try again.</span>
                </div>
              )}

              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Your Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  className={`form-input ${errors.name ? 'invalid' : ''}`}
                  disabled={status === 'submitting'}
                />
                {errors.name && (
                  <span className="form-error">
                    <AlertCircle size={14} />
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Your Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. john@example.com"
                  className={`form-input ${errors.email ? 'invalid' : ''}`}
                  disabled={status === 'submitting'}
                />
                {errors.email && (
                  <span className="form-error">
                    <AlertCircle size={14} />
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Job Opportunity / Project Discussion"
                  className="form-input"
                  disabled={status === 'submitting'}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Your Message <span className="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, timeline, or job opportunity..."
                  className={`form-input ${errors.message ? 'invalid' : ''}`}
                  disabled={status === 'submitting'}
                />
                {errors.message && (
                  <span className="form-error">
                    <AlertCircle size={14} />
                    {errors.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn btn-primary w-full"
              >
                {status === 'submitting' ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
