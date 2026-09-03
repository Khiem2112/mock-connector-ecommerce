import { serve } from '@hono/node-server';
import app from './app.js';

const port = Number(process.env.PORT) || 4000;

console.log(`🚀 Mock Lazada REST API Server is running on http://localhost:${port}`);
console.log(`📋 Seed Dataset Viewer: http://localhost:${port}/rest/mock/seeds`);
console.log(`📦 Sample Orders List: http://localhost:${port}/rest/orders/get?bypass_sign=true`);

serve({
  fetch: app.fetch,
  port,
});
