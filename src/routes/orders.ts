import { Hono } from 'hono';
import crypto from 'node:crypto';
import { getOrdersBySeed } from '../seeds/index.js';
import type { LazadaApiResponse, LazadaOrdersGetResponse, LazadaOrderDTO, LazadaOrderItemDTO } from '../seeds/types.js';

const ordersRouter = new Hono();

/**
 * GET /rest/orders/get
 * Standard Lazada Order List endpoint.
 * Query parameters supported:
 * - status: Filter by order status (e.g. 'unpaid', 'ready_to_ship', 'shipped', 'delivered', 'canceled', 'returned')
 * - created_after / created_before: ISO timestamp filters
 * - update_after / update_before: ISO timestamp filters
 * - limit: Max items to return (default 20)
 * - offset: Pagination offset (default 0)
 * - seed: Query a specific seed dataset ('default' | 'mega_sale' | 'high_returns' | 'fresh_orders')
 */
ordersRouter.get('/orders/get', (c) => {
  const query = c.req.query();
  const seedKey = query.seed || c.req.header('x-mock-seed');
  const allOrders = getOrdersBySeed(seedKey);

  let filtered = [...allOrders];

  // 1. Status Filter
  if (query.status && query.status.trim() !== '') {
    const targetStatus = query.status.toLowerCase().trim();
    filtered = filtered.filter((o) => o.statuses.some((s) => s.toLowerCase() === targetStatus));
  }

  // 2. Created After Filter
  if (query.created_after) {
    const afterTime = new Date(query.created_after).getTime();
    if (!isNaN(afterTime)) {
      filtered = filtered.filter((o) => new Date(o.created_at).getTime() >= afterTime);
    }
  }

  // 3. Update After Filter
  if (query.update_after) {
    const afterTime = new Date(query.update_after).getTime();
    if (!isNaN(afterTime)) {
      filtered = filtered.filter((o) => new Date(o.updated_at).getTime() >= afterTime);
    }
  }

  const offset = parseInt(query.offset || '0', 10);
  const limit = Math.min(100, parseInt(query.limit || '20', 10));
  const pagedOrders = filtered.slice(offset, offset + limit);

  const response: LazadaApiResponse<LazadaOrdersGetResponse> = {
    code: '0',
    request_id: crypto.randomUUID(),
    data: {
      count: pagedOrders.length,
      countTotal: filtered.length,
      orders: pagedOrders,
    },
  };

  return c.json(response);
});

/**
 * GET /rest/order/get
 * Standard Lazada Single Order Detail endpoint.
 * Query parameters:
 * - order_id: Number ID of the order
 * - seed: Seed dataset key
 */
ordersRouter.get('/order/get', (c) => {
  const query = c.req.query();
  const seedKey = query.seed || c.req.header('x-mock-seed');
  const allOrders = getOrdersBySeed(seedKey);

  const orderId = parseInt(query.order_id || '0', 10);
  const order = allOrders.find((o) => o.order_id === orderId);

  if (!order) {
    return c.json(
      {
        code: 'OrderNotFound',
        type: 'ISV',
        message: `Order with ID "${query.order_id}" was not found in mock seed.`,
        request_id: crypto.randomUUID(),
      },
      404,
    );
  }

  const response: LazadaApiResponse<LazadaOrderDTO> = {
    code: '0',
    request_id: crypto.randomUUID(),
    data: order,
  };

  return c.json(response);
});

/**
 * GET /rest/order/items/get
 * Standard Lazada Order Items endpoint.
 * Query parameters:
 * - order_id: Number ID of the order
 * - seed: Seed dataset key
 */
ordersRouter.get('/order/items/get', (c) => {
  const query = c.req.query();
  const seedKey = query.seed || c.req.header('x-mock-seed');
  const allOrders = getOrdersBySeed(seedKey);

  const orderId = parseInt(query.order_id || '0', 10);
  const order = allOrders.find((o) => o.order_id === orderId);

  if (!order) {
    return c.json(
      {
        code: 'OrderNotFound',
        type: 'ISV',
        message: `Order with ID "${query.order_id}" was not found.`,
        request_id: crypto.randomUUID(),
      },
      404,
    );
  }

  const response: LazadaApiResponse<LazadaOrderItemDTO[]> = {
    code: '0',
    request_id: crypto.randomUUID(),
    data: order.items || [],
  };

  return c.json(response);
});

export default ordersRouter;
