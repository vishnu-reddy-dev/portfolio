import React, { useRef } from 'react';
import gsap from 'gsap';
import './DownloadResumeButton.css';

export default function DownloadResumeButton({
  href = "/resume.pdf",
  download = "M_Vishnu_Vardhan_Reddy_Resume.pdf",
  className = ""
}) {
  const buttonRef = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    const buttonEl = buttonRef.current;
    if (!buttonEl) return;

    if (buttonEl.classList.contains('animating')) {
      return;
    }

    buttonEl.classList.add('animating');

    // Trigger file download
    const link = document.createElement('a');
    link.href = href;
    link.download = download;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    const { to } = gsap;

    // Reset properties if clicking when done
    if (buttonEl.classList.contains('done')) {
      to(buttonEl, {
        '--success-o': 0,
        '--success-offset': '-12px',
        '--truck-o': 0,
        duration: 0.15
      });
      to(buttonEl, {
        '--default-o': 1,
        '--rotate': '0deg',
        '--y': '0px',
        '--truck-base-x': '-4px',
        '--box-x': '0px',
        '--box-y': '-24px',
        '--light-opacity': 1,
        '--truck-o': 0,
        duration: 0.4,
        onComplete() {
          buttonEl.classList.remove('animating', 'done');
        }
      });
      return;
    }

    // Phase 1: Rotate text out, show truck
    to(buttonEl, {
      '--rotate': '-90deg',
      '--y': '25px',
      '--default-o': 0,
      '--truck-o': 1,
      duration: 0.22
    });

    // Phase 2: Truck & Box animation timeline
    to(buttonEl, {
      keyframes: [
        { '--truck-base-x': '-4px', duration: 0.35 },
        { '--truck-base-x': '0px', duration: 0.18 },
        {
          '--truck-base-x': '60px',
          '--box-x': '-60px',
          duration: 0.5,
          onStart() {
            setTimeout(() => {
              to(buttonEl, {
                keyframes: [
                  { '--box-y': '10px', '--box-r': '-8deg', duration: 0.18 },
                  { '--box-r': '0deg', duration: 0.18 }
                ]
              });
            }, 160);
          }
        },
        { '--truck-base-x': '56px', '--box-x': '-56px', duration: 0.35 },
        { '--light-opacity': 0, duration: 0.25, delay: 0.15 }
      ],
      onComplete() {
        setTimeout(() => {
          buttonEl.classList.add('done');
          buttonEl.classList.remove('animating');

          to(buttonEl, {
            keyframes: [
              { '--rotate': '0deg', '--y': '0px', '--truck-o': 0, duration: 0.2 },
              { '--success-offset': '0px', '--success-o': 1, duration: 0.2 }
            ]
          });

          // Auto reset to default state after 3.5 seconds
          setTimeout(() => {
            to(buttonEl, {
              '--success-o': 0,
              '--success-offset': '-12px',
              '--truck-o': 0,
              duration: 0.2
            });
            to(buttonEl, {
              '--default-o': 1,
              '--rotate': '0deg',
              '--y': '0px',
              '--truck-base-x': '-4px',
              '--box-x': '0px',
              '--box-y': '-24px',
              '--light-opacity': 1,
              '--truck-o': 0,
              duration: 0.4,
              onComplete() {
                buttonEl.classList.remove('done');
              }
            });
          }, 3500);
        }, 350);
      }
    });
  };

  const handlePointerDown = () => {
    const buttonEl = buttonRef.current;
    if (!buttonEl || buttonEl.classList.contains('animating')) return;
    gsap.to(buttonEl, { '--scale': 0.96, duration: 0.12 });
  };

  const handlePointerUp = () => {
    const buttonEl = buttonRef.current;
    if (!buttonEl || buttonEl.classList.contains('animating')) return;
    gsap.to(buttonEl, { '--scale': 1, duration: 0.12 });
  };

  return (
    <button
      ref={buttonRef}
      className={`dl-button ${className}`}
      onClick={handleClick}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      aria-label="Download Resume"
    >
      {/* Default Label */}
      <div className="default">
        <div className="folder">
          <div className="top">
            <svg viewBox="0 0 24 27">
              <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,6.76353751e-17 1,0 Z" />
            </svg>
          </div>
          <div className="paper" />
        </div>
        <span>Download Resume</span>
      </div>

      {/* Truck & Box Animation Element */}
      <div className="truck">
        <div className="wheel" />
        <div className="back" />
        <div className="front" />
        <div className="box" />
      </div>

      {/* Success Label */}
      <div className="success">
        <svg viewBox="0 0 12 10">
          <polyline points="1.5 6 4.5 9 10.5 1" />
        </svg>
        <span>Downloaded!</span>
      </div>
    </button>
  );
}
