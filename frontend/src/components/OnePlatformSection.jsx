'use client';

import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Plus, 
  Check, 
  Copy, 
  Globe2, 
  ShieldCheck, 
  RefreshCw, 
  Wallet, 
  ArrowRight,
  TrendingUp,
  CheckCircle2
} from 'lucide-react';

export default function OnePlatformSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard?.writeText('GB82 FXMS 0400 0412 8934 21');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      id="payments"
      style={{
        background: '#0B0F19',
        color: '#FFFFFF',
        padding: '42px 0 80px',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
      }}
    >
      {/* Background Ambient Glows */}
      <div 
        style={{
          position: 'absolute',
          top: '-10%',
          left: '20%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(249, 115, 22, 0.08) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '-10%',
          right: '15%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
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
                background: 'rgba(251, 146, 60, 0.12)',
                border: '1px solid rgba(251, 146, 60, 0.3)',
                padding: '6px 14px',
                borderRadius: '9999px',
                fontSize: '0.74rem',
                fontWeight: 800,
                color: '#FB923C',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '16px'
              }}
            >
              <span style={{ color: '#F97316' }}>●</span> INTERNATIONAL PAYMENTS & FX
            </div>
            <h2 
              style={{
                fontSize: 'clamp(2.1rem, 3.8vw, 3.2rem)',
                fontWeight: 900,
                lineHeight: 1.12,
                letterSpacing: '-0.025em',
                color: '#FFFFFF',
                margin: 0
              }}
            >
              SEND AND RECEIVE<br />
              MONEY <span style={{ color: '#FB923C' }}>ACROSS BORDERS</span>.
            </h2>
          </div>
          <div>
            <p 
              style={{
                fontSize: '1.05rem',
                color: '#94A3B8',
                lineHeight: 1.6,
                margin: 0,
                maxWidth: '520px'
              }}
            >
              From payment instruction through processing and settlement, FX Master provides a structured environment for international payments.
            </p>
          </div>
        </div>

        {/* 5-Stage Structured Transaction Lifecycle Bar */}
        <div 
          style={{
            background: '#131B2E',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            padding: '16px 28px',
            marginBottom: '24px',
            boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.5)'
          }}
        >
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px'
            }}
          >
            {/* Step 1 */}
            <div 
              style={{ 
                background: 'rgba(37, 99, 235, 0.16)', 
                border: '1px solid rgba(56, 189, 248, 0.35)', 
                borderRadius: '10px', 
                padding: '6px 14px', 
                fontSize: '0.88rem', 
                fontWeight: 800, 
                color: '#FFFFFF', 
                letterSpacing: '-0.01em',
                display: 'inline-flex',
                alignItems: 'center'
              }}
            >
              Payment Instruction
            </div>

            <span style={{ color: '#475569', fontWeight: 800, fontSize: '1.1rem' }}>→</span>

            {/* Step 2 */}
            <div 
              style={{ 
                background: 'rgba(30, 41, 59, 0.7)', 
                border: '1px solid rgba(255, 255, 255, 0.1)', 
                borderRadius: '10px', 
                padding: '6px 14px', 
                fontSize: '0.88rem', 
                fontWeight: 700, 
                color: '#E2E8F0', 
                letterSpacing: '-0.01em',
                display: 'inline-flex',
                alignItems: 'center'
              }}
            >
              Compliance
            </div>

            <span style={{ color: '#475569', fontWeight: 800, fontSize: '1.1rem' }}>→</span>

            {/* Step 3 */}
            <div 
              style={{ 
                background: 'rgba(30, 41, 59, 0.7)', 
                border: '1px solid rgba(255, 255, 255, 0.1)', 
                borderRadius: '10px', 
                padding: '6px 14px', 
                fontSize: '0.88rem', 
                fontWeight: 700, 
                color: '#E2E8F0', 
                letterSpacing: '-0.01em',
                display: 'inline-flex',
                alignItems: 'center'
              }}
            >
              FX Conversion
            </div>

            <span style={{ color: '#475569', fontWeight: 800, fontSize: '1.1rem' }}>→</span>

            {/* Step 4 */}
            <div 
              style={{ 
                background: 'rgba(30, 41, 59, 0.7)', 
                border: '1px solid rgba(255, 255, 255, 0.1)', 
                borderRadius: '10px', 
                padding: '6px 14px', 
                fontSize: '0.88rem', 
                fontWeight: 700, 
                color: '#E2E8F0', 
                letterSpacing: '-0.01em',
                display: 'inline-flex',
                alignItems: 'center'
              }}
            >
              Processing
            </div>

            <span style={{ color: '#475569', fontWeight: 800, fontSize: '1.1rem' }}>→</span>

            {/* Step 5 */}
            <div 
              style={{ 
                background: 'rgba(22, 163, 74, 0.16)', 
                border: '1px solid rgba(74, 222, 128, 0.35)', 
                borderRadius: '10px', 
                padding: '6px 14px', 
                fontSize: '0.88rem', 
                fontWeight: 800, 
                color: '#4ADE80', 
                letterSpacing: '-0.01em',
                display: 'inline-flex',
                alignItems: 'center'
              }}
            >
              Settlement
            </div>
          </div>
        </div>

        {/* Section Sub-heading: Manage Your Currencies */}
        <div style={{ marginBottom: '20px' }}>
          <h3 
            style={{
              fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
              fontWeight: 900,
              color: '#FFFFFF',
              margin: 0
            }}
          >
            Manage Your Currencies
          </h3>
        </div>

        {/* 3-Box Bento Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            marginBottom: '52px'
          }}
        >
          {/* Bento Box 1: FX CONVERSION */}
          <div 
            style={{
              background: '#131B2E',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '24px',
              padding: '28px 24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.4)',
              transition: 'transform 0.2s ease, border-color 0.2s ease'
            }}
          >
            <div>
              <div 
                style={{
                  fontSize: '0.72rem',
                  fontFamily: 'monospace',
                  fontWeight: 800,
                  color: '#38BDF8',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '10px'
                }}
              >
                01 / FX CONVERSION
              </div>
              <h4 
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 900,
                  color: '#FFFFFF',
                  lineHeight: 1.3,
                  margin: '0 0 8px'
                }}
              >
                EXCHANGE SUPPORTED<br />CURRENCIES.
              </h4>
              <p style={{ fontSize: '0.86rem', color: '#94A3B8', lineHeight: 1.5, margin: '0 0 20px' }}>
                Exchange supported currencies at competitive rates.
              </p>
            </div>

            {/* White Panel with Currencies 2x2 Grid */}
            <div 
              style={{
                background: '#FFFFFF',
                borderRadius: '18px',
                padding: '16px',
                color: '#0F172A',
                position: 'relative'
              }}
            >
              <div 
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '10px',
                  marginBottom: '8px'
                }}
              >
                {/* GBP */}
                <div style={{ background: '#F8FAFC', padding: '10px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ fontSize: '0.65rem', fontWeight: 900, background: '#0F172A', color: '#FFFFFF', padding: '2px 6px', borderRadius: '4px' }}>GB</span>
                    <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', fontWeight: 800, color: '#64748B' }}>GBP</span>
                  </div>
                  <div style={{ fontSize: '0.92rem', fontFamily: 'monospace', fontWeight: 900, color: '#0F172A' }}>£8,420.00</div>
                </div>

                {/* USD */}
                <div style={{ background: '#F8FAFC', padding: '10px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ fontSize: '0.65rem', fontWeight: 900, background: '#2563EB', color: '#FFFFFF', padding: '2px 6px', borderRadius: '4px' }}>US</span>
                    <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', fontWeight: 800, color: '#64748B' }}>USD</span>
                  </div>
                  <div style={{ fontSize: '0.92rem', fontFamily: 'monospace', fontWeight: 900, color: '#0F172A' }}>$12,650.80</div>
                </div>

                {/* EUR */}
                <div style={{ background: '#F8FAFC', padding: '10px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ fontSize: '0.65rem', fontWeight: 900, background: '#0284C7', color: '#FFFFFF', padding: '2px 6px', borderRadius: '4px' }}>EU</span>
                    <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', fontWeight: 800, color: '#64748B' }}>EUR</span>
                  </div>
                  <div style={{ fontSize: '0.92rem', fontFamily: 'monospace', fontWeight: 900, color: '#0F172A' }}>€5,230.45</div>
                </div>

                {/* NGN */}
                <div style={{ background: '#F8FAFC', padding: '10px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ fontSize: '0.65rem', fontWeight: 900, background: '#16A34A', color: '#FFFFFF', padding: '2px 6px', borderRadius: '4px' }}>NG</span>
                    <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', fontWeight: 800, color: '#64748B' }}>NGN</span>
                  </div>
                  <div style={{ fontSize: '0.92rem', fontFamily: 'monospace', fontWeight: 900, color: '#0F172A' }}>₦3,890,000</div>
                </div>
              </div>

              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '6px',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  color: '#16A34A'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <TrendingUp size={13} />
                  <span>Wholesale Mid-Market FX</span>
                </div>
                <div 
                  style={{
                    width: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    background: '#0F172A',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                  title="Add Currency"
                >
                  <Plus size={14} strokeWidth={3} />
                </div>
              </div>
            </div>
          </div>

          {/* Bento Box 2: MULTI-CURRENCY BALANCES */}
          <div 
            style={{
              background: '#131B2E',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '24px',
              padding: '28px 24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.4)'
            }}
          >
            <div>
              <div 
                style={{
                  fontSize: '0.72rem',
                  fontFamily: 'monospace',
                  fontWeight: 800,
                  color: '#FB923C',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '10px'
                }}
              >
                02 / MULTI-CURRENCY BALANCES
              </div>
              <h4 
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 900,
                  color: '#FFFFFF',
                  lineHeight: 1.3,
                  margin: '0 0 8px'
                }}
              >
                HOLD AND MANAGE<br />MULTIPLE CURRENCIES.
              </h4>
              <p style={{ fontSize: '0.86rem', color: '#94A3B8', lineHeight: 1.5, margin: '0 0 20px' }}>
                Hold, receive and manage supported currencies in multi-currency accounts.
              </p>
            </div>

            {/* Overlapping 3D Debit Cards Visual */}
            <div 
              style={{
                position: 'relative',
                height: '190px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {/* Back Orange Card */}
              <div 
                style={{
                  position: 'absolute',
                  width: '230px',
                  height: '140px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)',
                  padding: '14px 16px',
                  color: '#FFFFFF',
                  transform: 'rotate(-7deg) translate(-12px, -10px)',
                  boxShadow: '0 12px 28px rgba(249, 115, 22, 0.3)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ width: '28px', height: '20px', background: '#FDE047', borderRadius: '4px', opacity: 0.9 }} />
                  <span style={{ fontSize: '0.75rem', fontWeight: 900, letterSpacing: '0.04em' }}>FX Master</span>
                </div>
                <div style={{ fontFamily: 'monospace', fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.12em' }}>
                  •••• 8820
                </div>
              </div>

              {/* Front Navy Card */}
              <div 
                style={{
                  position: 'absolute',
                  width: '240px',
                  height: '145px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  padding: '16px 18px',
                  color: '#FFFFFF',
                  transform: 'rotate(5deg) translate(8px, 12px)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  zIndex: 2
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ width: '30px', height: '22px', background: '#FBBF24', borderRadius: '4px', boxShadow: 'inset 0 0 4px rgba(0,0,0,0.3)' }} />
                  <span style={{ fontSize: '0.78rem', fontWeight: 900, color: '#FB923C' }}>FX MASTER</span>
                </div>
                <div style={{ fontFamily: 'monospace', fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.15em' }}>
                  •••• •••• •••• 2048
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.65rem', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase' }}>GLOBAL VAULT</span>
                  <span style={{ fontFamily: 'monospace', fontSize: '0.85rem', fontWeight: 900, color: '#FFFFFF' }}>VISA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Box 3: DEDICATED IBAN CAPABILITY */}
          <div 
            style={{
              background: '#131B2E',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '24px',
              padding: '28px 24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.4)'
            }}
          >
            <div>
              <div 
                style={{
                  fontSize: '0.72rem',
                  fontFamily: 'monospace',
                  fontWeight: 800,
                  color: '#4ADE80',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '10px'
                }}
              >
                03 / DEDICATED IBAN CAPABILITY
              </div>
              <h4 
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 900,
                  color: '#FFFFFF',
                  lineHeight: 1.3,
                  margin: '0 0 8px'
                }}
              >
                DEDICATED IBAN<br />CAPABILITY.
              </h4>
              <p style={{ fontSize: '0.86rem', color: '#94A3B8', lineHeight: 1.5, margin: '0 0 20px' }}>
                Support applicable international payment requirements.
              </p>
            </div>

            {/* Virtual IBAN Details Card */}
            <div 
              style={{
                background: '#0B0F19',
                borderRadius: '18px',
                padding: '16px',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Globe2 size={15} color="#FB923C" />
                  <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '0.04em' }}>
                    Multi-Currency IBAN
                  </span>
                </div>
                <span style={{ fontSize: '0.65rem', fontWeight: 900, color: '#38BDF8', background: 'rgba(56, 189, 248, 0.15)', padding: '2px 8px', borderRadius: '9999px' }}>
                  ACTIVE
                </span>
              </div>

              {/* IBAN String */}
              <div 
                style={{
                  background: '#131B2E',
                  borderRadius: '10px',
                  padding: '10px 12px',
                  marginBottom: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.62rem', color: '#94A3B8', fontWeight: 700, textTransform: 'uppercase' }}>
                    Dedicated IBAN (GBP / EUR / USD)
                  </div>
                  <div style={{ fontFamily: 'monospace', fontSize: '0.82rem', fontWeight: 900, color: '#FFFFFF' }}>
                    GB82 FXMS 0400 0412 8934 21
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopy}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: copied ? '#4ADE80' : '#94A3B8',
                    cursor: 'pointer',
                    padding: '4px'
                  }}
                  title="Copy IBAN"
                >
                  {copied ? <Check size={15} /> : <Copy size={15} />}
                </button>
              </div>

              {/* Rails Metadata */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '10px' }}>
                <div style={{ background: '#131B2E', padding: '6px 10px', borderRadius: '8px' }}>
                  <div style={{ fontSize: '0.58rem', color: '#64748B', fontWeight: 800 }}>BIC / SWIFT</div>
                  <div style={{ fontFamily: 'monospace', fontSize: '0.74rem', fontWeight: 800, color: '#E2E8F0' }}>FXMSGB2L</div>
                </div>
                <div style={{ background: '#131B2E', padding: '6px 10px', borderRadius: '8px' }}>
                  <div style={{ fontSize: '0.58rem', color: '#64748B', fontWeight: 800 }}>SORT CODE</div>
                  <div style={{ fontFamily: 'monospace', fontSize: '0.74rem', fontWeight: 800, color: '#E2E8F0' }}>04-00-04</div>
                </div>
              </div>

              {/* Settlement Confirmation Pill */}
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(251, 146, 60, 0.12)',
                  border: '1px solid rgba(251, 146, 60, 0.3)',
                  borderRadius: '10px',
                  padding: '8px 10px'
                }}
              >
                <CheckCircle2 size={15} color="#FB923C" />
                <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#FB923C', fontFamily: 'monospace' }}>
                  +£12,450.00 Inbound Wire Settled
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Explore FX & Multi-Currency Primary CTA Button */}
        <div style={{ textAlign: 'center' }}>
          <a 
            href="#hero" 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '16px 36px',
              fontSize: '1rem',
              fontWeight: 900,
              background: 'linear-gradient(135deg, #FB923C 0%, #F97316 100%)',
              color: '#0F172A',
              borderRadius: '9999px',
              textDecoration: 'none',
              boxShadow: '0 10px 25px -5px rgba(249, 115, 22, 0.4)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
          >
            <span>Explore FX & Multi-Currency</span>
            <ArrowUpRight size={18} strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
