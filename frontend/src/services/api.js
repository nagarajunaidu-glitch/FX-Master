const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// Fallback rates if backend is not yet started
export const FALLBACK_RATES = {
  USD: { EUR: 0.9214, GBP: 0.7890, JPY: 154.60, SGD: 1.3480, CAD: 1.3650, AUD: 1.5280, CHF: 0.9080, USD: 1.0 },
  EUR: { USD: 1.0853, GBP: 0.8563, JPY: 167.78, SGD: 1.4629, CAD: 1.4814, AUD: 1.6580, CHF: 0.9850, EUR: 1.0 },
  GBP: { USD: 1.2674, EUR: 1.1678, JPY: 195.94, SGD: 1.7084, CAD: 1.7300, AUD: 1.9360, CHF: 1.1510, GBP: 1.0 },
  JPY: { USD: 0.00646, EUR: 0.00596, GBP: 0.00510, SGD: 0.00871, CAD: 0.00882, AUD: 0.00988, CHF: 0.00587, JPY: 1.0 },
  SGD: { USD: 0.7418, EUR: 0.6835, GBP: 0.5853, JPY: 114.68, CAD: 1.0126, AUD: 1.1330, CHF: 0.6730, SGD: 1.0 },
  CAD: { USD: 0.7326, EUR: 0.6750, GBP: 0.5780, JPY: 113.26, SGD: 0.9875, AUD: 1.1190, CHF: 0.6650, CAD: 1.0 },
  AUD: { USD: 0.6544, EUR: 0.6031, GBP: 0.5165, JPY: 101.18, SGD: 0.8826, CAD: 0.8936, CHF: 0.5940, AUD: 1.0 }
};

export async function fetchFxRates(base = 'USD') {
  try {
    const res = await fetch(`${API_BASE_URL}/fx/rates?base=${base}`);
    if (!res.ok) throw new Error('Network error');
    return await res.json();
  } catch (err) {
    console.warn('Backend API offline, using fallback client rates:', err.message);
    return {
      base,
      timestamp: new Date().toISOString(),
      provider: 'FX-Master Client Engine (Fallback)',
      rates: FALLBACK_RATES[base] || FALLBACK_RATES.USD
    };
  }
}

export async function fetchConversion(amount, from, to) {
  try {
    const res = await fetch(`${API_BASE_URL}/fx/convert?amount=${amount}&from=${from}&to=${to}`);
    if (!res.ok) throw new Error('Network error');
    return await res.json();
  } catch (err) {
    const rates = FALLBACK_RATES[from] || FALLBACK_RATES.USD;
    const rate = rates[to] || 1.0;
    const receivedAmount = amount * rate;
    const bankLossUSD = (amount * 0.038) + 45;
    const bankReceived = Math.max(0, amount - bankLossUSD) * rate;

    return {
      query: { amount, from, to },
      rate,
      fxMaster: {
        receivedAmount: parseFloat(receivedAmount.toFixed(to === 'JPY' ? 0 : 2)),
        feeUSD: 0.00,
        markup: '0.00%',
        settlementTime: '< 20ms'
      },
      traditionalBank: {
        receivedAmount: parseFloat(bankReceived.toFixed(to === 'JPY' ? 0 : 2)),
        hiddenSpreadLossUSD: parseFloat((amount * 0.038).toFixed(2)),
        wireFeeUSD: 45.0,
        settlementTime: '3 - 5 Business Days'
      },
      totalSavingsUSD: parseFloat(bankLossUSD.toFixed(2))
    };
  }
}

export async function fetchTreasuryMetrics(timeframe = '7d') {
  try {
    const res = await fetch(`${API_BASE_URL}/treasury/metrics?timeframe=${timeframe}`);
    if (!res.ok) throw new Error('Network error');
    return await res.json();
  } catch (err) {
    const datasets = {
      '24h': [120, 135, 128, 142, 139, 155, 148, 162, 175],
      '7d':  [95, 110, 105, 130, 125, 150, 145, 170, 185, 195],
      '1m':  [80, 95, 115, 110, 140, 135, 160, 180, 210, 230],
      '1y':  [50, 75, 90, 120, 145, 180, 205, 240, 280, 310],
      'all': [30, 55, 80, 110, 150, 190, 230, 270, 320, 360]
    };

    return {
      totalLiquidUSD: 1489240.50,
      monthlyTrendPct: 18.4,
      todayInflowUSD: 34820.00,
      vaults: [
        { currency: 'USD', name: 'USD Vault', balance: 840500.00, flag: '🇺🇸' },
        { currency: 'EUR', name: 'EUR Vault', balance: 420100.00, flag: '🇪🇺' },
        { currency: 'GBP', name: 'GBP Vault', balance: 185420.00, flag: '🇬🇧' },
        { currency: 'JPY', name: 'JPY Vault', balance: 6200000.00, flag: '🇯🇵' }
      ],
      selectedTimeframe: timeframe,
      timeSeries: datasets[timeframe] || datasets['7d'],
      recentTransactions: [
        { id: 'tx_9841', type: 'inflow', title: 'Stripe Settlement', sub: 'EUR ➔ USD Auto-Sweep', amount: '+$48,200.00', status: 'COMPLETED' },
        { id: 'tx_9842', type: 'outflow', title: 'AWS Infrastructure', sub: 'Virtual Card •• 4192', amount: '-$3,450.00', status: 'COMPLETED' },
        { id: 'tx_9843', type: 'hedge', title: 'Algorithmic FX Hedge', sub: 'USD/JPY Volatility Shield', amount: 'Hedged', status: 'ACTIVE' },
        { id: 'tx_9844', type: 'inflow', title: 'Tokyo Client Payout', sub: 'SWIFT GPI Instant Rail', amount: '+$112,000.00', status: 'COMPLETED' }
      ]
    };
  }
}
