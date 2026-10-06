'use client';

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  UserCheck, 
  Search, 
  Lock, 
  ArrowUpRight, 
  CheckCircle2, 
  User, 
  Building2, 
  ChevronDown, 
  Check, 
  ArrowRight,
  Headphones,
  Shield,
  Activity,
  Smartphone
} from 'lucide-react';

const SECURITY_CONTROLS = [
  {
    icon: UserCheck,
    title: "KYC / KYB",
    desc: "Automated verification protocols for individual and institutional accounts.",
    tag: "VERIFIED",
    color: "#2563EB",
    bg: "rgba(37, 99, 235, 0.08)"
  },
  {
    icon: ShieldCheck,
    title: "AML Controls",
    desc: "Real-time anti-money laundering protocols and global sanctions screening.",
    tag: "COMPLIANT",
    color: "#16A34A",
    bg: "rgba(22, 163, 74, 0.08)"
  },
  {
    icon: Search,
    title: "Transaction Monitoring",
    desc: "Automated 24/7 oversight across cross-border payment flows.",
    tag: "24/7 MONITORED",
    color: "#EA580C",
    bg: "rgba(234, 88, 12, 0.08)"
  },
  {
    icon: Lock,
    title: "Secure Authentication",
    desc: "Multi-factor authentication safeguards and institutional encryption.",
    tag: "ENCRYPTED",
    color: "#7C3AED",
    bg: "rgba(124, 58, 237, 0.08)"
  }
];

const FAQS = [
  {
    q: "1. Can I send and receive international payments?",
    a: "Yes. FX Master supports sending and receiving money internationally across supported countries and currencies."
  },
  {
    q: "2. How can FX Master help individuals?",
    a: "Individuals can send and receive international payments, exchange currencies and manage multiple currencies through one platform."
  },
  {
    q: "3. How can FX Master help businesses?",
    a: "Businesses can manage international payments, bulk payments, payroll, FX and multi-currency requirements."
  },
  {
    q: "4. Can I track my international payments?",
    a: "Yes. FX Master provides payment tracking so you can monitor your transaction status."
  },
  {
    q: "5. Is FX Master secure and regulated?",
    a: "Yes. FX Master operates as a regulated payment institution with KYC, AML and transaction-monitoring controls."
  }
];

export default function ShopFavsSection({ onOpenAuth, onSelectJourney }) {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section 
      id="trust-experience" 
      style={{
        background: '#FFFFFF',
        color: '#0F172A',
        padding: '44px 0 70px',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Split Header */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            alignItems: 'flex-end',
            marginBottom: '44px'
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
              <span style={{ color: '#F97316' }}>●</span> TRUST, VISIBILITY & DIGITAL EXPERIENCE
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
              SECURE. REGULATED.<br />
              BUILT FOR <span style={{ textDecoration: 'underline', textDecorationColor: '#FB923C' }}>GLOBAL</span><br />
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
              FX Master incorporates compliance and security controls throughout the customer and transaction lifecycle.
            </p>
          </div>
        </div>

        {/* 4 Security & Compliance Pillar Cards - High Quality 4-Col Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px',
            marginBottom: '48px'
          }}
        >
          {SECURITY_CONTROLS.map((control, idx) => {
            const IconComponent = control.icon;
            return (
              <div 
                key={idx} 
                style={{
                  background: '#F8FAFC',
                  border: '1.5px solid #E2E8F0',
                  borderRadius: '20px',
                  padding: '24px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.02)',
                  transition: 'transform 0.2s ease, border-color 0.2s ease'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <div 
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '12px',
                        background: control.bg,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <IconComponent size={22} color={control.color} />
                    </div>
                    <span 
                      style={{
                        fontFamily: 'monospace',
                        background: control.bg,
                        color: control.color,
                        padding: '3px 8px',
                        borderRadius: '6px',
                        fontSize: '0.68rem',
                        fontWeight: 900
                      }}
                    >
                      {control.tag}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 900, color: '#0F172A', textTransform: 'uppercase', margin: '0 0 6px' }}>
                    {control.title}
                  </h3>
                  <p style={{ fontSize: '0.84rem', color: '#64748B', lineHeight: 1.5, margin: 0 }}>
                    {control.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Track Your Payments Card - Premium Live Transaction Pipeline */}
        <div 
          style={{
            background: '#FFFFFF',
            border: '1.5px solid #E2E8F0',
            borderRadius: '24px',
            padding: '28px 26px',
            marginBottom: '48px',
            boxShadow: '0 10px 30px -10px rgba(15, 23, 42, 0.06)'
          }}
        >
          {/* Header Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
            <div>
              <div style={{ fontFamily: 'monospace', fontSize: '0.74rem', color: '#2563EB', fontWeight: 800, textTransform: 'uppercase', marginBottom: '4px' }}>
                PAYMENT VISIBILITY
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 900, color: '#0F172A', margin: '0 0 4px' }}>
                Track Your Payments
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#64748B', margin: 0 }}>
                Stay informed about your payment status and transaction activity.
              </p>
            </div>
            
            {/* Live Status Pill */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#F0FDF4', border: '1px solid #BBF7D0', padding: '6px 14px', borderRadius: '9999px', fontSize: '0.78rem', fontWeight: 800, color: '#16A34A' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#16A34A', boxShadow: '0 0 0 3px rgba(22, 163, 74, 0.2)' }} />
              <span>Live Tracking • Ref #FX-948201</span>
            </div>
          </div>

          {/* 4 Connected Pipeline Stages */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
              gap: '14px',
              position: 'relative'
            }}
          >
            {/* Stage 1: Initiated */}
            <div 
              style={{
                background: '#FFFFFF',
                border: '1.5px solid #E2E8F0',
                borderRadius: '16px',
                padding: '16px 14px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#F0FDF4', border: '1px solid #BBF7D0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Check size={14} color="#16A34A" strokeWidth={3} />
                  </div>
                  <span style={{ fontSize: '0.62rem', fontFamily: 'monospace', fontWeight: 800, color: '#16A34A', background: '#F0FDF4', padding: '2px 6px', borderRadius: '4px' }}>
                    09:30 AM
                  </span>
                </div>
                <div style={{ fontSize: '0.9rem', fontWeight: 900, color: '#0F172A', marginBottom: '2px' }}>
                  01 / Initiated
                </div>
                <div style={{ fontSize: '0.74rem', color: '#64748B' }}>
                  Payment instruction verified
                </div>
              </div>
            </div>

            {/* Stage 2: Processing */}
            <div 
              style={{
                background: '#FFFFFF',
                border: '1.5px solid #E2E8F0',
                borderRadius: '16px',
                padding: '16px 14px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#F0FDF4', border: '1px solid #BBF7D0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Check size={14} color="#16A34A" strokeWidth={3} />
                  </div>
                  <span style={{ fontSize: '0.62rem', fontFamily: 'monospace', fontWeight: 800, color: '#16A34A', background: '#F0FDF4', padding: '2px 6px', borderRadius: '4px' }}>
                    09:31 AM
                  </span>
                </div>
                <div style={{ fontSize: '0.9rem', fontWeight: 900, color: '#0F172A', marginBottom: '2px' }}>
                  02 / Processing
                </div>
                <div style={{ fontSize: '0.74rem', color: '#64748B' }}>
                  AML & Compliance screening
                </div>
              </div>
            </div>

            {/* Stage 3: In Progress (Active) */}
            <div 
              style={{
                background: '#FFF7ED',
                border: '1.5px solid #FB923C',
                borderRadius: '16px',
                padding: '16px 14px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 4px 12px rgba(251, 146, 60, 0.15)'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#FB923C', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Activity size={14} color="#FFFFFF" strokeWidth={3} />
                  </div>
                  <span style={{ fontSize: '0.62rem', fontFamily: 'monospace', fontWeight: 900, color: '#EA580C', background: 'rgba(251, 146, 60, 0.2)', padding: '2px 6px', borderRadius: '4px' }}>
                    IN FLIGHT
                  </span>
                </div>
                <div style={{ fontSize: '0.9rem', fontWeight: 900, color: '#9A3412', marginBottom: '2px' }}>
                  03 / In Progress
                </div>
                <div style={{ fontSize: '0.74rem', color: '#C2410C', fontWeight: 600 }}>
                  Clearing SEPA banking rail
                </div>
              </div>
            </div>

            {/* Stage 4: Completed */}
            <div 
              style={{
                background: '#F8FAFC',
                border: '1.5px dashed #CBD5E1',
                borderRadius: '16px',
                padding: '16px 14px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#F1F5F9', border: '1px solid #CBD5E1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#94A3B8' }} />
                  </div>
                  <span style={{ fontSize: '0.62rem', fontFamily: 'monospace', fontWeight: 800, color: '#64748B', background: '#F1F5F9', padding: '2px 6px', borderRadius: '4px' }}>
                    NEXT
                  </span>
                </div>
                <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#64748B', marginBottom: '2px' }}>
                  04 / Completed
                </div>
                <div style={{ fontSize: '0.74rem', color: '#94A3B8' }}>
                  Funds credited to beneficiary
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Access FX Master Anywhere (Mobile Experience Showcase) */}
        <div 
          style={{
            background: '#0B0F19',
            borderRadius: '28px',
            padding: '44px 36px',
            color: '#FFFFFF',
            marginBottom: '48px',
            boxShadow: '0 20px 45px -10px rgba(11, 15, 25, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Subtle Ambient Glows */}
          <div 
            style={{
              position: 'absolute',
              top: '-20%',
              right: '10%',
              width: '350px',
              height: '350px',
              background: 'radial-gradient(circle, rgba(251, 146, 60, 0.12) 0%, transparent 70%)',
              filter: 'blur(50px)',
              pointerEvents: 'none'
            }}
          />

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px',
              alignItems: 'center',
              position: 'relative',
              zIndex: 1
            }}
          >
            <div>
              <h3 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.2, margin: '0 0 14px' }}>
                Access FX Master Anywhere
              </h3>
              <p style={{ fontSize: '0.98rem', color: '#94A3B8', lineHeight: 1.6, marginBottom: '28px', maxWidth: '460px' }}>
                Use FX Master across digital and mobile experiences to manage supported payment functions.
              </p>

              {/* QR & App Stores Download Card */}
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  background: '#131B2E',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  padding: '18px 22px',
                  flexWrap: 'wrap'
                }}
              >
                {/* QR SVG */}
                <div style={{ background: '#0B0F19', padding: '10px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <svg width="52" height="52" viewBox="0 0 64 64" fill="none">
                    <rect x="2" y="2" width="18" height="18" rx="4" stroke="#FB923C" strokeWidth="3" fill="none"/>
                    <rect x="6" y="6" width="10" height="10" rx="2" fill="#FB923C"/>
                    <rect x="44" y="2" width="18" height="18" rx="4" stroke="#FB923C" strokeWidth="3" fill="none"/>
                    <rect x="48" y="6" width="10" height="10" rx="2" fill="#FB923C"/>
                    <rect x="2" y="44" width="18" height="18" rx="4" stroke="#FB923C" strokeWidth="3" fill="none"/>
                    <rect x="6" y="48" width="10" height="10" rx="2" fill="#FB923C"/>
                    <rect x="26" y="4" width="4" height="4" fill="#FFFFFF"/>
                    <rect x="34" y="4" width="4" height="4" fill="#FFFFFF"/>
                    <rect x="26" y="12" width="4" height="4" fill="#FFFFFF"/>
                    <rect x="34" y="12" width="4" height="4" fill="#FFFFFF"/>
                    <rect x="20" y="20" width="24" height="24" rx="6" fill="#FB923C"/>
                    <text x="32" y="36" fill="#0B0F19" fontSize="11" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">FX</text>
                  </svg>
                </div>

                <div>
                  <div style={{ fontSize: '0.78rem', fontFamily: 'monospace', fontWeight: 900, color: '#FFFFFF', marginBottom: '4px' }}>
                    GET THE APP
                  </div>
                  <p style={{ fontSize: '0.82rem', color: '#94A3B8', margin: '0 0 10px' }}>
                    Scan QR or download for iOS and Android.
                  </p>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <a 
                      href="#appstore" 
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        background: '#0B0F19',
                        color: '#FFFFFF',
                        padding: '8px 14px',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        border: '1px solid rgba(255, 255, 255, 0.15)'
                      }}
                    >
                      <span>App Store</span>
                    </a>
                    <a 
                      href="#googleplay" 
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        background: '#0B0F19',
                        color: '#FFFFFF',
                        padding: '8px 14px',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        border: '1px solid rgba(255, 255, 255, 0.15)'
                      }}
                    >
                      <span>Google Play</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Slender Smartphone Device (Realistic 19.5:9 Flagship Ratio) */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div 
                style={{
                  width: '100%',
                  maxWidth: '240px',
                  background: '#FFFFFF',
                  borderRadius: '30px',
                  padding: '12px 10px 10px',
                  color: '#0F172A',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 0 4px rgba(255, 255, 255, 0.15)',
                  border: '3px solid #0F172A'
                }}
              >
                {/* Dynamic Island / Notch */}
                <div style={{ width: '44px', height: '9px', background: '#0F172A', borderRadius: '9999px', margin: '0 auto 8px' }} />
                
                {/* Header inside phone */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', padding: '0 2px' }}>
                  <span style={{ fontSize: '0.58rem', fontWeight: 800, color: '#64748B', letterSpacing: '0.04em' }}>
                    FX MASTER MOBILE
                  </span>
                  <span style={{ width: '18px', height: '18px', background: '#FB923C', color: '#FFFFFF', borderRadius: '50%', fontSize: '0.58rem', fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    FX
                  </span>
                </div>

                {/* Multi-Currency Balance */}
                <div style={{ background: '#0F172A', color: '#FFFFFF', padding: '10px', borderRadius: '12px', marginBottom: '8px' }}>
                  <div style={{ fontSize: '0.62rem', color: '#94A3B8' }}>Active Multi-Currency</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 900, fontFamily: 'monospace', color: '#FFFFFF', margin: '2px 0' }}>
                    £24,850.00
                  </div>
                  <div style={{ fontSize: '0.58rem', color: '#38BDF8', fontWeight: 700 }}>
                    GBP • Institutional Vault
                  </div>
                </div>

                {/* Live Transfer Rate Widget */}
                <div style={{ background: '#F8FAFC', padding: '8px 10px', borderRadius: '10px', border: '1px solid #E2E8F0', marginBottom: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', marginBottom: '3px' }}>
                    <span style={{ color: '#64748B' }}>Send: 1,000 GBP</span>
                    <span style={{ fontWeight: 800, color: '#0F172A' }}>➔ €1,184.00</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.62rem' }}>
                    <span style={{ color: '#16A34A', fontWeight: 800 }}>● Live Mid-Market</span>
                    <span style={{ fontFamily: 'monospace', color: '#64748B' }}>Tier-1 Rail</span>
                  </div>
                </div>

                {/* Status indicator */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '4px 6px', fontSize: '0.62rem', color: '#64748B', marginBottom: '8px' }}>
                  <span>Security: 256-Bit SSL</span>
                  <span style={{ color: '#16A34A', fontWeight: 800 }}>● Regulated</span>
                </div>

                {/* Send button */}
                <button 
                  type="button" 
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, #FB923C 0%, #F97316 100%)',
                    color: '#0F172A',
                    border: 'none',
                    borderRadius: '10px',
                    padding: '9px',
                    fontSize: '0.78rem',
                    fontWeight: 900,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '4px',
                    cursor: 'pointer'
                  }}
                  onClick={() => onOpenAuth && onOpenAuth('signup')}
                >
                  <span>Initiate Global Payment</span>
                  <ArrowRight size={13} strokeWidth={2.5} />
                </button>

                {/* Home bar */}
                <div style={{ width: '36px', height: '3px', background: '#CBD5E1', borderRadius: '9999px', margin: '8px auto 2px' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Unified "Why FX Master?" & "Start Managing Your Global Payments" Master Container */}
        <div 
          style={{
            background: '#FFFFFF',
            border: '1.5px solid #E2E8F0',
            borderRadius: '28px',
            padding: '32px 30px',
            marginBottom: '56px',
            boxShadow: '0 10px 30px -10px rgba(15, 23, 42, 0.06)',
            position: 'relative'
          }}
        >
          {/* Top Integrated "Why FX Master" Overview */}
          <div 
            style={{
              paddingBottom: '24px',
              marginBottom: '28px',
              borderBottom: '1px solid #E2E8F0'
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '16px' }}>
              <div 
                style={{ 
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.08) 0%, rgba(249, 115, 22, 0.08) 100%)',
                  border: '1.5px solid rgba(37, 99, 235, 0.16)',
                  borderRadius: '12px',
                  padding: '8px 24px',
                  boxShadow: '0 4px 14px rgba(37, 99, 235, 0.06)'
                }}
              >
                <h3 
                  style={{ 
                    margin: 0,
                    color: '#2563EB', 
                    fontWeight: 900, 
                    fontSize: 'clamp(1.15rem, 2vw, 1.4rem)',
                    textTransform: 'uppercase', 
                    letterSpacing: '0.04em',
                    lineHeight: 1
                  }}
                >
                  WHY FX MASTER<span style={{ color: '#F97316' }}>?</span>
                </h3>
              </div>
            </div>
            <p 
              style={{
                fontSize: '1.02rem',
                lineHeight: 1.75,
                color: '#334155',
                fontWeight: 400,
                margin: 0
              }}
            >
              FX Master is a global financial infrastructure platform enabling businesses and individuals to manage cross-border payments, foreign exchange and multi-currency transactions through payment orchestration, corporate payments, multi-currency wallets, dedicated IBANs, automated compliance, real-time tracking and API-driven payment solutions.
            </p>
          </div>

          {/* Start Managing Your Global Payments Title */}
          <div style={{ textAlign: 'center', marginBottom: '22px' }}>
            <h3 style={{ fontSize: 'clamp(1.5rem, 2.4vw, 2rem)', fontWeight: 900, color: '#0F172A', margin: 0 }}>
              Start Managing Your Global Payments
            </h3>
          </div>

          {/* 2 Audience Cards: Individuals & Businesses */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '32px' }}>
            {/* For Individuals */}
            <div 
              style={{
                background: '#F8FAFC',
                border: '1.5px solid #BFDBFE',
                borderRadius: '20px',
                padding: '24px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              onClick={() => onSelectJourney && onSelectJourney('individuals')}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <div style={{ width: '34px', height: '34px', borderRadius: '10px', background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <User size={18} color="#2563EB" />
                  </div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 900, color: '#1E40AF', margin: 0 }}>
                    FOR INDIVIDUALS
                  </h4>
                </div>
                <p style={{ margin: '0 0 14px', fontSize: '0.88rem', color: '#475569', lineHeight: 1.5 }}>
                  Send, receive and manage international payments.
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', fontWeight: 800, color: '#2563EB' }}>
                <span>Explore Individual Payments</span>
                <ArrowUpRight size={15} />
              </div>
            </div>

            {/* For Businesses */}
            <div 
              style={{
                background: '#F8FAFC',
                border: '1.5px solid #FED7AA',
                borderRadius: '20px',
                padding: '24px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              onClick={() => onSelectJourney && onSelectJourney('businesses')}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <div style={{ width: '34px', height: '34px', borderRadius: '10px', background: '#FFF7ED', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Building2 size={18} color="#EA580C" />
                  </div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 900, color: '#9A3412', margin: 0 }}>
                    FOR BUSINESSES
                  </h4>
                </div>
                <p style={{ margin: '0 0 14px', fontSize: '0.88rem', color: '#475569', lineHeight: 1.5 }}>
                  Manage corporate payments, bulk payouts, payroll and FX.
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', fontWeight: 800, color: '#EA580C' }}>
                <span>Explore Business Payments</span>
                <ArrowUpRight size={15} />
              </div>
            </div>
          </div>

          {/* Primary CTA: Talk to Our Payments Team */}
          <div style={{ textAlign: 'center' }}>
            <button
              type="button"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '16px 36px',
                fontSize: '1.02rem',
                fontWeight: 900,
                background: '#0F172A',
                color: '#FFFFFF',
                borderRadius: '9999px',
                cursor: 'pointer',
                border: 'none',
                boxShadow: '0 10px 25px -5px rgba(15, 23, 42, 0.35)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
              onClick={() => onOpenAuth ? onOpenAuth('login') : null}
            >
              <Headphones size={20} color="#FB923C" />
              <span>Talk to Our Payments Team</span>
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div id="faqs">
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h3 style={{ fontSize: 'clamp(1.7rem, 2.8vw, 2.3rem)', fontWeight: 900, color: '#0F172A', margin: 0 }}>
              Frequently Asked Questions
            </h3>
          </div>

          <div style={{ maxWidth: '840px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  style={{
                    background: isOpen ? '#FFFFFF' : '#F8FAFC',
                    border: isOpen ? '1.5px solid #FB923C' : '1px solid #E2E8F0',
                    borderRadius: '16px',
                    padding: '20px 24px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: isOpen ? '0 8px 20px -6px rgba(251, 146, 60, 0.15)' : 'none'
                  }}
                  onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                    <h4 style={{ fontSize: '1.02rem', fontWeight: 800, color: isOpen ? '#EA580C' : '#0F172A', margin: 0 }}>
                      {faq.q}
                    </h4>
                    <ChevronDown
                      size={18}
                      color={isOpen ? '#EA580C' : '#64748B'}
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease',
                        flexShrink: 0
                      }}
                    />
                  </div>
                  {isOpen && (
                    <p style={{ fontSize: '0.92rem', color: '#475569', marginTop: '12px', lineHeight: 1.6, margin: '12px 0 0' }}>
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
  );
}
