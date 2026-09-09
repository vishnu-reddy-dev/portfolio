import React from 'react';
import { experienceData } from '../data/experience';
import { Briefcase, Calendar, MapPin, CheckCircle2, Clock } from 'lucide-react';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        {/* Section Header */}
        <div className="experience-header reveal-on-scroll">
          <div className="section-tag">
            <Briefcase size={16} />
            <span>03 / Experience</span>
          </div>
          <h2 className="section-title">Professional Experience.</h2>
          <p className="section-description">
            Industry experience engineering enterprise Java applications, REST APIs, and scalable web solutions.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="timeline-container">
          <div className="timeline-line" />

          {experienceData.map((item) => (
            <div key={item.id} className="timeline-item reveal-on-scroll">
              <div className="timeline-marker">
                <span className="marker-dot" />
              </div>

              <div className="timeline-card">
                <div className="card-top">
                  <div className="role-group">
                    <h3 className="role-title">{item.role}</h3>
                    <h4 className="company-name">{item.company}</h4>
                  </div>
                  <div className="meta-group">
                    <span className="meta-item">
                      <Calendar size={14} />
                      {item.period}
                    </span>
                    {item.totalDuration && (
                      <span className="meta-item">
                        <Clock size={14} />
                        {item.totalDuration}
                      </span>
                    )}
                    <span className="badge">{item.type}</span>
                  </div>
                </div>

                <p className="timeline-desc">{item.description}</p>

                {/* Responsibilities */}
                <div className="responsibilities-block">
                  <h5 className="block-label">Key Responsibilities &amp; Engineering Contributions:</h5>
                  <ul className="responsibilities-list">
                    {item.responsibilities.map((resp, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={16} className="list-icon" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Badge Group */}
                <div className="timeline-tech-group">
                  {item.technologies.map((tech, idx) => (
                    <span key={idx} className="badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
