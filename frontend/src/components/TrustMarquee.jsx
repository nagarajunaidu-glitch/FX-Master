'use client';

import React from 'react';

const PARTNERS = [
  'VISA Direct',
  'Mastercard Send',
  'SWIFT GPI',
  'SEPA Instant',
  'Stripe Treasury',
  'Apple Pay',
  'J.P. Morgan Clearing',
  'SOC-2 Type II'
];

export default function TrustMarquee() {
  return (
    <div className="trust-marquee-wrapper">
      <p className="trust-marquee-title">BACKED BY INSTITUTIONAL-GRADE LIQUIDITY & COMPLIANCE NETWORKS</p>
      <div className="marquee-track">
        <div className="marquee-group">
          {PARTNERS.map((p, idx) => (
            <span key={idx} className="partner-logo">{p}</span>
          ))}
        </div>
        <div className="marquee-group" aria-hidden="true">
          {PARTNERS.map((p, idx) => (
            <span key={`dup-${idx}`} className="partner-logo">{p}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
