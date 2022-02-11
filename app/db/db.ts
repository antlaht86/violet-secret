import flatCache from "flat-cache";
import os from "os";
const cache = flatCache.load("cacheId", "../static/");

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
