'use client';

import React, { useState } from 'react';

export default function BrandLogo({ 
  height = 38, 
  size, 
  textColor = '#0F172A', 
  inBadge = false, 
  className = '' 
}) {
  const [imgError, setImgError] = useState(false);
  
  // Use height prop or fallback to size (defaulting to 38px height for a prominent logo)
  const logoHeight = height || size || 38;

  return (
    <div
      className={`brand-logo-container ${inBadge ? 'brand-logo-white-badge' : ''} ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
        lineHeight: 1
      }}
    >
      {!imgError ? (
        <img
          src="/logo.png"
          alt="FX Master"
          style={{
            height: `${logoHeight}px`,
            width: 'auto',
            maxHeight: `${logoHeight}px`,
            objectFit: 'contain',
            display: 'block'
          }}
          onError={() => {
            // Fallback only if /logo.png fails to load
            setImgError(true);
          }}
        />
      ) : (
        <svg
          height={logoHeight}
          viewBox="0 0 160 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: 'block', height: `${logoHeight}px`, width: 'auto' }}
        >
          <defs>
            <linearGradient id="fxOrangeGrad" x1="6" y1="38" x2="22" y2="10" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F34602" />
              <stop offset="60%" stopColor="#F34602" />
              <stop offset="100%" stopColor="#141C4F" />
            </linearGradient>
            <linearGradient id="fxBlueGrad" x1="18" y1="32" x2="38" y2="6" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#141C4F" />
              <stop offset="40%" stopColor="#054ECD" />
              <stop offset="100%" stopColor="#054ECD" />
            </linearGradient>
          </defs>
          <path
            d="M6 16C6 14.8954 6.89543 14 8 14H18C21.3137 14 24 16.6863 24 20V26C24 27.1046 23.1046 28 22 28H14.8284L21.4142 34.5858C22.1953 35.3668 22.1953 36.6332 21.4142 37.4142C20.6332 38.1953 19.3668 38.1953 18.5858 37.4142L8.58579 27.4142C7.80474 26.6332 7.80474 25.3668 8.58579 24.5858L12 21.1716V20C12 16.6863 14.6863 14 18 14"
            fill="url(#fxOrangeGrad)"
          />
          <path
            d="M38 28C38 29.1046 37.1046 30 36 30H26C22.6863 30 20 27.3137 20 24V18C20 16.8954 20.8954 16 22 16H29.1716L22.5858 9.41421C21.8047 8.63316 21.8047 7.36683 22.5858 6.58579C23.3668 5.80474 24.6332 5.80474 25.4142 6.58579L35.4142 16.5858C36.1953 17.3668 36.1953 18.6332 35.4142 19.4142L32 22.8284V24C32 27.3137 29.3137 30 26 30"
            fill="url(#fxBlueGrad)"
          />
          <text 
            x="48" 
            y="29" 
            fill={textColor} 
            fontSize="21" 
            fontWeight="800" 
            letterSpacing="-0.03em"
            fontFamily="'Plus Jakarta Sans', -apple-system, sans-serif"
          >
            FX Master
          </text>
        </svg>
      )}
    </div>
  );
}
