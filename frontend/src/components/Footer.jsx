'use client';

import React from 'react';
import BrandLogo from './BrandLogo';
import { Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer-exact" id="footer">
      <div className="container">
        {/* Main Footer Grid */}
        <div className="footer-exact-grid" style={{ gridTemplateColumns: '1.4fr 1fr 1fr 1fr' }}>
          {/* Left Column: White Badge Logo, Tagline, and Social Icons */}
          <div className="footer-brand-col">
            {/* White Pill Badge for Logo */}
            <div className="footer-white-logo-badge">
              <BrandLogo height={42} textColor="#0F172A" />
            </div>

            <p className="footer-tagline-exact" style={{ marginTop: '14px', fontSize: '0.98rem', color: '#E2E8F0', fontWeight: 600 }}>
              Global Payments. One Digital Infrastructure.
            </p>

            <p style={{ fontSize: '0.84rem', color: '#94A3B8', lineHeight: 1.5, marginTop: '10px', marginBottom: '24px', maxWidth: '320px' }}>
              Send and receive international payments, exchange currencies and manage multiple currencies with regulated confidence.
            </p>

            {/* Social Icons (Instagram, LinkedIn, X) */}
            <div className="footer-socials-row">
              <a href="#instagram" className="footer-social-btn" aria-label="Instagram">
                <Instagram size={17} strokeWidth={2} />
              </a>

              <a href="#linkedin" className="footer-social-btn" aria-label="LinkedIn">
                <Linkedin size={17} strokeWidth={2} />
              </a>

              <a href="#twitter" className="footer-social-btn" aria-label="X (Twitter)">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 1: Businesses */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title" style={{ color: '#FB923C' }}>Businesses</h4>
            <ul className="footer-nav-list">
              <li><a href="#payments">Business Payments</a></li>
              <li><a href="#payments">Bulk Payments</a></li>
              <li><a href="#payments">Payroll</a></li>
              <li><a href="#platform">API Integration</a></li>
              <li><a href="#payments">Multi-Currency Solutions</a></li>
              <li><a href="#faqs">FAQs</a></li>
            </ul>
          </div>

          {/* Col 2: Individuals */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title" style={{ color: '#38BDF8' }}>Individuals</h4>
            <ul className="footer-nav-list">
              <li><a href="#payments">International Payments</a></li>
              <li><a href="#payments">FX Rates</a></li>
              <li><a href="#platform">Multi-Currency Wallet</a></li>
              <li><a href="#trust-experience">Payment Tracking</a></li>
              <li><a href="#faqs">FAQs</a></li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title" style={{ color: '#FFFFFF' }}>Company</h4>
            <ul className="footer-nav-list">
              <li><a href="#hero">About FX Master</a></li>
              <li><a href="#trust-experience">Compliance</a></li>
              <li><a href="#trust-experience">Contact</a></li>
              <li><a href="#faqs">FAQs</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar Divider & Disclaimers + App Store Buttons */}
        <div className="footer-bottom-bar-exact">
          <div className="footer-disclaimer-wrap">
            <div className="footer-copyright-text">© 2026 FX Master. All rights reserved.</div>
            <div className="footer-disclaimer-text">
              FX Master operates as a regulated digital payments platform. Regulated payment infrastructure and multi-currency services.
            </div>
          </div>

          {/* App Store Buttons on Bottom Right using Official Brand Logos */}
          <div className="footer-stores-row">
            {/* Official Apple Company Logo */}
            <a href="#appstore" className="footer-store-btn" aria-label="Download on App Store">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="#FFFFFF">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.86c.62-.75 1.04-1.8 0.93-2.86-.9.04-1.99.6-2.63 1.35-.57.65-1.07 1.72-.94 2.74 1 .08 2.02-.48 2.64-1.23z"/>
              </svg>
              <div className="footer-store-text">
                <span className="store-sub">DOWNLOAD ON THE</span>
                <span className="store-name">App Store</span>
              </div>
            </a>

            {/* Official Google Play Logo */}
            <a href="#googleplay" className="footer-store-btn" aria-label="Get it on Google Play">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#FFFFFF">
                <path d="M3.609 1.814L13.793 12 3.61 22.186a2.404 2.404 0 0 1-.61-.917c-.134-.37-.199-.785-.199-1.269V4c0-.484.065-.899.199-1.269.134-.37.338-.676.61-.917zm1.445-.445l11.455 6.613-3.141 3.141L5.054 1.369zm0 21.262l8.315-8.315 3.141 3.141-11.456 6.613a1.76 1.76 0 0 1-.84-.139 1.815 1.815 0 0 1-.66-.445 1.815 1.815 0 0 1-.445-.66 1.76 1.76 0 0 1-.139-.84 1.76 1.76 0 0 1 .139-.84 1.815 1.815 0 0 1 .445-.66 1.815 1.815 0 0 1 .66-.445c.27-.1.55-.14.84-.14zm12.875-8.083l3.526-2.036c.64-.37 1.05-.87 1.23-1.5.18-.63.07-1.25-.33-1.85a2.22 2.22 0 0 0-.9-.65l-3.526-2.036-3.414 3.414 3.414 4.658z"/>
              </svg>
              <div className="footer-store-text">
                <span className="store-sub">GET IT ON</span>
                <span className="store-name">Google Play</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
