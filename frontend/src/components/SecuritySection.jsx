'use client';

import React from 'react';
import { Shield, KeyRound, Globe2, Fingerprint } from 'lucide-react';

export default function SecuritySection() {
  return (
    <section className="security-section" id="security">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-badge">Bank-Grade Protection</div>
          <h2 className="section-title">Institutional Security Built In from Day One</h2>
          <p className="section-subtitle">Your funds are safeguarded in segregated tier-1 accounts backed by industry standard regulatory regimes.</p>
        </div>

        <div className="security-grid">
          <div className="sec-card glow-card">
            <div className="sec-icon">
              <Shield size={28} color="#10B981" />
            </div>
            <h3 className="sec-title">Segregated Safeguarded Funds</h3>
            <p className="sec-desc">100% of client funds are held separately with regulated global custodian banks and never loaned or invested.</p>
          </div>

          <div className="sec-card glow-card">
            <div className="sec-icon">
              <KeyRound size={28} color="#06B6D4" />
            </div>
            <h3 className="sec-title">AES-256-GCM End-to-End Encryption</h3>
            <p className="sec-desc">All API endpoints, token credentials, and database records use military-grade quantum-resistant cryptography.</p>
          </div>

          <div className="sec-card glow-card">
            <div className="sec-icon">
              <Globe2 size={28} color="#8B5CF6" />
            </div>
            <h3 className="sec-title">SOC-2 Type II & ISO 27001 Certified</h3>
            <p className="sec-desc">Continuously audited by leading security firms with 24/7 automated real-time penetration testing.</p>
          </div>

          <div className="sec-card glow-card">
            <div className="sec-icon">
              <Fingerprint size={28} color="#F59E0B" />
            </div>
            <h3 className="sec-title">Biometric & Multi-Sig Authorization</h3>
            <p className="sec-desc">Custom treasury approval workflows. Require 2-of-3 CFO signatures for high-value corporate transfers.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
