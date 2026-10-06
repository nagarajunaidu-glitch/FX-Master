'use client';

import React, { useState } from 'react';

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-badge">Simple Pricing</div>
          <h2 className="section-title">Transparent Plans with Zero Hidden Spreads</h2>
          <p className="section-subtitle">No monthly maintenance fees for personal accounts. Scalable packages for expanding businesses.</p>

          <div className="pricing-toggle-wrap">
            <span className={`toggle-label ${!isAnnual ? 'text-white' : ''}`}>Monthly</span>
            <button
              className={`toggle-switch ${isAnnual ? 'active' : ''}`}
              onClick={() => setIsAnnual(!isAnnual)}
              aria-label="Toggle annual or monthly pricing"
              aria-checked={isAnnual}
            >
              <span className="switch-thumb"></span>
            </button>
            <span className={`toggle-label ${isAnnual ? 'text-white' : ''}`}>
              Annually <span className="discount-pill">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="pricing-cards-grid">
          {/* Starter */}
          <div className="pricing-card glow-card">
            <div className="tier-badge">Individual</div>
            <h3 className="tier-title">Starter</h3>
            <p className="tier-desc">Ideal for freelancers, remote contractors, and personal global travelers.</p>
            <div className="price-wrap">
              <span className="price-currency">$</span>
              <span className="price-amount">0</span>
              <span className="price-period">/forever</span>
            </div>
            <ul className="tier-features-list">
              <li><span className="check-icon">✓</span> Multi-currency wallet (15 currencies)</li>
              <li><span className="check-icon">✓</span> Real-time interbank FX rates</li>
              <li><span className="check-icon">✓</span> 1 Free Virtual Debit Card</li>
              <li><span className="check-icon">✓</span> Up to $10,000/mo free conversion</li>
              <li><span className="check-icon">✓</span> Standard 24/7 in-app support</li>
            </ul>
            <a href="#calculator" className="btn btn-secondary w-full">Open Free Account</a>
          </div>

          {/* Pro Trader / Growth */}
          <div className="pricing-card pricing-featured glow-card">
            <div className="popular-ribbon">MOST POPULAR</div>
            <div className="tier-badge">Business & Scale</div>
            <h3 className="tier-title">Pro Treasury</h3>
            <p className="tier-desc">For fast-growing companies and cross-border ecommerce stores.</p>
            <div className="price-wrap">
              <span className="price-currency">$</span>
              <span className="price-amount">{isAnnual ? '39' : '49'}</span>
              <span className="price-period">{isAnnual ? '/mo (Billed annually)' : '/month'}</span>
            </div>
            <ul className="tier-features-list">
              <li><span className="check-icon">✓</span> <strong>Unlimited</strong> Multi-currency accounts (40+)</li>
              <li><span className="check-icon">✓</span> Dedicated local IBANs in US, EU, UK, JP</li>
              <li><span className="check-icon">✓</span> Unlimited Corporate Virtual Cards</li>
              <li><span className="check-icon">✓</span> Automated Algorithmic FX Hedging</li>
              <li><span className="check-icon">✓</span> Full Developer API & Webhooks Access</li>
              <li><span className="check-icon">✓</span> Dedicated Account Manager & SLA</li>
            </ul>
            <a href="#calculator" className="btn btn-primary w-full glow-btn">Start 14-Day Free Trial</a>
          </div>

          {/* Enterprise */}
          <div className="pricing-card glow-card">
            <div className="tier-badge">Global Enterprise</div>
            <h3 className="tier-title">Institutional</h3>
            <p className="tier-desc">For high-volume financial institutions, fintechs, and global marketplaces.</p>
            <div className="price-wrap">
              <span className="price-amount">Custom</span>
            </div>
            <ul className="tier-features-list">
              <li><span className="check-icon">✓</span> Tailored interbank spread agreements</li>
              <li><span className="check-icon">✓</span> Multi-jurisdiction white-label banking</li>
              <li><span className="check-icon">✓</span> Multi-signature custom treasury rules</li>
              <li><span className="check-icon">✓</span> 99.999% uptime guarantee with SLA</li>
              <li><span className="check-icon">✓</span> 24/7 dedicated telephone desk</li>
            </ul>
            <a href="#calculator" className="btn btn-secondary w-full">Contact Institutional Team</a>
          </div>
        </div>
      </div>
    </section>
  );
}
