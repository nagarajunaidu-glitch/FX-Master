'use client';

import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Check, 
  ChevronDown, 
  Globe, 
  Shield, 
  Lock, 
  Zap, 
  UserCheck, 
  CreditCard, 
  Eye, 
  GraduationCap, 
  Home, 
  HeartHandshake, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

const INDIVIDUAL_FAQS = [
  {
    q: "1. How quickly do international transfers arrive?",
    a: "Most international transfers arrive on the same day or within 1 to 2 business days, depending on the recipient's country and currency rail."
  },
  {
    q: "2. What documents do I need to verify my account?",
    a: "To verify your individual account, you will need a valid government-issued photo ID (passport or driver's license) and a recent proof of address."
  },
  {
    q: "3. Are there any hidden fees?",
    a: "No. FX Master displays clear, transparent exchange rates and fees before you confirm any payment."
  },
  {
    q: "4. Can I hold multiple currencies?",
    a: "Yes. FX Master lets you hold, manage, and convert multiple currencies in your personal multi-currency wallet."
  }
];

export default function IndividualJourneySection({ onOpenAuth, onSelectJourney }) {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="individual-journey-wrapper" id="individual-content">
      {/* 02. B2C Core Benefits Section */}
      <section className="your-money-exact-section" style={{ paddingTop: '50px' }}>
        <div className="container">
          <div className="section-split-header-exact">
            <div>
              <div className="eyebrow-better-way">
                <span className="eyebrow-orange-dot">●</span> SEND & RECEIVE GLOBALLY
              </div>
              <h2 className="sec-huge-title-exact">
                SEND MONEY ACROSS<br />
                BORDERS WITH <span className="terms-underlined">CONFIDENCE</span>.
              </h2>
            </div>
            <div>
              <p className="sec-side-desc-exact">
                Whether you are supporting loved ones abroad, paying international bills, or receiving funds from overseas, FX Master simplifies cross-border payments with real-time tracking and bank-grade security.
              </p>
            </div>
          </div>

          {/* 4 Core B2C Benefits */}
          <div className="feature-cards-2x2-exact" style={{ marginTop: '36px' }}>
            <div className="feature-card-numbered">
              <span className="card-number-tag font-mono">01</span>
              <div className="feat-icon-rounded">
                <Sparkles size={22} color="#2563EB" />
              </div>
              <h3 className="feat-card-title">COMPETITIVE EXCHANGE RATES</h3>
              <p className="feat-card-text">
                Access transparent, institutional-grade foreign exchange rates with zero hidden markups or surprise charges.
              </p>
            </div>

            <div className="feature-card-numbered">
              <span className="card-number-tag font-mono">02</span>
              <div className="feat-icon-rounded">
                <Zap size={22} color="#2563EB" />
              </div>
              <h3 className="feat-card-title">FAST GLOBAL SETTLEMENT</h3>
              <p className="feat-card-text">
                Transfer funds directly across priority payment rails with same-day and instant delivery to supported countries.
              </p>
            </div>

            <div className="feature-card-numbered">
              <span className="card-number-tag font-mono">03</span>
              <div className="feat-icon-rounded">
                <Eye size={22} color="#2563EB" />
              </div>
              <h3 className="feat-card-title">TRANSPARENT PRICING</h3>
              <p className="feat-card-text">
                Review your live exchange rate, exact fee breakdown, and guaranteed recipient amount before confirming.
              </p>
            </div>

            <div className="feature-card-numbered">
              <span className="card-number-tag font-mono">04</span>
              <div className="feat-icon-rounded">
                <Globe size={22} color="#2563EB" />
              </div>
              <h3 className="feat-card-title">END-TO-END PAYMENT TRACKING</h3>
              <p className="feat-card-text">
                Follow your transfer status step-by-step with real-time updates and SMS/email confirmation upon payout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03. Section 03: Getting Started Is Simple (01-05 Steps) */}
      <section className="one-platform-dark-section" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 50px' }}>
            <div className="dark-sec-pill" style={{ display: 'inline-flex' }}>
              <span className="eyebrow-orange-dot">●</span> HOW IT WORKS
            </div>
            <h2 className="dark-sec-title" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>
              GETTING STARTED IS <span style={{ color: '#FB923C' }}>SIMPLE</span>.
            </h2>
            <p className="dark-sec-desc" style={{ margin: '14px auto 0' }}>
              Send money internationally in five straightforward, transparent steps.
            </p>
          </div>

          {/* 5 Steps Linear Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '16px' }}>
            <div className="bento-box-card" style={{ padding: '24px 20px', background: '#1E293B', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div className="bento-number-tag font-mono" style={{ color: '#FB923C' }}>STEP 01</div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFFFFF', margin: '12px 0 8px' }}>Create an Account</h4>
              <p style={{ fontSize: '0.85rem', color: '#94A3B8', lineHeight: 1.5 }}>
                Register online or through the mobile app in less than 2 minutes.
              </p>
            </div>

            <div className="bento-box-card" style={{ padding: '24px 20px', background: '#1E293B', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div className="bento-number-tag font-mono" style={{ color: '#FB923C' }}>STEP 02</div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFFFFF', margin: '12px 0 8px' }}>Verify Your Identity</h4>
              <p style={{ fontSize: '0.85rem', color: '#94A3B8', lineHeight: 1.5 }}>
                Complete our streamlined, bank-grade digital KYC verification.
              </p>
            </div>

            <div className="bento-box-card" style={{ padding: '24px 20px', background: '#1E293B', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div className="bento-number-tag font-mono" style={{ color: '#FB923C' }}>STEP 03</div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFFFFF', margin: '12px 0 8px' }}>Add Recipient Details</h4>
              <p style={{ fontSize: '0.85rem', color: '#94A3B8', lineHeight: 1.5 }}>
                Enter the recipient's bank details or international IBAN.
              </p>
            </div>

            <div className="bento-box-card" style={{ padding: '24px 20px', background: '#1E293B', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div className="bento-number-tag font-mono" style={{ color: '#FB923C' }}>STEP 04</div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFFFFF', margin: '12px 0 8px' }}>Confirm Rate & Send</h4>
              <p style={{ fontSize: '0.85rem', color: '#94A3B8', lineHeight: 1.5 }}>
                Review the live institutional rate, fees, and confirm payment.
              </p>
            </div>

            <div className="bento-box-card" style={{ padding: '24px 20px', background: '#1E293B', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div className="bento-number-tag font-mono" style={{ color: '#FB923C' }}>STEP 05</div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFFFFF', margin: '12px 0 8px' }}>Track Your Payment</h4>
              <p style={{ fontSize: '0.85rem', color: '#94A3B8', lineHeight: 1.5 }}>
                Follow your payment in real-time until successful delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 04. Section 04: Secure. Regulated. Built Around You. */}
      <section className="shop-favs-exact-section" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="section-split-header-exact">
            <div>
              <div className="eyebrow-better-way">
                <span className="eyebrow-orange-dot">●</span> TRUST & COMPLIANCE
              </div>
              <h2 className="sec-huge-title-exact">
                SECURE. REGULATED.<br />
                BUILT AROUND <span className="terms-underlined">YOU</span>.
              </h2>
            </div>
            <div>
              <p className="sec-side-desc-exact">
                Your security and trust are at the heart of everything we do. We combine strict regulatory standards with industry-leading encryption.
              </p>
            </div>
          </div>

          <div className="compliance-pillars-grid" style={{ marginTop: '36px' }}>
            <div className="compliance-pillar-card">
              <div className="pillar-top-row">
                <div className="pillar-icon-box">
                  <Shield size={20} color="#2563EB" />
                </div>
                <span className="pillar-tag font-mono">STANDARDS</span>
              </div>
              <h4 className="pillar-title">REGULATED ENVIRONMENT</h4>
              <p className="pillar-desc">
                Operating under rigorous regulatory requirements with strict KYC and anti-money laundering protocols.
              </p>
            </div>

            <div className="compliance-pillar-card">
              <div className="pillar-top-row">
                <div className="pillar-icon-box">
                  <Lock size={20} color="#2563EB" />
                </div>
                <span className="pillar-tag font-mono">SAFEGUARDING</span>
              </div>
              <h4 className="pillar-title">ROBUST SAFEGUARDING</h4>
              <p className="pillar-desc">
                Client funds are kept strictly segregated in designated Tier-1 accounts, fully protected at all times.
              </p>
            </div>

            <div className="compliance-pillar-card">
              <div className="pillar-top-row">
                <div className="pillar-icon-box">
                  <UserCheck size={20} color="#2563EB" />
                </div>
                <span className="pillar-tag font-mono">ENCRYPTION</span>
              </div>
              <h4 className="pillar-title">ADVANCED ENCRYPTION</h4>
              <p className="pillar-desc">
                Bank-grade 256-bit encryption and multi-factor biometric authentication safeguarding every transfer.
              </p>
            </div>

            <div className="compliance-pillar-card">
              <div className="pillar-top-row">
                <div className="pillar-icon-box">
                  <Eye size={20} color="#2563EB" />
                </div>
                <span className="pillar-tag font-mono">MONITORING</span>
              </div>
              <h4 className="pillar-title">24/7 FRAUD MONITORING</h4>
              <p className="pillar-desc">
                Intelligent real-time anomaly detection monitoring all transaction activity around the clock.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 05. Section 05: Built Around Your Global Financial Needs (Use Cases) */}
      <section className="trusted-section" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 48px' }}>
            <div className="testimonials-eyebrow-exact" style={{ justifyContent: 'center' }}>
              <span className="eyebrow-orange-dot">●</span> INDIVIDUAL USE CASES
            </div>
            <h2 className="dark-sec-title">
              BUILT AROUND YOUR <span className="highlight-orange-text">GLOBAL</span> FINANCIAL NEEDS.
            </h2>
          </div>

          <div className="feature-cards-2x2-exact">
            <div className="feature-card-numbered" style={{ background: '#1E293B', borderColor: 'rgba(255, 255, 255, 0.08)' }}>
              <div className="feat-icon-rounded" style={{ background: '#2563EB', color: '#FFFFFF' }}>
                <HeartHandshake size={22} />
              </div>
              <h3 className="feat-card-title" style={{ color: '#FFFFFF' }}>FAMILY REMITTANCES</h3>
              <p className="feat-card-text" style={{ color: '#94A3B8' }}>
                Support family and loved ones abroad with fast, reliable transfers and guaranteed delivery rates.
              </p>
            </div>

            <div className="feature-card-numbered" style={{ background: '#1E293B', borderColor: 'rgba(255, 255, 255, 0.08)' }}>
              <div className="feat-icon-rounded" style={{ background: '#2563EB', color: '#FFFFFF' }}>
                <GraduationCap size={22} />
              </div>
              <h3 className="feat-card-title" style={{ color: '#FFFFFF' }}>TUITION & OVERSEAS FEES</h3>
              <p className="feat-card-text" style={{ color: '#94A3B8' }}>
                Pay international university tuition, school fees, and education costs directly in local currency.
              </p>
            </div>

            <div className="feature-card-numbered" style={{ background: '#1E293B', borderColor: 'rgba(255, 255, 255, 0.08)' }}>
              <div className="feat-icon-rounded" style={{ background: '#2563EB', color: '#FFFFFF' }}>
                <Home size={22} />
              </div>
              <h3 className="feat-card-title" style={{ color: '#FFFFFF' }}>PROPERTY & LIVING EXPENSES</h3>
              <p className="feat-card-text" style={{ color: '#94A3B8' }}>
                Manage overseas mortgage payments, property maintenance, rent, or relocation expenses seamlessly.
              </p>
            </div>

            <div className="feature-card-numbered" style={{ background: '#1E293B', borderColor: 'rgba(255, 255, 255, 0.08)' }}>
              <div className="feat-icon-rounded" style={{ background: '#2563EB', color: '#FFFFFF' }}>
                <CreditCard size={22} />
              </div>
              <h3 className="feat-card-title" style={{ color: '#FFFFFF' }}>RECEIVING FUNDS FROM OVERSEAS</h3>
              <p className="feat-card-text" style={{ color: '#94A3B8' }}>
                Receive payments from overseas clients, family, or partners without excessive conversion fees.
              </p>
            </div>
          </div>

          {/* 06. Individual FAQs Accordion */}
          <div className="homepage-faq-block" style={{ marginTop: '70px', paddingTop: '50px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <div className="testimonials-eyebrow-exact" style={{ justifyContent: 'center' }}>
                <span className="eyebrow-orange-dot">●</span> INDIVIDUAL FAQS
              </div>
              <h3 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 900, color: '#FFFFFF', textTransform: 'uppercase' }}>
                INDIVIDUAL PAYMENTS FAQ
              </h3>
            </div>

            <div style={{ maxWidth: '840px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {INDIVIDUAL_FAQS.map((faq, idx) => {
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
                      <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: isOpen ? '#38BDF8' : '#FFFFFF', margin: 0 }}>
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
