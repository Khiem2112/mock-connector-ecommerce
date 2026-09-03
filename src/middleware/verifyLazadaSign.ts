import crypto from 'node:crypto';
import type { Context, Next } from 'hono';

export const MOCK_APP_SECRET = process.env.LAZADA_APP_SECRET || 'mock_app_secret_456';
export const MOCK_APP_KEY = process.env.LAZADA_APP_KEY || 'mock_app_key_123';

/**
 * Validates HMAC-SHA256 signature according to Lazada Open Platform specification.
 * Algorithm:
 * 1. Sort all parameters (query + body) alphabetically by key name.
 * 2. Concatenate: <apiPath><key1><val1><key2><val2>...
 * 3. Hash with HMAC-SHA256(secret, stringToSign).
 * 4. Compare with uppercase 'sign' parameter.
 */
export function calculateLazadaSignature(
  apiPath: string,
  params: Record<string, string>,
  secret: string,
): string {
  const sortedKeys = Object.keys(params)
    .filter((k) => k !== 'sign')
    .sort();

  let signString = apiPath;
  for (const key of sortedKeys) {
    signString += `${key}${params[key]}`;
  }

  return crypto.createHmac('sha256', secret).update(signString).digest('hex').toUpperCase();
}

export async function verifyLazadaSignMiddleware(c: Context, next: Next) {
  // Allow bypassing signature check if explicitly set in query for easy manual browser testing
  const query = c.req.query();
  if (query.bypass_sign === 'true' || process.env.DISABLE_SIGN_VERIFY === 'true') {
    return next();
  }

  const sign = query.sign;
  const appKey = query.app_key;
  const timestamp = query.timestamp;

  if (!sign) {
    return c.json(
      {
        code: 'IncompleteSignature',
        type: 'ISV',
        message: 'The request is missing the required parameter "sign". (Add ?bypass_sign=true to skip in dev mode)',
        request_id: crypto.randomUUID(),
      },
      400,
    );
  }

  if (appKey && appKey !== MOCK_APP_KEY) {
    return c.json(
      {
        code: 'IllegalAppKey',
        type: 'ISV',
        message: `Invalid app_key: "${appKey}". Expected "${MOCK_APP_KEY}".`,
        request_id: crypto.randomUUID(),
      },
      400,
    );
  }

  const url = new URL(c.req.url);
  const path = url.pathname.replace(/^\/rest/, '') || '/';
  const expectedSign = calculateLazadaSignature(path, query, MOCK_APP_SECRET);

  if (sign.toUpperCase() !== expectedSign) {
    return c.json(
      {
        code: 'InvalidSignature',
        type: 'ISV',
        message: `Invalid signature. Expected: ${expectedSign}, Got: ${sign}`,
        request_id: crypto.randomUUID(),
      },
      400,
    );
  }

  return next();
}
