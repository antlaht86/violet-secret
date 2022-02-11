import Redis from "ioredis";
import flatCache from "flat-cache";
import invariant from "tiny-invariant";

const cache = flatCache.load("cacheId");

export function getSecret(id: string): { pd: string; text: string } | null {
  console.log("🤡 cache: ", cache.all());

  return cache.getKey(id);
}

export function setSecret(id: string, pd: string, text: string) {
  cache.setKey(id, { pd, text });
  cache.save();
  console.log("🤡 cache: ", cache.all());
}

export function removeSecret(id: string) {
  cache.removeKey(id);
}
