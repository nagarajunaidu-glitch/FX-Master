const express = require('express');
const cors = require('cors');
require('dotenv').config();

const fxRoutes = require('./routes/fxRoutes');
const treasuryRoutes = require('./routes/treasuryRoutes');
const transferRoutes = require('./routes/transferRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Request logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

// Health check route
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'FX-Master Treasury & FX Engine',
    uptime: process.uptime(),
    settlementRails: 'ACTIVE (99.999%)'
  });
});

// API Routes
app.use('/api/fx', fxRoutes);
app.use('/api/treasury', treasuryRoutes);
app.use('/api/transfers', transferRoutes);

// 404 Route handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found on FX-Master API' });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('API Error:', err);
  res.status(500).json({ error: 'Internal Server Error in FX Settlement Engine' });
});

app.listen(PORT, () => {
  console.log(`🚀 FX-Master Backend API running on http://localhost:${PORT}`);
  console.log(`📡 Health check: http://localhost:${PORT}/api/health`);
  console.log(`💱 FX Rates: http://localhost:${PORT}/api/fx/rates`);
});
