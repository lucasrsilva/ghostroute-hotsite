import React from 'react';

interface GhostIconProps {
  className?: string;
  size?: number;
}

export const GhostIcon: React.FC<GhostIconProps> = ({ className = '', size = 40 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="ghostGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(187 85% 53%)" />
          <stop offset="100%" stopColor="hsl(187 85% 70%)" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <path
        d="M50 10C30 10 15 28 15 50V85L25 75L35 85L45 75L55 85L65 75L75 85L85 75V50C85 28 70 10 50 10Z"
        stroke="url(#ghostGradient)"
        strokeWidth="3"
        fill="none"
        filter="url(#glow)"
        opacity="0.9"
      />
      <circle cx="38" cy="42" r="6" fill="url(#ghostGradient)" opacity="0.8" />
      <circle cx="62" cy="42" r="6" fill="url(#ghostGradient)" opacity="0.8" />
    </svg>
  );
};
