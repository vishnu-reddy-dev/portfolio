import React from 'react';
import './BorderBeam.css';

export default function BorderBeam({
  size = 120,
  duration = 4,
  borderWidth = 1.5,
  colorFrom = "#10b981",
  colorTo = "#6366f1",
  delay = 0,
  className = ""
}) {
  const style = {
    '--beam-duration': `${duration}s`,
    '--beam-delay': `${delay}s`,
    '--beam-border-width': `${borderWidth}px`,
    '--beam-color-from': colorFrom,
    '--beam-color-to': colorTo,
  };

  return (
    <div 
      className={`border-beam-container ${className}`} 
      style={style} 
      aria-hidden="true"
    >
      <div className="border-beam-light" />
    </div>
  );
}
