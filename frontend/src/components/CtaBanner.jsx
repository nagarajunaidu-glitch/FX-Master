'use client';

import React, { useState } from 'react';
import { ArrowRight, Lock, Zap, CreditCard } from 'lucide-react';

export default function CtaBanner() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      alert(`🎉 Welcome to FX-Master! Onboarding link sent to ${email}`);
    }
  };

  return (
    <section className="cta-banner-section">
      <div className="container">
        <div className="cta-banner-box glow-card">
          <div className="cta-content">
            <div className="section-badge">Instant Setup</div>
            <h2 className="cta-title">Ready to Experience Zero-Friction Global Money?</h2>
            <p className="cta-desc">Open your multi-currency account in under 3 minutes. No setup fees, no monthly commitments.</p>

            <form className="cta-email-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your work email..."
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="cta-input"
              />
              <button type="submit" className="btn btn-primary glow-btn btn-lg">
                <span>{submitted ? 'Verified ✓' : 'Get Started Free'}</span>
                <ArrowRight size={18} />
              </button>
            </form>

            <div className="cta-guarantees">
              <span>🔒 256-Bit SSL Protected</span>
              <span>⚡ 3-Minute KYC Verification</span>
              <span>💳 No Credit Card Required</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
