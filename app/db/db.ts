import flatCache from "flat-cache";
import fs from "fs";
import path from "path";
const path1 = path.resolve("../../", ".output/static/");
const cache = flatCache.load("cacheId", path1);

export function getSecret(id: string): { pd: string; text: string } | null {
  return cache.getKey(id);
}

export function setSecret(id: string, pd: string, text: string) {
  console.log(fs.readdirSync("./"));
  console.log(fs.readdirSync("../"));
  console.log(fs.readdirSync("../../"));
  console.log(fs.readdirSync("../../../"));
  cache.setKey(id, { pd, text });
  cache.save();
}

export function removeSecret(id: string) {
  cache.removeKey(id);
}
