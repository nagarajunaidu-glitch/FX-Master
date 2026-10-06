'use client';

import React, { useState } from 'react';
import { X, ArrowRight, Globe } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function AuthModal({ isOpen, mode, onClose, onSwitchMode }) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  if (!isOpen) return null;

  const isLogin = mode === 'login';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMsg(isLogin ? `Welcome back! Signed in as ${email}` : `Account created for ${email}!`);
      setTimeout(() => {
        setSuccessMsg('');
        setEmail('');
        onClose();
      }, 1400);
    }, 600);
  };

  return (
    <div className="auth-modal-backdrop" onClick={onClose}>
      <div className="auth-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Top Header: Logo + Close Button */}
        <div className="auth-modal-top">
          <div className="auth-brand-logo">
            <BrandLogo height={38} textColor="#0F172A" />
          </div>

          <button className="auth-close-btn" onClick={onClose} aria-label="Close dialog">
            <X size={18} color="#0F172A" />
          </button>
        </div>

        {/* Orange Globe Icon Badge */}
        <div className="auth-globe-badge">
          <Globe size={24} color="#0F172A" strokeWidth={1.8} />
        </div>

        {/* Headings */}
        <h2 className="auth-heading">
          {isLogin ? 'Welcome back.' : 'Move beyond borders.'}
        </h2>
        <p className="auth-subtext">
          {isLogin ? 'Enter your email to continue.' : 'Get a first look at the future of your money.'}
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="auth-field">
            <label className="auth-label" htmlFor="authEmailInput">Email address</label>
            <input
              id="authEmailInput"
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="auth-input"
              autoFocus
            />
          </div>

          <button type="submit" disabled={isSubmitting} className="auth-submit-btn">
            <span>
              {successMsg ? successMsg : isSubmitting ? 'Processing...' : isLogin ? 'Continue' : 'Get started'}
            </span>
            {!isSubmitting && !successMsg && <ArrowRight size={18} />}
          </button>
        </form>

        {/* Toggle between Login and Signup */}
        <div className="auth-switch-link">
          {isLogin ? (
            <span>Don't have an account? <button type="button" onClick={() => onSwitchMode('signup')}>Create Account</button></span>
          ) : (
            <span>Already have an account? <button type="button" onClick={() => onSwitchMode('login')}>Log In</button></span>
          )}
        </div>

        {/* Disclaimer Footer */}
        <div className="auth-disclaimer">
          Concept website — no account will be created.
        </div>
      </div>
    </div>
  );
}
