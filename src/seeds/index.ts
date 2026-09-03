import type { SeedKey, SeedProfile, LazadaOrderDTO } from './types.js';
import { defaultSeedProfile } from './defaultSeed.js';
import { megaSaleSeedProfile } from './megaSaleSeed.js';
import { highReturnsSeedProfile } from './highReturnsSeed.js';
import { freshOrdersSeedProfile } from './freshOrdersSeed.js';

export * from './types.js';

export const SEED_PROFILES: Record<SeedKey, SeedProfile> = {
  default: defaultSeedProfile,
  mega_sale: megaSaleSeedProfile,
  high_returns: highReturnsSeedProfile,
  fresh_orders: freshOrdersSeedProfile,
};

let currentActiveSeedKey: SeedKey = 'default';

export function getActiveSeedKey(): SeedKey {
  return currentActiveSeedKey;
}

export function setActiveSeedKey(key: SeedKey): boolean {
  if (SEED_PROFILES[key]) {
    currentActiveSeedKey = key;
    return true;
  }
  return false;
}

export function getOrdersBySeed(seedKey?: string | null): LazadaOrderDTO[] {
  if (seedKey && SEED_PROFILES[seedKey as SeedKey]) {
    return SEED_PROFILES[seedKey as SeedKey].orders;
  }
  return SEED_PROFILES[currentActiveSeedKey].orders;
}

export function listSeedProfiles() {
  return Object.values(SEED_PROFILES).map((p) => ({
    key: p.key,
    name: p.name,
    description: p.description,
    orderCount: p.orders.length,
    isActive: p.key === currentActiveSeedKey,
  }));
}
