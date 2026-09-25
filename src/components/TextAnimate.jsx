import React from 'react';
import './TextAnimate.css';

/**
 * TextAnimate — slideUp by word
 *
 * Splits `children` (a plain string) into words and animates each one
 * upward with a staggered delay. Runs once on mount, then stays static.
 *
 * Props:
 *   children    {string}  — text to animate
 *   delay       {number}  — base delay in seconds before first word (default 0)
 *   stagger     {number}  — per-word stagger in seconds (default 0.07)
 *   className   {string}  — extra class on the wrapper span
 *   as          {string}  — wrapper element tag (default "span")
 */
export default function TextAnimate({
  children = '',
  delay = 0,
  stagger = 0.07,
  className = '',
  as: Component = 'span',
}) {
  const words = String(children).split(' ').filter(Boolean);

  return (
    <Component
      className={`text-animate ${className}`}
      aria-label={children}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="text-animate-word"
          aria-hidden="true"
        >
          <span
            className="text-animate-word-inner"
            style={{
              animationDelay: `${delay + i * stagger}s`,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </Component>
  );
}
