'use client';

import React from 'react';
import { CreditCard, Cpu, ShieldCheck, Terminal } from 'lucide-react';

export default function BentoFeatures() {
  return (
    <section className="features-section" id="features">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-badge">Core Engine</div>
          <h2 className="section-title">Engineered for Frictionless Global Scale</h2>
          <p className="section-subtitle">Everything you need to execute international payments, manage foreign currency treasury, and build banking capabilities.</p>
        </div>

        <div className="bento-grid">
          {/* Card 1: Multi-Currency Virtual Accounts */}
          <div className="bento-card bento-lg glow-card">
            <div className="bento-content">
              <div className="bento-icon-wrap">
                <CreditCard size={24} color="#10B981" />
              </div>
              <h3 className="bento-title">Dedicated Local Virtual IBANs in 40+ Jurisdictions</h3>
              <p className="bento-desc">Collect funds like a local in the US, EU, UK, Japan, Australia, and Singapore with dedicated routing numbers and instant SEPA/FedNow access.</p>
              <div className="bento-tags">
                <span className="mini-tag">🇺🇸 US FedNow</span>
                <span className="mini-tag">🇪🇺 SEPA Instant</span>
                <span className="mini-tag">🇬🇧 Faster Payments</span>
                <span className="mini-tag">🇯🇵 Zengin</span>
              </div>
            </div>
            <div className="bento-visual">
              <div className="virtual-card-demo">
                <div className="card-chip-gold"></div>
                <div className="card-brand-logo">FX-Master <span>Black</span></div>
                <div className="card-virtual-number">•••• •••• •••• 9012</div>
                <div className="card-footer-info">
                  <div>
                    <div className="card-holder-title">CARD HOLDER</div>
                    <div className="card-holder-val">ALEXANDER R. VANCE</div>
                  </div>
                  <div>
                    <div className="card-holder-title">EXPIRES</div>
                    <div className="card-holder-val">09/29</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: AI Yield & Hedging */}
          <div className="bento-card bento-md glow-card">
            <div className="bento-content">
              <div className="bento-icon-wrap">
                <Cpu size={24} color="#06B6D4" />
              </div>
              <h3 className="bento-title">Smart Automated FX Hedging</h3>
              <p className="bento-desc">Set target strike rates or enable AI risk-parity algorithms to auto-convert balances when market spreads are at their lowest volatility.</p>
              <div className="hedge-meter">
                <div className="meter-label">
                  <span>Hedge Efficiency</span>
                  <span className="text-emerald">99.4% Protected</span>
                </div>
                <div className="meter-track">
                  <div className="meter-bar" style={{ width: '94%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Zero-Fee Physical & Virtual Cards */}
          <div className="bento-card bento-md glow-card">
            <div className="bento-content">
              <div className="bento-icon-wrap">
                <ShieldCheck size={24} color="#8B5CF6" />
              </div>
              <h3 className="bento-title">Zero-Fee Physical & Virtual Cards</h3>
              <p className="bento-desc">Issue multi-currency corporate cards in 1-click. Set dynamic budget limits, auto-freeze suspicious charges, and earn 1.5% uncapped cashback.</p>
              <div className="card-metrics-row">
                <div className="card-metric-box">
                  <div className="cmb-val">1.5%</div>
                  <div className="cmb-lbl">Cashback FX</div>
                </div>
                <div className="card-metric-box">
                  <div className="cmb-val">Instant</div>
                  <div className="cmb-lbl">Card Freeze</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Developer APIs */}
          <div className="bento-card bento-lg glow-card">
            <div className="bento-content">
              <div className="bento-icon-wrap">
                <Terminal size={24} color="#3B82F6" />
              </div>
              <h3 className="bento-title">Ultra-Low Latency REST & WebSocket APIs</h3>
              <p className="bento-desc">Embed high-velocity cross-border payments directly into your products. Comprehensive SDKs for Node.js, Python, Go, and Ruby.</p>
              <div className="code-editor-preview">
                <div className="code-editor-header">
                  <div className="code-dots">
                    <span></span><span></span><span></span>
                  </div>
                  <span className="code-filename">fx-transfer.js</span>
                  <span className="code-lang">Node.js</span>
                </div>
                <pre className="code-body">
                  <code>
{`const fx = require('@fx-master/sdk');

const transfer = await fx.transfers.create({
  sourceAccount: 'acc_eur_9482',
  destination: 'acc_usd_1029',
  amount: 50000.00,
  currency: 'EUR',
  targetCurrency: 'USD',
  executionMode: 'INSTANT_ZERO_SPREAD'
});

console.log(\`Settled in \${transfer.latencyMs}ms! Rate: \${transfer.executedRate}\`);`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
