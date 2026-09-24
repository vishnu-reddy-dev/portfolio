import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { TiltCard } from '@/components/unlumen-ui/tilt-card';
import './ProjectCard.css';

export default function ProjectCard({ project }) {
  const { id, number, title, description, image, technologies = [] } = project;

  return (
    <TiltCard
      title={title}
      description={description}
      price={number}
      imageSrc={image}
      imageAlt={title}
      href={`/project/${id}`}
      tiltProps={{ rotationFactor: 12 }}
    >
      <div className="project-card-custom-body">
        {technologies.length > 0 && (
          <div className="project-tech-pills">
            {technologies.slice(0, 4).map((tech) => (
              <span key={tech} className="tech-pill">
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="project-card-footer-cta">
          <span>View Full Details</span>
          <ArrowUpRight size={16} className="arrow-icon" />
        </div>
      </div>
    </TiltCard>
  );
}

