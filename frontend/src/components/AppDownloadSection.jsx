'use client';

import React from 'react';
import { ArrowUpRight, ArrowDown, ArrowRight, Check, ChevronDown } from 'lucide-react';

export default function AppDownloadSection() {
  return (
    <section className="community-section" id="mobile-app">
      <div className="container">
        <div className="community-grid-exact">
          {/* Left Text & Download Area */}
          <div className="community-content-left">
            <div className="eyebrow-better-way">
              <span className="eyebrow-orange-dot">●</span> TAKE YOUR WORLD WITH YOU
            </div>

            <h2 className="sec-huge-title-exact">
              JOIN THE THRIVING<br />
              COMMUNITY OF <span style={{ color: '#2563EB' }}>FX</span><br />
              <span style={{ color: '#2563EB' }}>MASTER</span><br />
              ENTHUSIASTS.
            </h2>

            <p className="community-subtext-exact">
              Join a growing community of people moving money on their own terms. Wherever you're headed, FX Master goes with you.
            </p>

            {/* QR & App Stores Download Card */}
            <div className="get-app-container">
              <div className="qr-matrix-card">
                <svg width="58" height="58" viewBox="0 0 64 64" fill="none" className="qr-svg-graphic">
                  <rect x="2" y="2" width="18" height="18" rx="4" stroke="#0F172A" strokeWidth="3" fill="none"/>
                  <rect x="6" y="6" width="10" height="10" rx="2" fill="#0F172A"/>
                  <rect x="44" y="2" width="18" height="18" rx="4" stroke="#0F172A" strokeWidth="3" fill="none"/>
                  <rect x="48" y="6" width="10" height="10" rx="2" fill="#0F172A"/>
                  <rect x="2" y="44" width="18" height="18" rx="4" stroke="#0F172A" strokeWidth="3" fill="none"/>
                  <rect x="6" y="48" width="10" height="10" rx="2" fill="#0F172A"/>

                  <rect x="26" y="4" width="4" height="4" fill="#0F172A"/>
                  <rect x="34" y="4" width="4" height="4" fill="#0F172A"/>
                  <rect x="26" y="12" width="4" height="4" fill="#0F172A"/>
                  <rect x="34" y="12" width="4" height="4" fill="#0F172A"/>
                  <rect x="4" y="26" width="4" height="4" fill="#0F172A"/>
                  <rect x="12" y="26" width="4" height="4" fill="#0F172A"/>
                  <rect x="44" y="26" width="4" height="4" fill="#0F172A"/>
                  <rect x="52" y="26" width="4" height="4" fill="#0F172A"/>

                  <rect x="20" y="20" width="24" height="24" rx="6" fill="#FB923C"/>
                  <text x="32" y="36" fill="#FFFFFF" fontSize="11" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">FX</text>
                </svg>
              </div>

              <div className="get-app-details">
                <div className="get-app-title font-mono">GET THE APP</div>
                <p className="get-app-desc">
                  Scan to take the next step, or find us on your favorite app store.
                </p>

                <div className="store-buttons-row">
                  {/* Official Apple Company Logo */}
                  <a href="#download" className="store-pill-btn" aria-label="Download on the App Store">
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="#FFFFFF">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.86c.62-.75 1.04-1.8 0.93-2.86-.9.04-1.99.6-2.63 1.35-.57.65-1.07 1.72-.94 2.74 1 .08 2.02-.48 2.64-1.23z"/>
                    </svg>
                    <div className="store-btn-text">
                      <span className="store-btn-small">DOWNLOAD ON THE</span>
                      <span className="store-btn-bold">App Store</span>
                    </div>
                  </a>

                  {/* Official Google Play Store Logo */}
                  <a href="#download" className="store-pill-btn" aria-label="Get it on Google Play">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#FFFFFF">
                      <path d="M3.609 1.814L13.793 12 3.61 22.186a2.404 2.404 0 0 1-.61-.917c-.134-.37-.199-.785-.199-1.269V4c0-.484.065-.899.199-1.269.134-.37.338-.676.61-.917zm1.445-.445l11.455 6.613-3.141 3.141L5.054 1.369zm0 21.262l8.315-8.315 3.141 3.141-11.456 6.613a1.76 1.76 0 0 1-.84-.139 1.815 1.815 0 0 1-.66-.445 1.815 1.815 0 0 1-.445-.66 1.76 1.76 0 0 1-.139-.84 1.76 1.76 0 0 1 .139-.84 1.815 1.815 0 0 1 .445-.66 1.815 1.815 0 0 1 .66-.445c.27-.1.55-.14.84-.14zm12.875-8.083l3.526-2.036c.64-.37 1.05-.87 1.23-1.5.18-.63.07-1.25-.33-1.85a2.22 2.22 0 0 0-.9-.65l-3.526-2.036-3.414 3.414 3.414 4.658z"/>
                    </svg>
                    <div className="store-btn-text">
                      <span className="store-btn-small">GET IT ON</span>
                      <span className="store-btn-bold">Google Play</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Phone Showcase in Light Blue Stage */}
          <div className="phone-ecosystem-stage">
            <div className="stage-concentric-circles">
              <div className="circle-ring r1"></div>
              <div className="circle-ring r2"></div>
              <div className="circle-ring r3"></div>
            </div>

            <div className="floating-send-badge">
              <ArrowUpRight size={14} color="#2563EB" strokeWidth={2.5} />
              <span>SEND GLOBALLY</span>
            </div>

            {/* Smartphone Frame */}
            <div className="ecosystem-phone-device">
              <div className="phone-status-bar">
                <span>9:41</span>
                <div className="phone-dynamic-island"></div>
                <span>100%</span>
              </div>

              <div className="phone-nav-header">
                <button type="button" className="phone-back-arrow" aria-label="Back">‹</button>
                <div className="phone-nav-title">Send money</div>
                <div className="phone-nav-dots">•••</div>
              </div>

              {/* "You send" Input Box */}
              <div className="phone-transfer-field">
                <div className="transfer-field-lbl">You send</div>
                <div className="transfer-field-input-row">
                  <div className="transfer-amount-bold">1,000.00</div>
                  <div className="currency-picker-pill">
                    <span>USD</span>
                    <ChevronDown size={12} color="#0F172A" />
                  </div>
                </div>
              </div>

              <div className="transfer-swap-btn-row">
                <div className="transfer-swap-circle">
                  <ArrowDown size={14} color="#FFFFFF" strokeWidth={2.5} />
                </div>
              </div>

              {/* "They receive" Input Box */}
              <div className="phone-transfer-field">
                <div className="transfer-field-lbl">They receive</div>
                <div className="transfer-field-input-row">
                  <div className="transfer-amount-bold">918.42</div>
                  <div className="currency-picker-pill">
                    <span>EUR</span>
                    <ChevronDown size={12} color="#0F172A" />
                  </div>
                </div>
              </div>

              <div className="transfer-rate-details">
                <div className="rate-detail-row">
                  <span className="rate-lbl">Exchange rate</span>
                  <span className="rate-val font-mono">1 USD = 0.9184 EUR</span>
                </div>
                <div className="rate-detail-row">
                  <span className="rate-lbl">Transfer fee</span>
                  <span className="rate-val font-mono">$2.50</span>
                </div>
                <div className="rate-detail-row">
                  <span className="rate-lbl">Arrival</span>
                  <span className="rate-val">In minutes</span>
                </div>
              </div>

              <div className="transfer-recipient-row">
                <div className="recipient-avatar-circle">JD</div>
                <div className="recipient-info-wrap">
                  <div className="recipient-sub">Sending to</div>
                  <div className="recipient-name">Jamie Davis</div>
                </div>
                <Check size={16} color="#2563EB" strokeWidth={2.5} />
              </div>

              <button type="button" className="phone-continue-btn">
                <span>Continue</span>
                <ArrowRight size={15} color="#FFFFFF" strokeWidth={2.5} />
              </button>
            </div>

            <div className="floating-success-pill">
              <div className="success-orange-circle">
                <Check size={14} color="#FFFFFF" strokeWidth={3} />
              </div>
              <div>
                <div className="success-pill-title">Money is on its way</div>
                <div className="success-pill-sub">Fast. Simple. Secure.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
