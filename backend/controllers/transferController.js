exports.createTransfer = (req, res) => {
  const { sourceAccount, destination, amount, currency, targetCurrency, executionMode } = req.body;

  if (!amount || amount <= 0) {
    return res.status(400).json({ error: 'Valid positive amount is required' });
  }

  const transferId = 'tr_' + Math.random().toString(36).substring(2, 10);
  const latencyMs = Math.floor(Math.random() * 15) + 5; // 5-20ms

  res.json({
    success: true,
    transferId,
    status: 'SETTLED',
    sourceAccount: sourceAccount || 'acc_eur_9482',
    destination: destination || 'acc_usd_1029',
    amountSent: amount,
    currencySent: currency || 'USD',
    targetCurrency: targetCurrency || 'EUR',
    executionMode: executionMode || 'INSTANT_ZERO_SPREAD',
    latencyMs,
    settledAt: new Date().toISOString(),
    receiptUrl: `https://fx-master.io/receipts/${transferId}`
  });
};
