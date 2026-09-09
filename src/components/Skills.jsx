import React from 'react';
import { skillsData } from '../data/skills';
import {
  Code, Palette, FileCode, Atom, Layout,
  Coffee, Cpu, Layers, Network, Database,
  Server, HardDrive, GitBranch, Terminal,
  Box, Send, Wrench, CheckCircle2, ShieldCheck, Key,
  Cloud, RefreshCw, Users
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import './Skills.css';

// Map icon names to Lucide Icon components
const iconMap = {
  Code, Palette, FileCode, Atom, Layout,
  Coffee, Cpu, Layers, Network, Database,
  Server, HardDrive, GitBranch, Github: GithubIcon, Terminal,
  Box, Send, CheckCircle2, ShieldCheck, Key,
  Cloud, RefreshCw, Users
};

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="skills-header reveal-on-scroll">
          <div className="section-tag">
            <Wrench size={16} />
            <span>02 / Technical Skills</span>
          </div>
          <h2 className="section-title">Skills &amp; Tech Stack.</h2>
          <p className="section-description">
            Technical skills and tools from my resume, categorized across full-stack development, database management, and cloud deployment.
          </p>
        </div>

        {/* Skill Category Cards */}
        <div className="skills-categories-grid">
          {skillsData.map((categoryGroup, index) => (
            <div key={index} className="skill-category-card reveal-on-scroll">
              <div className="category-header">
                <h3 className="category-title">{categoryGroup.category}</h3>
                <p className="category-desc">{categoryGroup.description}</p>
              </div>

              <div className="skills-chips-grid">
                {categoryGroup.skills.map((skill, skillIdx) => {
                  const IconComp = iconMap[skill.icon] || CheckCircle2;
                  return (
                    <div key={skillIdx} className="skill-chip">
                      <IconComp size={16} className="skill-chip-icon" />
                      <span className="skill-chip-name">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
