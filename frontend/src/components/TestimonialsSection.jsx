'use client';

import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ChevronDown, HelpCircle, ArrowUpRight } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: "“I can invoice clients in different countries and actually know what I'll receive. FX Master makes working globally feel local.”",
    author: "Amara Okafor",
    role: "Creative Director, Lagos",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&auto=format&fit=crop&q=80"
  },
  {
    quote: "“I used to lose time and money every time I got paid overseas. Now everything happens in one place, and it just works.”",
    author: "Sofia Bennett",
    role: "Independent Consultant, London",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=160&auto=format&fit=crop&q=80"
  },
  {
    quote: "“From sending money to managing currencies, it's the kind of simple experience I always wished banking could be.”",
    author: "Daniel Reyes",
    role: "Founder, New York",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&auto=format&fit=crop&q=80"
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

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="trusted-section" id="testimonials">
      <div className="container">
        {/* Split Header */}
        <div className="section-split-header-exact">
          <div>
            <div className="testimonials-eyebrow-exact">
              <span className="eyebrow-orange-dot">●</span> TRUSTED BY 100,000+ USERS
            </div>
            <h2 className="dark-sec-title">
              TRUSTED BY <span className="highlight-orange-text">100,000+</span><br />
              FREELANCERS AND BUSINESSES.
            </h2>
          </div>
          <div className="testimonials-header-right">
            <div className="testimonials-right-lbl font-mono">HERE'S WHAT THEY SAY.</div>
            <p className="dark-sec-desc" style={{ margin: 0 }}>
              Real stories from people moving money without limits.
            </p>
          </div>
        </div>

        {/* 3 Cards Row */}
        <div className="trusted-grid-3col">
          {/* Card 1: Interactive Peach/Orange Quote Card */}
          <div className="testimonial-orange-card-exact" key={currentIndex}>
            <div className="quote-top-symbol">“</div>
            <p className="quote-body-exact">{current.quote}</p>

            <div className="quote-footer-row">
              <div className="quote-author-profile">
                <img
                  src={current.avatar}
                  alt={current.author}
                  className="quote-author-avatar-img"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <div>
                  <div className="quote-author-name-exact">{current.author}</div>
                  <div className="quote-author-role-exact">{current.role}</div>
                </div>
              </div>

              <div className="quote-nav-arrows">
                <button type="button" className="quote-arrow-btn" onClick={handlePrev} aria-label="Previous testimonial">
                  <ArrowLeft size={14} color="#0F172A" strokeWidth={2.5} />
                </button>
                <button type="button" className="quote-arrow-btn" onClick={handleNext} aria-label="Next testimonial">
                  <ArrowRight size={14} color="#0F172A" strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Photo 1 */}
          <div className="testimonial-photo-card-exact">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80"
              alt="Colleagues collaborating on international payments"
              className="testimonial-photo-cover"
            />
            <div className="testimonial-photo-gradient-overlay"></div>
            <div className="photo-card-tag-wrap">
              <div className="photo-accent-bar"></div>
              <div className="photo-tag-text font-mono">MORE CONNECTION. LESS COMPLEXITY.</div>
            </div>
          </div>

          {/* Card 3: Photo 2 */}
          <div className="testimonial-photo-card-exact">
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=80"
              alt="Remote professional smiling at laptop"
              className="testimonial-photo-cover"
            />
            <div className="testimonial-photo-gradient-overlay"></div>
          </div>
        </div>

        {/* Interactive Dots Pagination */}
        <div className="testimonials-dots-pagination">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`testi-dot-btn ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

        {/* Main Homepage Official FAQs Section */}
        <div className="homepage-faq-block" style={{ marginTop: '70px', paddingTop: '50px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div className="testimonials-eyebrow-exact" style={{ justifyContent: 'center' }}>
              <span className="eyebrow-orange-dot">●</span> FREQUENTLY ASKED QUESTIONS
            </div>
            <h3 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 900, color: '#FFFFFF', textTransform: 'uppercase' }}>
              EVERYTHING YOU NEED TO KNOW
            </h3>
          </div>

          <div style={{ maxWidth: '840px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {FAQS.map((faq, idx) => {
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
  );
}
