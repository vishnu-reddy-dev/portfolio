import React from 'react';
import { educationData } from '../data/education';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import './Education.css';

export default function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        {/* Section Header */}
        <div className="education-header reveal-on-scroll">
          <div className="section-tag">
            <GraduationCap size={16} />
            <span>05 / Education</span>
          </div>
          <h2 className="section-title">Education.</h2>
          <p className="section-description">
            Academic qualifications and educational background from high school to undergraduate engineering degree.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="education-grid">
          {educationData.map((item) => (
            <div key={item.id} className="education-card reveal-on-scroll">
              <div className="edu-top">
                <div className="edu-degree-group">
                  <div className="edu-badge-icon">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="edu-degree">{item.degree}</h3>
                    {item.affiliation && (
                      <span className="edu-affiliation">Affiliated to {item.affiliation}</span>
                    )}
                  </div>
                </div>

                <div className="edu-meta">
                  <span className="meta-item">
                    <Calendar size={14} />
                    {item.duration}
                  </span>
                  <span className="meta-item">
                    <MapPin size={14} />
                    {item.location}
                  </span>
                  <span className="badge grade-badge">
                    <Award size={13} />
                    {item.grade}
                  </span>
                </div>
              </div>

              <div className="edu-institution-info">
                <p className="institution-name">{item.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
