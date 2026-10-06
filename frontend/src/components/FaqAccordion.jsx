'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: 'How fast do international transfers settle?',
    a: 'Over 85% of transfers between supported domestic rails (such as SEPA Instant, UK Faster Payments, and US FedNow/RTP) settle in under 20 milliseconds. Global SWIFT GPI transfers typically take between 2 to 6 hours.'
  },
  {
    q: 'Are my funds protected and insured?',
    a: 'Yes. 100% of customer funds are segregated in dedicated safeguarding accounts held with tier-1 partner banks in the US, EU, and UK. Your funds are never re-hypothecated, loaned, or exposed to balance sheet risk.'
  },
  {
    q: 'What currencies can I hold and exchange?',
    a: 'You can hold, convert, and transact in over 40 fiat currencies including USD, EUR, GBP, JPY, CAD, AUD, CHF, SGD, HKD, and NZD, along with institutional stablecoins (USDC/EURC) via dedicated enterprise rails.'
  },
  {
    q: 'How do FX-Master exchange rates compare to banks?',
    a: 'Traditional high-street banks add a hidden markup of 2.5% to 5.0% on top of wire fees. FX-Master gives you the live, interbank mid-market rate with zero spread on promotional tiers and transparent sub-0.15% pricing on institutional volumes.'
  },
  {
    q: 'Can I integrate FX-Master into my own software or platform?',
    a: 'Yes. Our RESTful APIs and real-time WebSockets allow you to generate virtual accounts, initiate bulk payouts, automate FX conversions, and issue branded payment cards with simple SDKs.'
  }
];

export default function FaqAccordion() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container max-w-3xl">
        <div className="section-header text-center">
          <div className="section-badge">Have Questions?</div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Everything you need to know about accounts, regulations, and global payouts.</p>
        </div>

        <div className="accordion-container">
          {FAQS.map((faq, idx) => (
            <div key={idx} className={`faq-item ${openIdx === idx ? 'active' : ''}`}>
              <button
                className="faq-trigger"
                onClick={() => toggle(idx)}
                aria-expanded={openIdx === idx}
              >
                <span>{faq.q}</span>
                <ChevronDown className="faq-chevron" size={20} />
              </button>
              <div className="faq-content">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
