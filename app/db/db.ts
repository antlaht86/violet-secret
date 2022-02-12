import flatCache from "flat-cache";
import { readFileSync } from "fs";
import { join } from "path";

const cache = flatCache.load("cacheId", join(__dirname, "_files/"));

export function getSecret(id: string): { pd: string; text: string } | null {
  return cache.getKey(id);
}

export function setSecret(id: string, pd: string, text: string) {
  cache.setKey(id, { pd, text });
  cache.save();
}

export function removeSecret(id: string) {
  cache.removeKey(id);
}
