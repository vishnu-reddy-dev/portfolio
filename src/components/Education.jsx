import React from 'react';
import { educationData } from '../data/education';
import { GraduationCap } from 'lucide-react';
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
          <h2 className="section-title">Education</h2>
        </div>

        {/* Timeline Layout */}
        <div className="education-timeline-wrapper reveal-on-scroll">
          <div className="education-timeline">
            {educationData.map((item) => (
              <div key={item.id} className="timeline-item">
                <div className="timeline-dot-marker" />
                <div className="timeline-content">
                  <span className="timeline-duration">{item.duration}</span>
                  <h3 className="timeline-degree">{item.degree}</h3>
                  <p className="timeline-institution">{item.institution}</p>
                  <p className="timeline-grade">{item.grade}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
