// Mock Treasury Liquidity & Activity Data

exports.getMetrics = (req, res) => {
  const timeframe = req.query.timeframe || '7d';

  const datasets = {
    '24h': [120, 135, 128, 142, 139, 155, 148, 162, 175],
    '7d':  [95, 110, 105, 130, 125, 150, 145, 170, 185, 195],
    '1m':  [80, 95, 115, 110, 140, 135, 160, 180, 210, 230],
    '1y':  [50, 75, 90, 120, 145, 180, 205, 240, 280, 310],
    'all': [30, 55, 80, 110, 150, 190, 230, 270, 320, 360]
  };

  res.json({
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
  });
};
