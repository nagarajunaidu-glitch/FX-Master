'use client';

import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, ArrowUpRight, ArrowDownLeft, RefreshCw } from 'lucide-react';
import { fetchTreasuryMetrics } from '../services/api';

const DATASETS = {
  '24h': [120, 135, 128, 142, 139, 155, 148, 162, 175],
  '7d':  [95, 110, 105, 130, 125, 150, 145, 170, 185, 195],
  '1m':  [80, 95, 115, 110, 140, 135, 160, 180, 210, 230],
  '1y':  [50, 75, 90, 120, 145, 180, 205, 240, 280, 310],
  'all': [30, 55, 80, 110, 150, 190, 230, 270, 320, 360]
};

export default function LiveDashboard() {
  const canvasRef = useRef(null);
  const [timeframe, setTimeframe] = useState('7d');
  const [activeVault, setActiveVault] = useState('USD');
  const [metrics, setMetrics] = useState(null);

  useEffect(() => {
    fetchTreasuryMetrics(timeframe).then(data => setMetrics(data));
  }, [timeframe]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const data = DATASETS[timeframe] || DATASETS['7d'];

    const parent = canvas.parentElement;
    canvas.width = parent.clientWidth * (window.devicePixelRatio || 1);
    canvas.height = parent.clientHeight * (window.devicePixelRatio || 1);

    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);

    const padding = 20 * (window.devicePixelRatio || 1);
    const chartW = width - padding * 2;
    const chartH = height - padding * 2;

    const minVal = Math.min(...data) * 0.9;
    const maxVal = Math.max(...data) * 1.1;

    const points = data.map((val, idx) => {
      const x = padding + (idx / (data.length - 1)) * chartW;
      const y = height - padding - ((val - minVal) / (maxVal - minVal)) * chartH;
      return { x, y };
    });

    // Gradient Background
    const gradient = ctx.createLinearGradient(0, padding, 0, height - padding);
    gradient.addColorStop(0, 'rgba(16, 185, 129, 0.35)');
    gradient.addColorStop(0.7, 'rgba(6, 182, 212, 0.1)');
    gradient.addColorStop(1, 'rgba(16, 185, 129, 0)');

    ctx.beginPath();
    ctx.moveTo(points[0].x, height - padding);
    ctx.lineTo(points[0].x, points[0].y);

    for (let i = 0; i < points.length - 1; i++) {
      const cpX = (points[i].x + points[i + 1].x) / 2;
      ctx.quadraticCurveTo(points[i].x, points[i].y, cpX, (points[i].y + points[i + 1].y) / 2);
    }
    const last = points[points.length - 1];
    ctx.lineTo(last.x, last.y);
    ctx.lineTo(last.x, height - padding);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();

    // Spline Line
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 0; i < points.length - 1; i++) {
      const cpX = (points[i].x + points[i + 1].x) / 2;
      ctx.quadraticCurveTo(points[i].x, points[i].y, cpX, (points[i].y + points[i + 1].y) / 2);
    }
    ctx.lineTo(last.x, last.y);
    ctx.strokeStyle = '#10B981';
    ctx.lineWidth = 3 * (window.devicePixelRatio || 1);
    ctx.lineCap = 'round';
    ctx.stroke();

    // Glow Pin
    ctx.beginPath();
    ctx.arc(last.x, last.y, 6 * (window.devicePixelRatio || 1), 0, Math.PI * 2);
    ctx.fillStyle = '#10B981';
    ctx.fill();
    ctx.lineWidth = 2 * (window.devicePixelRatio || 1);
    ctx.strokeStyle = '#FFFFFF';
    ctx.stroke();
  }, [timeframe]);

  return (
    <section className="dashboard-section" id="dashboard">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-badge">Live Intelligence</div>
          <h2 className="section-title">Institutional Treasury at Your Fingertips</h2>
          <p className="section-subtitle">Real-time visibility across global liquidity pools, multi-currency accounts, and automated yield sweeps.</p>
        </div>

        <div className="dashboard-container glow-card">
          <div className="dash-topbar">
            <div className="dash-profile">
              <div className="dash-avatar">FX</div>
              <div>
                <div className="dash-user-name">Global Tech Corp</div>
                <div className="dash-acc-num">Enterprise IBAN •• 9482 (Luxembourg)</div>
              </div>
            </div>

            <div className="dash-time-filter">
              {['24h', '7d', '1m', '1y', 'all'].map((t) => (
                <button
                  key={t}
                  onClick={() => setTimeframe(t)}
                  className={`filter-btn ${timeframe === t ? 'active' : ''}`}
                >
                  {t.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="dash-grid">
            {/* Balance Column */}
            <div className="dash-balance-col">
              <div className="balance-card">
                <div className="balance-label">Total Liquid Capital</div>
                <div className="balance-value">
                  $1,489,240.50 <span className="currency-tag">USD</span>
                </div>
                <div className="balance-trend positive">
                  <TrendingUp size={14} />
                  <span>+18.4% vs last month</span>
                </div>
              </div>

              <div className="currency-pills-list">
                {[
                  { code: 'USD', name: 'USD Vault', amount: '$840,500.00', flag: '🇺🇸' },
                  { code: 'EUR', name: 'EUR Vault', amount: '€420,100.00', flag: '🇪🇺' },
                  { code: 'GBP', name: 'GBP Vault', amount: '£185,420.00', flag: '🇬🇧' },
                  { code: 'JPY', name: 'JPY Vault', amount: '¥6,200,000', flag: '🇯🇵' }
                ].map((v) => (
                  <div
                    key={v.code}
                    onClick={() => setActiveVault(v.code)}
                    className={`currency-pill ${activeVault === v.code ? 'active' : ''}`}
                  >
                    <div className="pill-left">
                      <span className="curr-flag">{v.flag}</span>
                      <span className="curr-code">{v.name}</span>
                    </div>
                    <div className="pill-amount">{v.amount}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Canvas Chart Column */}
            <div className="dash-chart-col">
              <div className="chart-header">
                <div>
                  <span className="chart-subtitle">Real-Time Treasury Flow</span>
                  <div className="chart-curr-rate">+ $34,820.00 today (Net Inflow)</div>
                </div>
                <div className="chart-legend">
                  <span className="legend-item">
                    <span className="legend-dot in"></span> Inflow
                  </span>
                  <span className="legend-item">
                    <span className="legend-dot out"></span> Automated Hedged
                  </span>
                </div>
              </div>

              <div className="chart-canvas-wrapper">
                <canvas ref={canvasRef} id="portfolioChart"></canvas>
              </div>
            </div>

            {/* Live Activity Feed */}
            <div className="dash-activity-col">
              <div className="activity-header">
                <h3>Live Feed</h3>
                <span className="live-pill">
                  <span className="pulse-dot"></span> Real-time
                </span>
              </div>
              <div className="activity-list">
                <div className="activity-item">
                  <div className="act-icon in">
                    <ArrowUpRight size={16} />
                  </div>
                  <div className="act-details">
                    <div className="act-title">Stripe Settlement</div>
                    <div className="act-sub">EUR ➔ USD Auto-Sweep</div>
                  </div>
                  <div className="act-amount pos">+$48,200.00</div>
                </div>

                <div className="activity-item">
                  <div className="act-icon out">
                    <ArrowDownLeft size={16} />
                  </div>
                  <div className="act-details">
                    <div className="act-title">AWS Infrastructure</div>
                    <div className="act-sub">Virtual Card •• 4192</div>
                  </div>
                  <div className="act-amount neg">-$3,450.00</div>
                </div>

                <div className="activity-item">
                  <div className="act-icon swap">
                    <RefreshCw size={14} />
                  </div>
                  <div className="act-details">
                    <div className="act-title">Algorithmic FX Hedge</div>
                    <div className="act-sub">USD/JPY Volatility Shield</div>
                  </div>
                  <div className="act-amount text-emerald font-mono">Hedged</div>
                </div>

                <div className="activity-item">
                  <div className="act-icon in">
                    <ArrowUpRight size={16} />
                  </div>
                  <div className="act-details">
                    <div className="act-title">Tokyo Client Payout</div>
                    <div className="act-sub">SWIFT GPI Instant Rail</div>
                  </div>
                  <div className="act-amount pos">+$112,000.00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
