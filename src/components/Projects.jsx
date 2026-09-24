import React, { useState } from 'react';
import { projectsData, projectCategories } from '../data/projects';
import ProjectCard from './ProjectCard';
import { FolderGit2 } from 'lucide-react';
import './Projects.css';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredProjects = activeCategory === 'ALL'
    ? projectsData
    : projectsData.filter((project) => project.categories.includes(activeCategory));

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="projects-header reveal-on-scroll">
          <div>
            <div className="section-tag">
              <FolderGit2 size={16} />
              <span>04 / Portfolio</span>
            </div>
            <h2 className="section-title">Selected Projects.</h2>
            <p className="section-description">
              A collection of scalable full-stack applications, enterprise Java services, and modern React interfaces built with clean architecture. Click any card to view its dedicated project page.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="project-filters" role="tablist" aria-label="Project Category Filters">
            {projectCategories.map((category) => (
              <button
                key={category}
                role="tab"
                aria-selected={activeCategory === category}
                className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
                {category === 'ALL' && <span className="filter-count">({projectsData.length})</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="projects-empty">
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}

