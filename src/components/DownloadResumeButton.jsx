import React from 'react';
import './DownloadResumeButton.css';

export default function DownloadResumeButton({
  href = "/resume.pdf",
  download = "M_Vishnu_Vardhan_Reddy_Resume.pdf",
  className = ""
}) {
  return (
    <a
      href={href}
      download={download}
      className={`dl-button ${className}`}
      aria-label="Download Resume"
    >
      {/* Label */}
      <span>Download Resume</span>

      {/* Icon — jello animates on hover via CSS */}
      <span className="dl-button-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Document body */}
          <path
            d="M4 2C4 1.44772 4.44772 1 5 1H14L20 7V22C20 22.5523 19.5523 23 19 23H5C4.44772 23 4 22.5523 4 22V2Z"
            fill="white"
            fillOpacity="0.15"
            stroke="white"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          {/* Folded corner */}
          <path
            d="M14 1L20 7H15C14.4477 7 14 6.55228 14 6V1Z"
            fill="white"
            fillOpacity="0.35"
            stroke="white"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          {/* Down arrow shaft */}
          <line
            x1="12" y1="10" x2="12" y2="17"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Arrow head */}
          <polyline
            points="9,14.5 12,17.5 15,14.5"
            fill="none"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  );
}
