import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import './ProjectCard.css';

export default function ProjectCard({ project, onClick }) {
  const { number, title, image, categories = [] } = project;

  return (
    <article
      className="project-card reveal-on-scroll"
      onClick={() => onClick(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(project);
        }
      }}
      aria-label={`View details for ${title}`}
    >
      {/* Project Image Container */}
      <div className="project-image-wrapper">
        <img
          src={image}
          alt={title}
          className="project-image"
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop';
          }}
        />
        <div className="project-image-overlay" />
        <div className="project-number-badge">{number}</div>
      </div>

      {/* Project Minimal Card Header & Footer */}
      <div className="project-content">
        <header className="project-header">
          {categories.length > 0 && (
            <span className="project-category-sub">
              {categories.join(' • ')}
            </span>
          )}
          <h3 className="project-title">{title}</h3>
        </header>

        <div className="project-card-footer">
          <span className="view-details-text">
            <span>View Details</span>
            <ArrowUpRight size={16} className="arrow-icon" />
          </span>
        </div>
      </div>
    </article>
  );
}
