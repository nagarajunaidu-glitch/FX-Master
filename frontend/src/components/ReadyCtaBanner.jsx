'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ReadyCtaBanner({ onOpenAuth }) {
  return (
    <section className="ready-banner-section" id="cta">
      <div className="container">
        <div className="ready-gradient-card-exact">
          {/* Background Concentric Circle Ripples */}
          <div className="ready-concentric-bg">
            <div className="ready-ring r1"></div>
            <div className="ready-ring r2"></div>
            <div className="ready-ring r3"></div>
            <div className="ready-ring r4"></div>
          </div>

          {/* Left Text & CTA Button */}
          <div className="ready-card-content-left">
            <div className="ready-eyebrow-exact">
              <span className="eyebrow-orange-dot">●</span> YOUR NEXT CHAPTER STARTS HERE
            </div>

            <h2 className="ready-main-title-exact">
              READY TO GET<br />
              <span className="ready-title-highlight">STARTED?</span>
            </h2>

            <p className="ready-subtext-exact">
              A borderless world is waiting. Your account is just a few clicks away.
            </p>

            <button
              type="button"
              className="ready-btn-dark-exact"
              onClick={() => onOpenAuth ? onOpenAuth('signup') : null}
            >
              <span>Open free account</span>
              <ArrowUpRight size={17} strokeWidth={2.5} />
            </button>
          </div>

          {/* Right Visual: GO BEYOND Circular Badge */}
          <div className="ready-card-badge-right">
            <div className="go-beyond-circle">
              <div className="go-beyond-text">
                <span>GO</span>
                <span>BEYOND</span>
              </div>
              <ArrowUpRight size={20} color="#FFFFFF" strokeWidth={2.5} className="go-beyond-arrow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
