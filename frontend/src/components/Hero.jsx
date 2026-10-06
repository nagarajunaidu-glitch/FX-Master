'use client';

import React from 'react';
import { ArrowUpRight, ArrowDownLeft, Check, RefreshCw, Send, Shield, ChevronDown, Building2, User } from 'lucide-react';
import GlobalCorridorGlobe from './GlobalCorridorGlobe';

export default function Hero({ onOpenAuth, journeyMode = 'all', setJourneyMode }) {
  const isIndividuals = journeyMode === 'individuals';
  const isBusinesses = journeyMode === 'businesses';

  const handleSelectJourney = (mode) => {
    if (setJourneyMode) {
      setJourneyMode(mode);
    }
  };

  return (
    <section className="hero-figma-section" id="hero">
      <div className="container hero-grid-2col">
        {/* Left Copy matching exact new approved content */}
        <div className="hero-copy-wrap">
          <h1 className="hero-main-title" style={{ fontSize: 'clamp(1.8rem, 3.1vw, 2.85rem)', lineHeight: 1.18 }}>
            {isIndividuals ? (
              <>
                <span>SEND MONEY WORLDWIDE</span>
                <span style={{ display: 'block', marginTop: '10px' }}>FROM THE UK WITH CONFIDENCE.</span>
              </>
            ) : isBusinesses ? (
              <>
                <span>GLOBAL PAYMENTS INFRASTRUCTURE</span>
                <span style={{ display: 'block', marginTop: '10px' }}>FOR MODERN BUSINESSES</span>
              </>
            ) : (
              <>
                <span style={{ 
                  display: 'block', 
                  fontSize: 'clamp(1.05rem, 1.8vw, 1.35rem)', 
                  color: 'rgba(255, 255, 255, 0.92)', 
                  marginBottom: '10px', 
                  fontWeight: 800,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase'
                }}>
                  SEND & RECEIVE MONEY:
                </span>
                <span style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  fontSize: 'clamp(2.4rem, 4.4vw, 3.8rem)', 
                  fontWeight: 900,
                  color: '#FFFFFF', 
                  letterSpacing: '-0.03em',
                  lineHeight: 1.05
                }}>
                  UK
                  <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '0 14px', verticalAlign: 'middle', lineHeight: 1 }}>
                    {/* Top Right Arrow in Orange #F34602 (from UK / Left) */}
                    <svg width="44" height="18" viewBox="0 0 32 14" fill="none">
                      <path d="M2 7H28M28 7L21 2M28 7L21 12" stroke="#F34602" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {/* Bottom Left Arrow in High-Visibility Vivid Blue #38BDF8 */}
                    <svg width="44" height="18" viewBox="0 0 32 14" fill="none" style={{ marginTop: '2px' }}>
                      <path d="M30 7H4M4 7L11 2M4 7L11 12" stroke="#38BDF8" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  WORLD
                </span>
              </>
            )}
          </h1>

          <p className="hero-subtext-exact">
            {isIndividuals ? (
              'Send money to family, pay for international services, or receive funds from abroad. FX Master gives you the tools to manage your global payments with clarity, speed, and competitive exchange rates.'
            ) : isBusinesses ? (
              'Execute, manage and scale cross-border payments through regulated digital payment infrastructure built for businesses operating across multiple markets.'
            ) : (
              <>
                Send and receive international payments, exchange currencies and manage multiple currencies through FX Master’s regulated digital payments platform.
                <span style={{ display: 'block', marginTop: '8px' }}>
                  Whether you are an individual or a business, manage your global payments through one secure digital platform.
                </span>
              </>
            )}
          </p>

          {/* Business Hero Action Buttons */}
          {isBusinesses && (
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '22px' }}>
              <button 
                type="button" 
                onClick={() => onOpenAuth && onOpenAuth('signup')}
                className="btn-exact-orange"
                style={{ 
                  padding: '13px 24px', 
                  fontSize: '0.92rem', 
                  fontWeight: 800, 
                  borderRadius: '10px', 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '8px',
                  background: '#EA580C',
                  color: '#FFFFFF',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(234, 88, 12, 0.35)'
                }}
              >
                <span>Talk to Our Payments Team</span>
                <ArrowUpRight size={16} />
              </button>
              <a 
                href="#business-solutions"
                style={{ 
                  padding: '13px 22px', 
                  fontSize: '0.92rem', 
                  fontWeight: 700, 
                  borderRadius: '10px', 
                  border: '1px solid rgba(255,255,255,0.22)', 
                  color: '#FFFFFF', 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  textDecoration: 'none',
                  background: 'rgba(255,255,255,0.06)'
                }}
              >
                <span>Explore Business Solutions</span>
              </a>
            </div>
          )}

          {/* Choose Your Payment Journey */}
          <div className="choose-journey-title font-mono" style={{ fontSize: '0.82rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '10px', opacity: 0.95 }}>
            Choose Your Payment Journey
          </div>

          <div className="hero-journey-selector-row">
            {/* Card 1: Individuals */}
            <div 
              className={`hero-journey-card ${isIndividuals ? 'active-individuals' : ''}`}
              onClick={() => handleSelectJourney('individuals')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleSelectJourney('individuals'); }}
              aria-label="View Individuals Content"
            >
              {isIndividuals && <div className="active-journey-badge blue">● Active View</div>}
              <div className="journey-card-header">
                <div className="journey-icon-circle blue">
                  <User size={16} />
                </div>
                <div className="journey-card-title">INDIVIDUALS</div>
              </div>
              <p className="journey-card-desc">
                Send and receive international payments, exchange currencies and manage your money.
              </p>
              <div className="journey-card-action">
                <span>{isIndividuals ? 'Viewing Individual Content' : 'Explore Individuals'}</span>
                <ArrowUpRight size={14} />
              </div>
            </div>

            {/* Card 2: Businesses */}
            <div 
              className={`hero-journey-card ${isBusinesses ? 'active-businesses' : ''}`}
              onClick={() => handleSelectJourney('businesses')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleSelectJourney('businesses'); }}
              aria-label="View Businesses Content"
            >
              {isBusinesses && <div className="active-journey-badge orange">● Active View</div>}
              <div className="journey-card-header">
                <div className="journey-icon-circle orange">
                  <Building2 size={16} />
                </div>
                <div className="journey-card-title">BUSINESSES</div>
              </div>
              <p className="journey-card-desc">
                Manage international payments, bulk payouts, payroll, FX and multi-currency requirements.
              </p>
              <div className="journey-card-action">
                <span>{isBusinesses ? 'Viewing Business Content' : 'Explore Businesses'}</span>
                <ArrowUpRight size={14} />
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="hero-trust-indicators-grid">
            {isBusinesses ? (
              <>
                <div className="hero-trust-item">
                  <Check size={14} className="trust-check" />
                  <span>Regulated Payment Infrastructure</span>
                </div>
                <div className="hero-trust-item">
                  <Check size={14} className="trust-check" />
                  <span>Cross-Border Payment Execution</span>
                </div>
                <div className="hero-trust-item">
                  <Check size={14} className="trust-check" />
                  <span>Multi-Currency Capability</span>
                </div>
                <div className="hero-trust-item">
                  <Check size={14} className="trust-check" />
                  <span>API-Enabled Infrastructure</span>
                </div>
              </>
            ) : (
              <>
                <div className="hero-trust-item">
                  <Check size={14} className="trust-check" />
                  <span>Regulated Payment Infrastructure</span>
                </div>
                <div className="hero-trust-item">
                  <Check size={14} className="trust-check" />
                  <span>International Payment Capability</span>
                </div>
                <div className="hero-trust-item">
                  <Check size={14} className="trust-check" />
                  <span>KYC & AML Controls</span>
                </div>
                <div className="hero-trust-item">
                  <Check size={14} className="trust-check" />
                  <span>Multi-Currency Infrastructure</span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Right Column: Interactive Global Corridors Globe (All Overview) or Dedicated Mockup */}
        <div className="hero-phone-container">
          <div className="hero-orange-aura"></div>
          
          {/* Render Globe on All Overview */}
          <GlobalCorridorGlobe />
        </div>
      </div>
    </section>
  );
}
