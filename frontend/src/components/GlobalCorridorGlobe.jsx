'use client';

import React from 'react';

export default function GlobalCorridorGlobe() {
  const corridors = [
    { id: 'usa', name: 'USA', x: 230, y: 220, labelYOffset: 24 },
    { id: 'europe', name: 'Europe', x: 520, y: 185, labelYOffset: -18 },
    { id: 'me', name: 'Middle East', x: 600, y: 265, labelYOffset: 24 },
    { id: 'india', name: 'India', x: 675, y: 275, labelYOffset: 24 },
    { id: 'seasia', name: 'SE Asia', x: 740, y: 320, labelYOffset: 24 },
  ];

  return (
    <div className="perfect-map-container">
      {/* Background Subtle Radial Glow */}
      <div className="perfect-map-ambient-glow"></div>

      {/* World Map Background Image Layer with Gradient Mask */}
      <div className="perfect-map-image-wrap">
        <img 
          src="/world-map.jpg" 
          alt="Global Payment Corridors Map" 
          className="perfect-map-image"
        />
        <div className="perfect-map-overlay-vignette"></div>
      </div>

      {/* Interactive SVG Animation Overlay Layer */}
      <div className="perfect-map-svg-overlay">
        <svg 
          viewBox="0 0 1000 562" 
          className="perfect-map-svg"
          aria-label="Live UK to Worldwide Payment Corridors"
        >
          <defs>
            {/* Glowing Particle Filter */}
            <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Forward Flight Paths (UK -> Destinations) */}
            <path id="path-uk-usa" d="M 480,175 Q 340,95 230,220" />
            <path id="path-uk-europe" d="M 480,175 Q 500,150 520,185" />
            <path id="path-uk-me" d="M 480,175 Q 550,175 600,265" />
            <path id="path-uk-india" d="M 480,175 Q 585,150 675,275" />
            <path id="path-uk-seasia" d="M 480,175 Q 630,170 740,320" />

            {/* Reverse Flight Paths (Destinations -> UK) */}
            <path id="path-usa-uk" d="M 230,220 Q 340,95 480,175" />
            <path id="path-europe-uk" d="M 520,185 Q 500,150 480,175" />
            <path id="path-me-uk" d="M 600,265 Q 550,175 480,175" />
            <path id="path-india-uk" d="M 675,275 Q 585,150 480,175" />
            <path id="path-seasia-uk" d="M 740,320 Q 630,170 480,175" />
          </defs>

          {/* CURVED CORRIDOR TRAJECTORY LINES */}
          <g fill="none">
            <path d="M 480,175 Q 340,95 230,220" stroke="rgba(16, 185, 129, 0.6)" strokeWidth="2" strokeDasharray="6 4" />
            <path d="M 480,175 Q 500,150 520,185" stroke="rgba(16, 185, 129, 0.7)" strokeWidth="2" strokeDasharray="5 3" />
            <path d="M 480,175 Q 550,175 600,265" stroke="rgba(16, 185, 129, 0.65)" strokeWidth="2" strokeDasharray="6 4" />
            <path d="M 480,175 Q 585,150 675,275" stroke="rgba(16, 185, 129, 0.7)" strokeWidth="2" strokeDasharray="6 4" />
            <path d="M 480,175 Q 630,170 740,320" stroke="rgba(16, 185, 129, 0.6)" strokeWidth="2" strokeDasharray="6 4" />
          </g>

          {/* OUTBOUND STREAM (UK ➔ 5 Destinations) - Glowing Emerald Particles */}
          <g>
            {/* To USA */}
            <circle r="4.5" fill="#34D399" filter="url(#softGlow)">
              <animateMotion dur="2.4s" repeatCount="indefinite" rotate="auto">
                <mpath href="#path-uk-usa" />
              </animateMotion>
            </circle>

            {/* To Europe */}
            <circle r="4" fill="#34D399" filter="url(#softGlow)">
              <animateMotion dur="1.6s" repeatCount="indefinite" rotate="auto">
                <mpath href="#path-uk-europe" />
              </animateMotion>
            </circle>

            {/* To Middle East */}
            <circle r="4.5" fill="#34D399" filter="url(#softGlow)">
              <animateMotion dur="2.2s" repeatCount="indefinite" rotate="auto">
                <mpath href="#path-uk-me" />
              </animateMotion>
            </circle>

            {/* To India */}
            <circle r="5" fill="#10B981" filter="url(#softGlow)">
              <animateMotion dur="2.6s" repeatCount="indefinite" rotate="auto">
                <mpath href="#path-uk-india" />
              </animateMotion>
            </circle>

            {/* To SE Asia */}
            <circle r="4.5" fill="#34D399" filter="url(#softGlow)">
              <animateMotion dur="2.8s" repeatCount="indefinite" rotate="auto">
                <mpath href="#path-uk-seasia" />
              </animateMotion>
            </circle>
          </g>

          {/* INBOUND STREAM (5 Destinations ➔ UK) - Glowing Amber/Orange Particles */}
          <g>
            {/* From USA */}
            <circle r="4" fill="#FB923C" filter="url(#softGlow)">
              <animateMotion dur="2.6s" begin="0.8s" repeatCount="indefinite" rotate="auto">
                <mpath href="#path-usa-uk" />
              </animateMotion>
            </circle>

            {/* From Europe */}
            <circle r="3.5" fill="#FB923C" filter="url(#softGlow)">
              <animateMotion dur="1.8s" begin="0.5s" repeatCount="indefinite" rotate="auto">
                <mpath href="#path-europe-uk" />
              </animateMotion>
            </circle>

            {/* From Middle East */}
            <circle r="4" fill="#FB923C" filter="url(#softGlow)">
              <animateMotion dur="2.4s" begin="1.0s" repeatCount="indefinite" rotate="auto">
                <mpath href="#path-me-uk" />
              </animateMotion>
            </circle>

            {/* From India */}
            <circle r="4.5" fill="#F97316" filter="url(#softGlow)">
              <animateMotion dur="2.8s" begin="1.2s" repeatCount="indefinite" rotate="auto">
                <mpath href="#path-india-uk" />
              </animateMotion>
            </circle>

            {/* From SE Asia */}
            <circle r="4" fill="#FB923C" filter="url(#softGlow)">
              <animateMotion dur="3.0s" begin="1.4s" repeatCount="indefinite" rotate="auto">
                <mpath href="#path-seasia-uk" />
              </animateMotion>
            </circle>
          </g>

          {/* 5 DESTINATION NODES */}
          {corridors.map((c) => (
            <g key={c.id} className="corridor-dest-pin">
              {/* Outer Pulsing Wave Ring */}
              <circle cx={c.x} cy={c.y} r="10" fill="none" stroke="#10B981" strokeWidth="1.4" opacity="0.7">
                <animate attributeName="r" values="5;16;5" dur="2.4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.85;0;0.85" dur="2.4s" repeatCount="indefinite" />
              </circle>

              {/* Node Core */}
              <circle cx={c.x} cy={c.y} r="5" fill="#10B981" stroke="#FFFFFF" strokeWidth="2" />

              {/* Clean Minimalist Glass Pill */}
              <g transform={`translate(${c.x - 32}, ${c.y + c.labelYOffset})`}>
                <rect width="64" height="22" rx="7" fill="#0F172A" fillOpacity="0.88" stroke="rgba(255,255,255,0.22)" strokeWidth="1" />
                <text x="32" y="14.5" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800" letterSpacing="0.02em">
                  {c.name}
                </text>
              </g>
            </g>
          ))}

          {/* PRIMARY UK ORIGIN HUB */}
          <g className="corridor-uk-hub">
            {/* Radiant Pulse Rings around UK */}
            <circle cx="480" cy="175" r="20" fill="none" stroke="#FB923C" strokeWidth="2" opacity="0.9">
              <animate attributeName="r" values="8;26;8" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="1;0;1" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="480" cy="175" r="10" fill="#F97316" stroke="#FFFFFF" strokeWidth="2.5" filter="url(#softGlow)" />
            <circle cx="480" cy="175" r="4" fill="#FFFFFF" />

            {/* Glowing UK Badge Pill with Flag */}
            <g transform="translate(436, 125)">
              <rect width="88" height="26" rx="8" fill="#0F172A" stroke="#FB923C" strokeWidth="1.6" filter="url(#softGlow)" />
              <text x="44" y="17.5" textAnchor="middle" fill="#FB923C" fontSize="11" fontWeight="900" letterSpacing="0.05em">
                🇬🇧 UK (HUB)
              </text>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
