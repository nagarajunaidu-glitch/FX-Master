'use client';

import React from 'react';
import { ArrowUpRight, Globe, RefreshCw, Wallet, Activity, User, Building2, ChevronDown, Check } from 'lucide-react';

export default function YourMoneySection({ onSelectJourney }) {
  return (
    <section 
      className="your-money-exact-section" 
      id="platform"
      style={{
        background: '#FFFFFF',
        color: '#0F172A',
        padding: '24px 0 48px',
        borderBottom: '1px solid #E2E8F0'
      }}
    >
      <div className="container your-money-body">
        {/* Split Header */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            alignItems: 'flex-end',
            marginBottom: '48px'
          }}
        >
          <div>
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#EFF6FF',
                border: '1px solid #BFDBFE',
                padding: '6px 14px',
                borderRadius: '9999px',
                fontSize: '0.74rem',
                fontWeight: 800,
                color: '#2563EB',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '16px'
              }}
            >
              <span style={{ color: '#F97316' }}>●</span> ONE PLATFORM FOR GLOBAL PAYMENTS
            </div>
            <h2 
              style={{
                fontSize: 'clamp(2.1rem, 3.8vw, 3.2rem)',
                fontWeight: 900,
                lineHeight: 1.12,
                letterSpacing: '-0.025em',
                color: '#0F172A',
                margin: 0
              }}
            >
              EVERYTHING YOU NEED<br />
              FOR <span style={{ textDecoration: 'underline', textDecorationColor: '#FB923C' }}>INTERNATIONAL</span><br />
              PAYMENTS.
            </h2>
          </div>
          <div>
            <p 
              style={{
                fontSize: '1.05rem',
                color: '#475569',
                lineHeight: 1.6,
                margin: 0,
                maxWidth: '520px'
              }}
            >
              Manage international payments, FX conversion, multi-currency balances and payment tracking in one digital environment.
            </p>
          </div>
        </div>

        {/* 2-Column Layout: Left Visual Preview + Right 4 Capabilities & Journeys */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '36px',
            alignItems: 'stretch'
          }}
        >
          {/* Left Preview Box */}
          <div 
            style={{
              background: '#F8FAFC',
              border: '1.5px solid #E2E8F0',
              borderRadius: '28px',
              padding: '32px 24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div 
              style={{
                fontSize: '0.72rem',
                fontFamily: 'monospace',
                fontWeight: 900,
                color: '#2563EB',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '20px'
              }}
            >
              DIGITAL PAYMENTS INFRASTRUCTURE
            </div>

            {/* Central Slender Smartphone Mockup */}
            <div 
              style={{
                background: '#FFFFFF',
                border: '2.5px solid #0F172A',
                borderRadius: '28px',
                padding: '12px 10px 10px',
                boxShadow: '0 16px 36px -8px rgba(15, 23, 42, 0.18)',
                margin: '0 auto',
                width: '100%',
                maxWidth: '240px'
              }}
            >
              {/* Dynamic Island / Notch */}
              <div 
                style={{
                  width: '42px',
                  height: '8px',
                  background: '#0F172A',
                  borderRadius: '9999px',
                  margin: '0 auto 8px'
                }}
              />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', padding: '0 2px' }}>
                <span style={{ fontSize: '0.56rem', fontWeight: 800, color: '#64748B', letterSpacing: '0.04em' }}>
                  DIGITAL VAULT
                </span>
                <span style={{ width: '18px', height: '18px', background: '#FB923C', color: '#FFFFFF', borderRadius: '50%', fontSize: '0.58rem', fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  FX
                </span>
              </div>

              {/* Multi-Currency Balances Card */}
              <div style={{ background: '#0F172A', color: '#FFFFFF', padding: '10px 10px', borderRadius: '12px', marginBottom: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2px' }}>
                  <span style={{ color: '#94A3B8', fontSize: '0.62rem' }}>Supported Currencies</span>
                  <span style={{ fontSize: '0.56rem', color: '#38BDF8', fontWeight: 800, background: 'rgba(56, 189, 248, 0.15)', padding: '1px 5px', borderRadius: '9999px' }}>
                    Institutional
                  </span>
                </div>
                <div style={{ fontSize: '1.25rem', fontWeight: 900, letterSpacing: '-0.02em', color: '#FFFFFF', margin: '2px 0' }}>
                  30+ Active
                </div>
                <div style={{ color: '#FB923C', fontSize: '0.58rem', fontWeight: 700 }}>
                  ● Live Rates & Tier-1 Rails
                </div>
              </div>

              {/* 3 Capability Rows */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#F8FAFC', padding: '6px 8px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#FFEDD5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Globe size={11} color="#EA580C" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.68rem', fontWeight: 800, color: '#0F172A' }}>Cross-Border</div>
                      <div style={{ fontSize: '0.58rem', color: '#64748B' }}>Instant Settlement</div>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.62rem', fontWeight: 800, color: '#16A34A' }}>Instant</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#F8FAFC', padding: '6px 8px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <RefreshCw size={11} color="#2563EB" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.68rem', fontWeight: 800, color: '#0F172A' }}>FX Conversion</div>
                      <div style={{ fontSize: '0.58rem', color: '#64748B' }}>Wholesale Rates</div>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.64rem', fontFamily: 'monospace', fontWeight: 800, color: '#0F172A' }}>0.35%</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#F8FAFC', padding: '6px 8px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Wallet size={11} color="#0F172A" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.68rem', fontWeight: 800, color: '#0F172A' }}>Multi-Currency</div>
                      <div style={{ fontSize: '0.58rem', color: '#64748B' }}>Segregated Vaults</div>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.62rem', fontWeight: 800, color: '#2563EB' }}>Active</span>
                </div>
              </div>

              {/* Bottom Home Indicator Bar */}
              <div 
                style={{
                  width: '36px',
                  height: '3px',
                  background: '#CBD5E1',
                  borderRadius: '9999px',
                  margin: '8px auto 2px'
                }}
              />
            </div>

            {/* Floating Global Reach Pill */}
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                background: '#FFFFFF',
                border: '1.5px solid #E2E8F0',
                borderRadius: '16px',
                padding: '10px 14px',
                marginTop: '20px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
              }}
            >
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#FFEDD5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Globe size={18} color="#EA580C" />
              </div>
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 900, color: '#0F172A' }}>Global Reach</div>
                <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 600 }}>170+ Countries Supported</div>
              </div>
            </div>
          </div>

          {/* Right 4 Key Capabilities (2x2 Grid) + Audience Split */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div 
                style={{
                  fontSize: '0.74rem',
                  fontFamily: 'monospace',
                  fontWeight: 800,
                  color: '#64748B',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '14px'
                }}
              >
                Key Capabilities
              </div>

              {/* 2x2 Grid of Feature Cards */}
              <div 
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '16px',
                  marginBottom: '24px'
                }}
              >
                {/* Card 01: International Payments */}
                <div 
                  style={{
                    background: '#F8FAFC',
                    border: '1.5px solid #E2E8F0',
                    borderRadius: '18px',
                    padding: '20px 18px',
                    position: 'relative'
                  }}
                >
                  <span style={{ position: 'absolute', top: '16px', right: '16px', fontFamily: 'monospace', fontSize: '0.75rem', fontWeight: 900, color: '#94A3B8' }}>
                    01
                  </span>
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#FFFFFF', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                    <Globe size={20} color="#0F172A" />
                  </div>
                  <h3 style={{ fontSize: '0.96rem', fontWeight: 900, color: '#0F172A', margin: '0 0 6px' }}>
                    INTERNATIONAL PAYMENTS
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: '#64748B', lineHeight: 1.45, margin: 0 }}>
                    Send and receive money across supported markets and currencies.
                  </p>
                </div>

                {/* Card 02: FX Conversion */}
                <div 
                  style={{
                    background: '#F8FAFC',
                    border: '1.5px solid #E2E8F0',
                    borderRadius: '18px',
                    padding: '20px 18px',
                    position: 'relative'
                  }}
                >
                  <span style={{ position: 'absolute', top: '16px', right: '16px', fontFamily: 'monospace', fontSize: '0.75rem', fontWeight: 900, color: '#94A3B8' }}>
                    02
                  </span>
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#FFFFFF', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                    <RefreshCw size={20} color="#0F172A" />
                  </div>
                  <h3 style={{ fontSize: '0.96rem', fontWeight: 900, color: '#0F172A', margin: '0 0 6px' }}>
                    FX CONVERSION
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: '#64748B', lineHeight: 1.45, margin: 0 }}>
                    Exchange currencies at competitive rates.
                  </p>
                </div>

                {/* Card 03: Multi-Currency Wallet */}
                <div 
                  style={{
                    background: '#F8FAFC',
                    border: '1.5px solid #E2E8F0',
                    borderRadius: '18px',
                    padding: '20px 18px',
                    position: 'relative'
                  }}
                >
                  <span style={{ position: 'absolute', top: '16px', right: '16px', fontFamily: 'monospace', fontSize: '0.75rem', fontWeight: 900, color: '#94A3B8' }}>
                    03
                  </span>
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#FFFFFF', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                    <Wallet size={20} color="#0F172A" />
                  </div>
                  <h3 style={{ fontSize: '0.96rem', fontWeight: 900, color: '#0F172A', margin: '0 0 6px' }}>
                    MULTI-CURRENCY WALLET
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: '#64748B', lineHeight: 1.45, margin: 0 }}>
                    Hold, receive and manage supported currencies.
                  </p>
                </div>

                {/* Card 04: Payment Tracking */}
                <div 
                  style={{
                    background: '#F8FAFC',
                    border: '1.5px solid #E2E8F0',
                    borderRadius: '18px',
                    padding: '20px 18px',
                    position: 'relative'
                  }}
                >
                  <span style={{ position: 'absolute', top: '16px', right: '16px', fontFamily: 'monospace', fontSize: '0.75rem', fontWeight: 900, color: '#94A3B8' }}>
                    04
                  </span>
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#FFFFFF', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                    <Activity size={20} color="#0F172A" />
                  </div>
                  <h3 style={{ fontSize: '0.96rem', fontWeight: 900, color: '#0F172A', margin: '0 0 6px' }}>
                    PAYMENT TRACKING
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: '#64748B', lineHeight: 1.45, margin: 0 }}>
                    Track your payments throughout the transaction journey.
                  </p>
                </div>
              </div>
            </div>

            {/* Audience Split Cards: For Individuals & For Businesses */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '16px'
              }}
            >
              {/* For Individuals */}
              <div 
                style={{
                  background: '#EFF6FF',
                  border: '1.5px solid #BFDBFE',
                  borderRadius: '20px',
                  padding: '20px 18px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onClick={() => onSelectJourney && onSelectJourney('individuals')}
              >
                <h4 style={{ fontSize: '0.95rem', fontWeight: 900, color: '#1E40AF', margin: '0 0 8px' }}>
                  FOR INDIVIDUALS
                </h4>
                <p style={{ fontSize: '0.84rem', color: '#334155', lineHeight: 1.45, margin: 0 }}>
                  Send money, receive payments, exchange currencies and manage your international finances.
                </p>
              </div>

              {/* For Businesses */}
              <div 
                style={{
                  background: '#FFF7ED',
                  border: '1.5px solid #FED7AA',
                  borderRadius: '20px',
                  padding: '20px 18px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onClick={() => onSelectJourney && onSelectJourney('businesses')}
              >
                <h4 style={{ fontSize: '0.95rem', fontWeight: 900, color: '#9A3412', margin: '0 0 8px' }}>
                  FOR BUSINESSES
                </h4>
                <p style={{ fontSize: '0.84rem', color: '#334155', lineHeight: 1.45, margin: 0 }}>
                  Manage corporate payments, bulk payments, payroll and multi-currency operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
