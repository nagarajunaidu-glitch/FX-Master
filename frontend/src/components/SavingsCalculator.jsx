'use client';

import React, { useState } from 'react';

const PAIRS = [
  { curr: 'EUR', label: '🇪🇺 EUR', rate: 0.9214, symbol: '€' },
  { curr: 'GBP', label: '🇬🇧 GBP', rate: 0.7890, symbol: '£' },
  { curr: 'JPY', label: '🇯🇵 JPY', rate: 154.60, symbol: '¥' },
  { curr: 'SGD', label: '🇸🇬 SGD', rate: 1.3480, symbol: 'S$' },
  { curr: 'CAD', label: '🇨🇦 CAD', rate: 1.3650, symbol: 'C$' },
  { curr: 'AUD', label: '🇦🇺 AUD', rate: 1.5280, symbol: 'A$' }
];

export default function SavingsCalculator() {
  const [amountUSD, setAmountUSD] = useState(25000);
  const [selectedPair, setSelectedPair] = useState(PAIRS[0]);

  // Calculations
  const fxReceived = amountUSD * selectedPair.rate;
  const bankLossUSD = (amountUSD * 0.038) + 45.0;
  const bankEffectiveInput = Math.max(0, amountUSD - bankLossUSD);
  const bankReceived = bankEffectiveInput * selectedPair.rate;

  return (
    <section className="calculator-section" id="calculator">
      <div className="container">
        <div className="calc-wrapper glow-card">
          <div className="calc-header text-center">
            <div className="section-badge">Transparency First</div>
            <h2 className="section-title">See How Much You Save on Every Transfer</h2>
            <p className="section-subtitle">Traditional banks mark up exchange rates by 3% - 6% + wire fees. FX-Master uses transparent interbank rates.</p>
          </div>

          <div className="calc-controls-grid">
            <div className="calc-slider-box">
              <div className="slider-label-row">
                <label>Transfer Amount</label>
                <div className="slider-val-display">${amountUSD.toLocaleString('en-US')} USD</div>
              </div>
              <input
                type="range"
                min="500"
                max="100000"
                step="500"
                value={amountUSD}
                onChange={(e) => setAmountUSD(parseFloat(e.target.value))}
                className="custom-range-slider"
              />
              <div className="slider-minmax">
                <span>$500</span>
                <span>$50,000</span>
                <span>$100,000+</span>
              </div>
            </div>

            <div className="calc-currency-pairs">
              <label>Select Target Currency</label>
              <div className="pair-buttons">
                {PAIRS.map((p) => (
                  <button
                    key={p.curr}
                    onClick={() => setSelectedPair(p)}
                    className={`pair-btn ${selectedPair.curr === p.curr ? 'active' : ''}`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Comparison Cards */}
          <div className="comparison-table-wrapper">
            <div className="compare-card fx-highlight">
              <div className="compare-badge">WINNER</div>
              <div className="provider-name">
                <span className="prov-icon">✨</span> FX-Master
              </div>
              <div className="received-sum">
                {selectedPair.symbol}{fxReceived.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: selectedPair.curr === 'JPY' ? 0 : 2 })} {selectedPair.curr}
              </div>
              <div className="fee-line">Transfer Fee: <strong className="text-emerald">$0.00</strong></div>
              <div className="exchange-rate-line">Real Mid-Market Rate (0.00% Markup)</div>
              <div className="settlement-speed">⚡ Instant Delivery (&lt; 20ms)</div>
            </div>

            <div className="compare-card traditional-bank">
              <div className="provider-name">Traditional High-Street Bank</div>
              <div className="received-sum text-muted">
                {selectedPair.symbol}{bankReceived.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: selectedPair.curr === 'JPY' ? 0 : 2 })} {selectedPair.curr}
              </div>
              <div className="fee-line">Hidden Spread (3.8%): <strong>-${(amountUSD * 0.038).toFixed(2)}</strong></div>
              <div className="exchange-rate-line">Outgoing Wire Fee: <strong>$45.00</strong></div>
              <div className="settlement-speed">⏳ 3 - 5 Business Days</div>
            </div>
          </div>

          <div className="calc-verdict-banner">
            <div className="verdict-icon">🎉</div>
            <div className="verdict-text">
              Total money saved with FX-Master on this transfer: <strong className="text-emerald">${bankLossUSD.toFixed(2)} USD</strong>
            </div>
            <a href="#pricing" className="btn btn-primary glow-btn">Claim Your Free Account</a>
          </div>
        </div>
      </div>
    </section>
  );
}
