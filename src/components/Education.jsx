import React from 'react';
import { educationData } from '../data/education';
import { GraduationCap, Calendar, MapPin, Award, Building2 } from 'lucide-react';
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
          <h2 className="section-title">Academic Background.</h2>
          <p className="section-description">
            Academic qualifications and educational background from secondary school to undergraduate engineering degree.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="education-cards-grid">
          {educationData.map((item) => (
            <div key={item.id} className="edu-card reveal-on-scroll">
              <div className="edu-card-header">
                <span className="edu-category-pill">{item.category}</span>
                <span className="edu-grade-pill">
                  <Award size={13} />
                  {item.grade}
                </span>
              </div>

              <div className="edu-card-body">
                <div className="edu-icon-badge">
                  <GraduationCap size={22} />
                </div>
                <h3 className="edu-degree-title">{item.degree}</h3>
                <p className="edu-institution-title">
                  <Building2 size={14} className="institution-icon" />
                  {item.institution}
                </p>
                {item.affiliation && (
                  <span className="edu-affiliation-tag">Affiliation: {item.affiliation}</span>
                )}
              </div>

              <div className="edu-card-footer">
                <span className="edu-footer-meta">
                  <Calendar size={13} />
                  {item.duration}
                </span>
                <span className="edu-footer-meta">
                  <MapPin size={13} />
                  {item.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
