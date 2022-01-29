import Redis from "ioredis";
import invariant from "tiny-invariant";
const redis = new Redis(process.env.REDIS_URL);

export async function getSecret(id: string) {
  const promise = redis.hgetall(id, (err, result) => {
    if (err) {
      console.error(err);
      return null;
    } else {
      return result;
    }
  });
  return promise;
}

export async function setSecret(id: string, pd: string, text: string) {
  const promise = redis.hset(
    id,
    ["password", pd, "text", text],
    (err, result) => {
      if (err) {
        console.error(err);
        return null;
      } else {
        return result;
      }
    }
  );
  return promise;
}

export async function removeSecret(id: string) {
  invariant(id, "id is required");
  const promise = redis.hdel(id, ["password", "text"], (err, result) => {
    if (err) {
      console.error(err);
      return null;
    } else {
      return result;
    }
  });
  return promise;
}
