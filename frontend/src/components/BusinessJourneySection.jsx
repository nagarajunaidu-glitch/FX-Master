'use client';

import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  ArrowRight,
  Check, 
  ChevronDown, 
  Building2, 
  ShieldCheck, 
  Layers, 
  Coins, 
  FileCheck, 
  Users, 
  TrendingUp, 
  Globe, 
  RefreshCw, 
  Wallet, 
  UserCheck, 
  Activity, 
  Lock, 
  Code,
  Terminal,
  ArrowDown
} from 'lucide-react';

const BUSINESS_FAQS = [
  {
    q: "1. How can FX Master help my business?",
    a: "FX Master supports international payments, FX, multi-currency management, bulk payments and payroll."
  },
  {
    q: "2. Can businesses make bulk and payroll payments?",
    a: "Yes. Businesses can process bulk payment and payroll requirements through structured workflows."
  },
  {
    q: "3. Can FX Master integrate with our existing systems?",
    a: "Yes. FX Master provides API-enabled infrastructure for integrating payment capabilities into business systems."
  },
  {
    q: "4. Can businesses hold multiple currencies?",
    a: "Yes. Businesses can hold and manage supported currencies through multi-currency infrastructure."
  },
  {
    q: "5. Is FX Master regulated?",
    a: "Yes. FX Master operates as a regulated payment institution with KYC, AML and transaction-monitoring controls."
  }
];

const VISIBILITY_STEPS = [
  { step: '01', title: 'Initiated', desc: 'Instruction created' },
  { step: '02', title: 'Compliance', desc: 'Automated KYC/AML check' },
  { step: '03', title: 'Processing', desc: 'Order routing & verification' },
  { step: '04', title: 'Execution', desc: 'FX conversion & dispatch' },
  { step: '05', title: 'Settlement', desc: 'Direct clearing rail transfer' },
  { step: '06', title: 'Completed', desc: 'Recipient credited & receipted' }
];

export default function BusinessJourneySection({ onOpenAuth, onSelectJourney }) {
  const [openFaq, setOpenFaq] = useState(0);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="business-journey-wrapper" id="business-content">
      {/* ========================================================================= */}
      {/* SECTION 02 : BUSINESS PAYMENT INFRASTRUCTURE                              */}
      {/* ========================================================================= */}
      <section className="your-money-exact-section" id="business-infrastructure" style={{ paddingTop: '60px', paddingBottom: '70px' }}>
        <div className="container">
          <div className="section-split-header-exact">
            <div>
              <div className="eyebrow-better-way">
                <span className="eyebrow-orange-dot">●</span> BUSINESS PAYMENT INFRASTRUCTURE
              </div>
              <h2 className="sec-huge-title-exact">
                ONE INFRASTRUCTURE FOR<br />
                GLOBAL BUSINESS <span className="terms-underlined">PAYMENTS</span>.
              </h2>
            </div>
            <div>
              <p className="sec-side-desc-exact">
                Manage international payments, FX conversion, multi-currency balances and payment operations through one digital platform.
              </p>
              <div style={{ marginTop: '20px' }}>
                <button
                  type="button"
                  onClick={() => scrollToSection('business-solutions')}
                  className="btn-exact-orange"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 22px',
                    fontSize: '0.88rem',
                    fontWeight: 800,
                    borderRadius: '8px',
                    background: '#EA580C',
                    color: '#FFFFFF',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <span>Explore Business Solutions</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>

          {/* 4 Core B2B Cards */}
          <div className="feature-cards-2x2-exact" style={{ marginTop: '36px' }}>
            <div className="feature-card-numbered">
              <span className="card-number-tag font-mono">01</span>
              <div className="feat-icon-rounded" style={{ background: '#FFEDD5' }}>
                <Globe size={22} color="#EA580C" />
              </div>
              <h3 className="feat-card-title">INTERNATIONAL PAYMENTS</h3>
              <p className="feat-card-text">
                Execute cross-border payments across supported markets and currencies.
              </p>
            </div>

            <div className="feature-card-numbered">
              <span className="card-number-tag font-mono">02</span>
              <div className="feat-icon-rounded" style={{ background: '#FFEDD5' }}>
                <RefreshCw size={22} color="#EA580C" />
              </div>
              <h3 className="feat-card-title">FX CONVERSION</h3>
              <p className="feat-card-text">
                Manage foreign exchange requirements through competitive FX conversion.
              </p>
            </div>

            <div className="feature-card-numbered">
              <span className="card-number-tag font-mono">03</span>
              <div className="feat-icon-rounded" style={{ background: '#FFEDD5' }}>
                <Wallet size={22} color="#EA580C" />
              </div>
              <h3 className="feat-card-title">MULTI-CURRENCY WALLET</h3>
              <p className="feat-card-text">
                Hold and manage balances across multiple currencies.
              </p>
            </div>

            <div className="feature-card-numbered">
              <span className="card-number-tag font-mono">04</span>
              <div className="feat-icon-rounded" style={{ background: '#FFEDD5' }}>
                <Users size={22} color="#EA580C" />
              </div>
              <h3 className="feat-card-title">BULK & PAYROLL PAYMENTS</h3>
              <p className="feat-card-text">
                Support recurring, high-volume and international payroll payment requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 03 : MULTI-CURRENCY & API INFRASTRUCTURE                          */}
      {/* ========================================================================= */}
      <section className="one-platform-dark-section" id="api-infrastructure" style={{ padding: '80px 0', background: '#090D16' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px' }}>
            <div className="dark-sec-pill" style={{ display: 'inline-flex' }}>
              <span className="eyebrow-orange-dot">●</span> MULTI-CURRENCY & API INFRASTRUCTURE
            </div>
            <h2 className="dark-sec-title" style={{ fontSize: 'clamp(2rem, 3.4vw, 3rem)' }}>
              BUILT FOR GLOBAL <span style={{ color: '#FB923C' }}>BUSINESS OPERATIONS</span>.
            </h2>
            <p className="dark-sec-desc" style={{ margin: '14px auto 0' }}>
              Manage currencies and integrate payment capabilities into your existing business systems.
            </p>
          </div>

          {/* 2-Column Grid: Multi-Currency + API-Enabled Payments */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px' }}>
            {/* Box 1: Multi-Currency Infrastructure */}
            <div className="bento-box-card" style={{ background: '#111827', border: '1px solid rgba(255, 255, 255, 0.09)', borderRadius: '20px', padding: '32px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div className="bento-number-tag font-mono" style={{ color: '#FB923C', marginBottom: '12px' }}>01 / MULTI-CURRENCY</div>
                <h3 className="bento-box-title" style={{ fontSize: '1.45rem', marginBottom: '20px', color: '#FFFFFF' }}>
                  MULTI-CURRENCY INFRASTRUCTURE
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(234, 88, 12, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Check size={14} color="#FB923C" />
                    </div>
                    <span style={{ color: '#E2E8F0', fontSize: '0.94rem', fontWeight: 600 }}>Hold and manage multiple currencies</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(234, 88, 12, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Check size={14} color="#FB923C" />
                    </div>
                    <span style={{ color: '#E2E8F0', fontSize: '0.94rem', fontWeight: 600 }}>Receive supported payments</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(234, 88, 12, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Check size={14} color="#FB923C" />
                    </div>
                    <span style={{ color: '#E2E8F0', fontSize: '0.94rem', fontWeight: 600 }}>Convert between supported currencies</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(234, 88, 12, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Check size={14} color="#FB923C" />
                    </div>
                    <span style={{ color: '#E2E8F0', fontSize: '0.94rem', fontWeight: 600 }}>Dedicated IBAN capability where available</span>
                  </div>
                </div>
              </div>

              {/* Supported Currencies Badge Row */}
              <div style={{ background: '#1E293B', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px' }}>
                  Supported Global Rails & Currencies
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {['GBP', 'EUR', 'USD', 'CAD', 'AUD', 'JPY', 'SGD', 'CHF', 'AED', 'HKD', 'NZD'].map((curr) => (
                    <span key={curr} style={{ background: '#0F172A', color: '#FB923C', padding: '4px 10px', borderRadius: '6px', fontSize: '0.76rem', fontWeight: 700, fontFamily: 'monospace', border: '1px solid rgba(251, 146, 60, 0.2)' }}>
                      {curr}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Box 2: API-Enabled Payments */}
            <div className="bento-box-card" style={{ background: '#111827', border: '1px solid rgba(255, 255, 255, 0.09)', borderRadius: '20px', padding: '32px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div className="bento-number-tag font-mono" style={{ color: '#FB923C', marginBottom: '12px' }}>02 / DEVELOPER RAILS</div>
                <h3 className="bento-box-title" style={{ fontSize: '1.45rem', marginBottom: '10px', color: '#FFFFFF' }}>
                  API-ENABLED PAYMENTS
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '0.92rem', lineHeight: 1.55, marginBottom: '20px' }}>
                  Connect payment capabilities with existing applications and workflows through API-enabled infrastructure.
                </p>

                {/* 4 Badges */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginBottom: '22px' }}>
                  <div style={{ background: 'rgba(234, 88, 12, 0.08)', border: '1px solid rgba(234, 88, 12, 0.25)', padding: '10px 12px', borderRadius: '8px' }}>
                    <div style={{ color: '#FB923C', fontSize: '0.85rem', fontWeight: 800 }}>Payment integration</div>
                  </div>
                  <div style={{ background: 'rgba(234, 88, 12, 0.08)', border: '1px solid rgba(234, 88, 12, 0.25)', padding: '10px 12px', borderRadius: '8px' }}>
                    <div style={{ color: '#FB923C', fontSize: '0.85rem', fontWeight: 800 }}>Automated workflows</div>
                  </div>
                  <div style={{ background: 'rgba(234, 88, 12, 0.08)', border: '1px solid rgba(234, 88, 12, 0.25)', padding: '10px 12px', borderRadius: '8px' }}>
                    <div style={{ color: '#FB923C', fontSize: '0.85rem', fontWeight: 800 }}>Payment data</div>
                  </div>
                  <div style={{ background: 'rgba(234, 88, 12, 0.08)', border: '1px solid rgba(234, 88, 12, 0.25)', padding: '10px 12px', borderRadius: '8px' }}>
                    <div style={{ color: '#FB923C', fontSize: '0.85rem', fontWeight: 800 }}>Scalable infrastructure</div>
                  </div>
                </div>
              </div>

              {/* API Mock Snippet */}
              <div style={{ background: '#0F172A', borderRadius: '12px', padding: '14px 18px', color: '#38BDF8', fontFamily: 'monospace', fontSize: '0.76rem', border: '1px solid rgba(56, 189, 248, 0.15)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '6px' }}>
                  <span style={{ color: '#94A3B8' }}>REST API v1</span>
                  <span style={{ color: '#34D399', fontWeight: 700 }}>● 99.99% UPTIME</span>
                </div>
                <div><span style={{ color: '#FB923C' }}>POST</span> /v1/payments/batch</div>
                <div style={{ color: '#94A3B8' }}>Content-Type: application/json</div>
                <div style={{ color: '#34D399', marginTop: '4px' }}>Status: 200 OK — 1,250 Instructions Executed</div>
              </div>
            </div>
          </div>

          {/* Section 03 CTA */}
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <button
              type="button"
              onClick={() => onOpenAuth && onOpenAuth('signup')}
              className="btn-exact-orange"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 28px',
                fontSize: '0.94rem',
                fontWeight: 800,
                borderRadius: '8px',
                background: '#EA580C',
                color: '#FFFFFF',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 16px rgba(234, 88, 12, 0.3)'
              }}
            >
              <span>Discuss API Integration</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 04 : COMPLIANCE & PAYMENT VISIBILITY                              */}
      {/* ========================================================================= */}
      <section className="shop-favs-exact-section" id="compliance-visibility" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="section-split-header-exact">
            <div>
              <div className="eyebrow-better-way">
                <span className="eyebrow-orange-dot">●</span> COMPLIANCE & PAYMENT VISIBILITY
              </div>
              <h2 className="sec-huge-title-exact">
                REGULATED INFRASTRUCTURE.<br />
                <span className="terms-underlined">COMPLIANCE-LED</span> OPERATIONS.
              </h2>
            </div>
            <div>
              <p className="sec-side-desc-exact">
                FX Master incorporates regulatory and compliance controls throughout the customer and transaction lifecycle.
              </p>
            </div>
          </div>

          {/* 4 Compliance Pillars */}
          <div className="compliance-pillars-grid" style={{ marginTop: '36px' }}>
            <div className="compliance-pillar-card">
              <div className="pillar-top-row">
                <div className="pillar-icon-box" style={{ background: '#FFEDD5', color: '#EA580C' }}>
                  <UserCheck size={20} color="#EA580C" />
                </div>
                <span className="pillar-tag font-mono">VERIFICATION</span>
              </div>
              <h4 className="pillar-title">KYC / KYB</h4>
              <p className="pillar-desc">
                Customer and business verification protocols integrated into onboarding.
              </p>
            </div>

            <div className="compliance-pillar-card">
              <div className="pillar-top-row">
                <div className="pillar-icon-box" style={{ background: '#FFEDD5', color: '#EA580C' }}>
                  <ShieldCheck size={20} color="#EA580C" />
                </div>
                <span className="pillar-tag font-mono">SANCTIONS</span>
              </div>
              <h4 className="pillar-title">AML CONTROLS</h4>
              <p className="pillar-desc">
                Anti-money laundering controls and continuous watchlist screening.
              </p>
            </div>

            <div className="compliance-pillar-card">
              <div className="pillar-top-row">
                <div className="pillar-icon-box" style={{ background: '#FFEDD5', color: '#EA580C' }}>
                  <Activity size={20} color="#EA580C" />
                </div>
                <span className="pillar-tag font-mono">24/7 OVERSIGHT</span>
              </div>
              <h4 className="pillar-title">TRANSACTION MONITORING</h4>
              <p className="pillar-desc">
                Real-time automated monitoring across all payment and balance activity.
              </p>
            </div>

            <div className="compliance-pillar-card">
              <div className="pillar-top-row">
                <div className="pillar-icon-box" style={{ background: '#FFEDD5', color: '#EA580C' }}>
                  <Lock size={20} color="#EA580C" />
                </div>
                <span className="pillar-tag font-mono">PROTECTION</span>
              </div>
              <h4 className="pillar-title">SECURE PAYMENT ENVIRONMENT</h4>
              <p className="pillar-desc">
                Controlled access, maker-checker governance and multi-tier payment authorisation.
              </p>
            </div>
          </div>

          {/* End-to-End Payment Visibility Showcase */}
          <div style={{ marginTop: '50px', background: '#0F172A', borderRadius: '20px', padding: '40px 32px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 36px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '100px', background: 'rgba(234, 88, 12, 0.15)', color: '#FB923C', fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '12px' }}>
                <Activity size={14} /> Full Lifecycle Tracking
              </div>
              <h3 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)', fontWeight: 900, color: '#FFFFFF', marginBottom: '10px' }}>
                End-to-End Payment Visibility
              </h3>
              <p style={{ color: '#94A3B8', fontSize: '0.94rem', lineHeight: 1.6, margin: 0 }}>
                Monitor transaction status and maintain visibility across your payment operations.
              </p>
            </div>

            {/* Step Pipeline: Initiated → Compliance → Processing → Execution → Settlement → Completed */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px', position: 'relative' }}>
              {VISIBILITY_STEPS.map((item, idx) => (
                <div 
                  key={item.step} 
                  style={{ 
                    background: '#1E293B', 
                    borderRadius: '12px', 
                    padding: '18px 14px', 
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    position: 'relative'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontFamily: 'monospace', fontSize: '0.72rem', fontWeight: 800, color: '#FB923C' }}>
                      STEP {item.step}
                    </span>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#34D399' }}></span>
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '4px' }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8', lineHeight: 1.4 }}>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* Pipeline Summary Line */}
            <div style={{ textAlign: 'center', marginTop: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', color: '#38BDF8', fontSize: '0.85rem', fontWeight: 700, fontFamily: 'monospace' }}>
              <span>Initiated</span>
              <span>→</span>
              <span>Compliance</span>
              <span>→</span>
              <span>Processing</span>
              <span>→</span>
              <span>Execution</span>
              <span>→</span>
              <span>Settlement</span>
              <span>→</span>
              <span style={{ color: '#34D399' }}>Completed</span>
            </div>

            {/* CTA Button */}
            <div style={{ textAlign: 'center', marginTop: '32px' }}>
              <button
                type="button"
                onClick={() => onOpenAuth && onOpenAuth('signup')}
                className="btn-exact-orange"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '13px 26px',
                  fontSize: '0.92rem',
                  fontWeight: 800,
                  borderRadius: '8px',
                  background: '#EA580C',
                  color: '#FFFFFF',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                <span>Discuss Your Payment Requirements</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 05 : BUSINESS SOLUTIONS                                           */}
      {/* ========================================================================= */}
      <section className="trusted-section" id="business-solutions" style={{ padding: '80px 0', background: '#0B0F19' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
            <div className="testimonials-eyebrow-exact" style={{ justifyContent: 'center' }}>
              <span className="eyebrow-orange-dot">●</span> BUSINESS SOLUTIONS
            </div>
            <h2 className="dark-sec-title">
              BUILT FOR BUSINESSES OPERATING <span className="highlight-orange-text">ACROSS BORDERS</span>.
            </h2>
            <p className="dark-sec-desc" style={{ margin: '14px auto 0' }}>
              FX Master supports businesses requiring international payment execution, currency management and scalable payment operations.
            </p>
          </div>

          {/* 4 Solution Cards */}
          <div className="feature-cards-2x2-exact">
            <div className="feature-card-numbered" style={{ background: '#1E293B', borderColor: 'rgba(255, 255, 255, 0.08)' }}>
              <div className="feat-icon-rounded" style={{ background: '#EA580C', color: '#FFFFFF' }}>
                <Globe size={22} />
              </div>
              <h3 className="feat-card-title" style={{ color: '#FFFFFF' }}>INTERNATIONAL BUSINESS PAYMENTS</h3>
              <p className="feat-card-text" style={{ color: '#94A3B8' }}>
                Manage cross-border supplier, operational and corporate payments.
              </p>
            </div>

            <div className="feature-card-numbered" style={{ background: '#1E293B', borderColor: 'rgba(255, 255, 255, 0.08)' }}>
              <div className="feat-icon-rounded" style={{ background: '#EA580C', color: '#FFFFFF' }}>
                <Users size={22} />
              </div>
              <h3 className="feat-card-title" style={{ color: '#FFFFFF' }}>GLOBAL PAYROLL</h3>
              <p className="feat-card-text" style={{ color: '#94A3B8' }}>
                Support international employee and contractor payouts.
              </p>
            </div>

            <div className="feature-card-numbered" style={{ background: '#1E293B', borderColor: 'rgba(255, 255, 255, 0.08)' }}>
              <div className="feat-icon-rounded" style={{ background: '#EA580C', color: '#FFFFFF' }}>
                <Layers size={22} />
              </div>
              <h3 className="feat-card-title" style={{ color: '#FFFFFF' }}>BULK PAYMENTS</h3>
              <p className="feat-card-text" style={{ color: '#94A3B8' }}>
                Process multiple payment instructions through structured workflows.
              </p>
            </div>

            <div className="feature-card-numbered" style={{ background: '#1E293B', borderColor: 'rgba(255, 255, 255, 0.08)' }}>
              <div className="feat-icon-rounded" style={{ background: '#EA580C', color: '#FFFFFF' }}>
                <Building2 size={22} />
              </div>
              <h3 className="feat-card-title" style={{ color: '#FFFFFF' }}>MULTI-CURRENCY OPERATIONS</h3>
              <p className="feat-card-text" style={{ color: '#94A3B8' }}>
                Manage balances and FX requirements across supported currencies.
              </p>
            </div>
          </div>

          {/* High-Impact Closing CTA Banner */}
          <div style={{ marginTop: '56px', background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)', borderRadius: '24px', padding: '48px 36px', border: '1px solid rgba(234, 88, 12, 0.3)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-50%', left: '50%', transform: 'translateX(-50%)', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(234, 88, 12, 0.25) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
            <h3 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)', fontWeight: 900, color: '#FFFFFF', marginBottom: '14px', position: 'relative' }}>
              Build Your Global Payment Infrastructure With FX Master
            </h3>
            <p style={{ color: '#CBD5E1', fontSize: '1.02rem', maxWidth: '780px', margin: '0 auto 28px', lineHeight: 1.6, position: 'relative' }}>
              Access regulated payment infrastructure for international payments, FX conversion, multi-currency management, bulk payouts and API-enabled payment operations.
            </p>
            <div style={{ position: 'relative' }}>
              <button
                type="button"
                onClick={() => onOpenAuth && onOpenAuth('signup')}
                className="btn-exact-orange"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '16px 36px',
                  fontSize: '1rem',
                  fontWeight: 900,
                  borderRadius: '10px',
                  background: '#EA580C',
                  color: '#FFFFFF',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 6px 20px rgba(234, 88, 12, 0.4)'
                }}
              >
                <span>Talk to Our Payments Team</span>
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* FREQUENTLY ASKED QUESTIONS                                                */}
          {/* ========================================================================= */}
          <div className="homepage-faq-block" style={{ marginTop: '70px', paddingTop: '50px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <div className="testimonials-eyebrow-exact" style={{ justifyContent: 'center' }}>
                <span className="eyebrow-orange-dot">●</span> FREQUENTLY ASKED QUESTIONS
              </div>
              <h3 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 900, color: '#FFFFFF', textTransform: 'uppercase' }}>
                FREQUENTLY ASKED QUESTIONS
              </h3>
            </div>

            <div style={{ maxWidth: '840px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {BUSINESS_FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    style={{
                      background: isOpen ? '#1E293B' : 'rgba(30, 41, 59, 0.5)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '16px',
                      padding: '20px 24px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                      <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: isOpen ? '#FB923C' : '#FFFFFF', margin: 0 }}>
                        {faq.q}
                      </h4>
                      <ChevronDown
                        size={18}
                        color="#94A3B8"
                        style={{
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s ease',
                          flexShrink: 0
                        }}
                      />
                    </div>
                    {isOpen && (
                      <p style={{ fontSize: '0.92rem', color: '#94A3B8', marginTop: '12px', lineHeight: 1.6, margin: '12px 0 0' }}>
                        {faq.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
