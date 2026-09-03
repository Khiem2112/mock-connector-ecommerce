import { Hono } from 'hono';
import crypto from 'node:crypto';
import { listSeedProfiles, setActiveSeedKey, type SeedKey } from '../seeds/index.js';

const seedsRouter = new Hono();

/**
 * GET /rest/mock/seeds
 * List all available seed datasets and view their metadata
 */
seedsRouter.get('/mock/seeds', (c) => {
  return c.json({
    code: '0',
    request_id: crypto.randomUUID(),
    data: {
      active_seed: listSeedProfiles().find((s) => s.isActive)?.key,
      seeds: listSeedProfiles(),
    },
  });
});

/**
 * POST /rest/mock/seed/select
 * Switch the default active seed profile
 */
seedsRouter.post('/mock/seed/select', async (c) => {
  const body = await c.req.json<{ seed: SeedKey }>();
  const success = setActiveSeedKey(body.seed);

  if (!success) {
    return c.json(
      {
        code: 'InvalidSeedKey',
        message: `Invalid seed key "${body.seed}". Available: default, mega_sale, high_returns, fresh_orders`,
        request_id: crypto.randomUUID(),
      },
      400,
    );
  }

  return c.json({
    code: '0',
    message: `Active seed dataset switched to "${body.seed}" successfully.`,
    request_id: crypto.randomUUID(),
    data: {
      active_seed: body.seed,
    },
  });
});

export default seedsRouter;
