'use client';

import React from 'react';

const REVIEWS = [
  {
    stars: '★★★★★',
    quote: '"FX-Master reduced our international payroll settlement from 4 days to less than 30 seconds. We save over $140,000 annually in hidden FX fees."',
    author: 'Sophia Reynolds',
    role: 'VP of Finance, ScaleWave Inc.',
    avatarClass: 'av-1',
    initials: 'SR'
  },
  {
    stars: '★★★★★',
    quote: '"The automated FX hedging alone saved our margins when EUR/USD fluctuated heavily last quarter. The Developer API is the cleanest we\'ve ever integrated."',
    author: 'Marcus Takahashi',
    role: 'CTO, HyperGlobal Payments',
    avatarClass: 'av-2',
    initials: 'MT'
  },
  {
    stars: '★★★★★',
    quote: '"We issue virtual cards to over 300 international employees in seconds. The automated accounting reconciliation with QuickBooks is seamless."',
    author: 'Elena Kostova',
    role: 'Head of Operations, NexaCloud',
    avatarClass: 'av-3',
    initials: 'EK'
  }
];

export default function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-badge">Client Stories</div>
          <h2 className="section-title">Trusted by 2.5M+ Global Businesses</h2>
          <p className="section-subtitle">See how modern treasury managers eliminate banking friction and FX markup.</p>
        </div>

        <div className="testimonials-grid">
          {REVIEWS.map((r, i) => (
            <div key={i} className="testi-card glow-card">
              <div className="stars-row">{r.stars}</div>
              <p className="testi-quote">{r.quote}</p>
              <div className="testi-author">
                <div className={`author-avatar ${r.avatarClass}`}>{r.initials}</div>
                <div>
                  <div className="author-name">{r.author}</div>
                  <div className="author-role">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
