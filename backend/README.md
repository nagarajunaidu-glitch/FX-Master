# FX-Master Backend API

Express & Node.js backend providing financial endpoints for real-time FX rates, conversions, treasury metrics, and simulated instant settlements.

## Available Endpoints

- `GET /api/health` - Health check & settlement rails status.
- `GET /api/fx/rates?base=USD` - Live interbank exchange rates.
- `GET /api/fx/convert?amount=5000&from=USD&to=EUR` - Instant conversion calculation and bank fee savings analysis.
- `GET /api/treasury/metrics?timeframe=7d` - Multi-currency vaults, time-series flow data, and live transactions.
- `POST /api/transfers` - Simulated low-latency settlement execution.

## Quick Start

```bash
cd backend
npm install
npm run dev
```

Server runs on: `http://localhost:5000`
