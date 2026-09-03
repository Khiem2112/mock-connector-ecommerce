import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import crypto from 'node:crypto';
import ordersRouter from './routes/orders.js';
import seedsRouter from './routes/seeds.js';
import { verifyLazadaSignMiddleware } from './middleware/verifyLazadaSign.js';

const app = new Hono();

// Global Middlewares
app.use('*', logger());
app.use('*', cors());

// Root & Health check (No sign required)
app.get('/', (c) => {
  return c.json({
    name: 'Mock Lazada Open Platform REST API Server',
    version: '1.0.0',
    status: 'online',
    docs: {
      endpoints: [
        'GET /rest/orders/get',
        'GET /rest/order/get?order_id=1000101',
        'GET /rest/order/items/get?order_id=1000101',
        'GET /rest/mock/seeds',
        'POST /rest/mock/seed/select',
      ],
      tip: 'Add ?bypass_sign=true to skip HMAC-SHA256 signature check during manual browser testing.',
    },
  });
});

app.get('/health', (c) => {
  return c.json({
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

// REST Endpoints with Lazada Signature Middleware
app.use('/rest/orders/*', verifyLazadaSignMiddleware);
app.use('/rest/order/*', verifyLazadaSignMiddleware);

// Mount Routers
app.route('/rest', ordersRouter);
app.route('/rest', seedsRouter);

export default app;
