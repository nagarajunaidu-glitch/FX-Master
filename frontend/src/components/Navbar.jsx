'use client';

import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Navbar({ onOpenAuth, journeyMode = 'all', onSelectJourney }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (mode, e) => {
    if (onSelectJourney && mode) {
      onSelectJourney(mode);
    }
  };

  return (
    <header className="site-header" id="siteHeader">
      <div className="container header-container">
        {/* Brand Logo */}
        <a 
          href="#hero" 
          className="brand-logo-link" 
          aria-label="FX Master Home"
          onClick={(e) => handleNavClick('all', e)}
        >
          <BrandLogo height={52} textColor="#0F172A" />
        </a>

        {/* Desktop Navigation */}
        <nav className="main-nav" aria-label="Primary Navigation">
          <ul className="nav-list">
            <li>
              <a 
                href="#hero" 
                className={`nav-link ${journeyMode === 'all' ? 'active' : ''}`}
                onClick={(e) => handleNavClick('all', e)}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#platform" 
                className="nav-link"
                onClick={() => { if (journeyMode !== 'all') handleNavClick('all'); }}
              >
                About Us
              </a>
            </li>
            <li>
              <a 
                href="#hero" 
                className={`nav-link ${journeyMode === 'businesses' ? 'active' : ''}`}
                onClick={(e) => handleNavClick('businesses', e)}
              >
                Businesses
              </a>
            </li>
            <li>
              <a 
                href="#hero" 
                className={`nav-link ${journeyMode === 'individuals' ? 'active' : ''}`}
                onClick={(e) => handleNavClick('individuals', e)}
              >
                Individuals
              </a>
            </li>
            <li>
              <a 
                href="#trust-experience" 
                className="nav-link"
                onClick={() => { if (journeyMode !== 'all') handleNavClick('all'); }}
              >
                Compliance
              </a>
            </li>
            <li>
              <a 
                href="#footer" 
                className="nav-link"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        {/* Action Buttons: Log In & Create Account */}
        <div className="header-actions">
          <button 
            type="button"
            onClick={() => onOpenAuth('login')}
            className="btn-login-link"
          >
            Log In
          </button>

          <button 
            type="button"
            onClick={() => onOpenAuth('signup')}
            className="btn-create-account"
          >
            <span>Create Account</span>
            <ArrowUpRight size={16} />
          </button>

          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={24} color="#0F172A" /> : <Menu size={24} color="#0F172A" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="mobile-nav-dropdown">
          <ul className="mobile-nav-links">
            <li>
              <a 
                href="#hero" 
                onClick={(e) => { setMobileOpen(false); handleNavClick('all', e); }}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#platform" 
                onClick={() => { setMobileOpen(false); if (journeyMode !== 'all') handleNavClick('all'); }}
              >
                About Us
              </a>
            </li>
            <li>
              <a 
                href="#hero" 
                onClick={(e) => { setMobileOpen(false); handleNavClick('businesses', e); }}
              >
                Businesses
              </a>
            </li>
            <li>
              <a 
                href="#hero" 
                onClick={(e) => { setMobileOpen(false); handleNavClick('individuals', e); }}
              >
                Individuals
              </a>
            </li>
            <li>
              <a 
                href="#trust-experience" 
                onClick={() => { setMobileOpen(false); if (journeyMode !== 'all') handleNavClick('all'); }}
              >
                Compliance
              </a>
            </li>
            <li>
              <a 
                href="#footer" 
                onClick={() => setMobileOpen(false)}
              >
                Contact Us
              </a>
            </li>
          </ul>
          <div className="mobile-actions-stack">
            <button onClick={() => { setMobileOpen(false); onOpenAuth('login'); }} className="btn-login-link w-full">Log In</button>
            <button onClick={() => { setMobileOpen(false); onOpenAuth('signup'); }} className="btn-create-account w-full">Create Account ↗</button>
          </div>
        </div>
      )}
    </header>
  );
}
