import flatCache from "flat-cache";

const cache = flatCache.load("cacheId", "./");

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
