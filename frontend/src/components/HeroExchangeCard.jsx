'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowDownUp, Zap } from 'lucide-react';
import { FALLBACK_RATES } from '../services/api';

const CURRENCIES = [
  { code: 'USD', label: '🇺🇸 USD', name: 'US Dollar' },
  { code: 'EUR', label: '🇪🇺 EUR', name: 'Euro' },
  { code: 'GBP', label: '🇬🇧 GBP', name: 'British Pound' },
  { code: 'JPY', label: '🇯🇵 JPY', name: 'Japanese Yen' },
  { code: 'SGD', label: '🇸🇬 SGD', name: 'Singapore Dollar' },
  { code: 'CAD', label: '🇨🇦 CAD', name: 'Canadian Dollar' },
  { code: 'AUD', label: '🇦🇺 AUD', name: 'Australian Dollar' }
];

export default function HeroExchangeCard() {
  const [sendAmount, setSendAmount] = useState(5000);
  const [sendCurrency, setSendCurrency] = useState('USD');
  const [receiveCurrency, setReceiveCurrency] = useState('EUR');
  const [rate, setRate] = useState(0.9214);
  const [receiveAmount, setReceiveAmount] = useState(4607.00);
  const [savingsUSD, setSavingsUSD] = useState(175.00);
  const [isTransferring, setIsTransferring] = useState(false);

  useEffect(() => {
    const rates = FALLBACK_RATES[sendCurrency] || FALLBACK_RATES.USD;
    const currentRate = rates[receiveCurrency] || 1.0;
    setRate(currentRate);

    const calculated = sendAmount * currentRate;
    setReceiveAmount(calculated);

    // Estimate savings vs bank 3.2% spread + $15 wire fee
    const bankLoss = (sendAmount * 0.032) + 15;
    setSavingsUSD(bankLoss);
  }, [sendAmount, sendCurrency, receiveCurrency]);

  const handleSwap = () => {
    const temp = sendCurrency;
    setSendCurrency(receiveCurrency);
    setReceiveCurrency(temp);
  };

  const handleExecuteTransfer = () => {
    setIsTransferring(true);
    setTimeout(() => {
      setIsTransferring(false);
      alert(`🎉 Instant Transfer of ${sendAmount} ${sendCurrency} to ${receiveAmount.toFixed(2)} ${receiveCurrency} settled on the live rail in 18ms!`);
    }, 600);
  };

  return (
    <div className="hero-glass-card glow-card" id="heroExchangeCard">
      <div className="card-header-row">
        <div className="card-title-wrap">
          <span className="card-chip">Instant Swap</span>
          <span className="live-rate-pill">
            <span className="pulse-dot"></span> Mid-Market Rate
          </span>
        </div>
        <div className="rate-timestamp">Updated: Just now</div>
      </div>

      {/* Conversion Input 1 (Send) */}
      <div className="exchange-input-box">
        <div className="input-label-row">
          <label htmlFor="sendAmountInput">You Send</label>
          <span className="balance-hint">Balance: $24,580.00 USD</span>
        </div>
        <div className="input-action-row">
          <input
            id="sendAmountInput"
            type="number"
            value={sendAmount}
            onChange={(e) => setSendAmount(Math.max(1, parseFloat(e.target.value) || 0))}
            min="1"
            className="fx-amount-input"
          />
          <div className="currency-select-wrap">
            <select
              value={sendCurrency}
              onChange={(e) => setSendCurrency(e.target.value)}
              className="currency-select"
              aria-label="Send currency"
            >
              {CURRENCIES.map(c => (
                <option key={c.code} value={c.code}>{c.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Swap Rate Bridge */}
      <div className="exchange-rate-bridge">
        <button 
          onClick={handleSwap} 
          className="swap-currency-btn" 
          title="Swap Currencies"
          aria-label="Swap send and receive currencies"
        >
          <ArrowDownUp size={16} />
        </button>
        <div className="live-conversion-rate">
          1 {sendCurrency} = {rate.toFixed(4)} {receiveCurrency}
        </div>
      </div>

      {/* Conversion Input 2 (Receive) */}
      <div className="exchange-input-box">
        <div className="input-label-row">
          <label>Recipient Gets</label>
          <span className="fee-badge">Zero Markup (0.00%)</span>
        </div>
        <div className="input-action-row">
          <input
            type="text"
            readOnly
            value={receiveAmount.toLocaleString('en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: receiveCurrency === 'JPY' ? 0 : 2
            })}
            className="fx-amount-input highlight-val"
          />
          <div className="currency-select-wrap">
            <select
              value={receiveCurrency}
              onChange={(e) => setReceiveCurrency(e.target.value)}
              className="currency-select"
              aria-label="Receive currency"
            >
              {CURRENCIES.map(c => (
                <option key={c.code} value={c.code}>{c.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Live Settlement Summary */}
      <div className="exchange-breakdown">
        <div className="breakdown-row">
          <span>⚡ Transfer Speed</span>
          <span className="text-emerald font-mono">Instant (&lt; 20ms)</span>
        </div>
        <div className="breakdown-row">
          <span>💳 FX-Master Fee</span>
          <span className="text-emerald font-mono">$0.00 (Promo)</span>
        </div>
        <div className="breakdown-row">
          <span>🏦 You Save vs Banks</span>
          <span className="text-emerald font-mono font-bold">+${savingsUSD.toFixed(2)} USD</span>
        </div>
      </div>

      <button 
        onClick={handleExecuteTransfer}
        disabled={isTransferring}
        className="btn btn-primary w-full btn-lg glow-btn"
      >
        <span>{isTransferring ? 'Routing Liquidity...' : 'Execute Transfer Now'}</span>
        <ArrowRight size={18} />
      </button>
    </div>
  );
}
