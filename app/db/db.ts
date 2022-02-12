import flatCache from "flat-cache";
import cache from "memory-cache";
import { readFileSync } from "fs";
import { join } from "path";

// const cache = flatCache.load("cacheId", join(__dirname, "_files/"));

export function getSecret(id: string): { pd: string; text: string } | null {
  return JSON.parse(cache.get(id));
}

export function setSecret(id: string, pd: string, text: string) {
  cache.put(id, JSON.stringify({ pd, text }));
}

export function removeSecret(id: string) {
  cache.del(id);
}
