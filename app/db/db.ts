import { MongoClient } from "mongodb";
import invariant from "tiny-invariant";

invariant(process.env.MONGO_USER);
invariant(process.env.MONGO_PASSWORD);
const client = new MongoClient(
  `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster1.ratni.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`
);

export async function getSecret(id: string) {
  try {
    await client.connect();
    const database = client.db("violetsecret");
    const secrets = database.collection("secrets");

    const query = { id: id };
    const secret = await secrets.findOne<{ pd: string; text: string }>(query);

    return secret;
  } catch (e) {
    console.log("-> getSecret e: ", e);
    return null;
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

export async function setSecret(id: string, pd: string, text: string) {
  // cache.put(id, JSON.stringify({ pd, text }));
  try {
    await client.connect();
    const database = client.db("violetsecret");
    const secrets = database.collection("secrets");

    const query = { id: id };
    const secret = await secrets.insertOne({
      id: id,
      pd: pd,
      text,
    });
    return secret;
  } catch (e) {
    console.log("-> setSecret e: ", e);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

export async function removeSecret(id: string) {
  try {
    await client.connect();
    const database = client.db("violetsecret");
    const secrets = database.collection("secrets");

    const query = { id: id };
    const secret = await secrets.deleteOne({ id: id });
    return secret;
  } catch (e) {
    console.log("-> removeSecret e: ", e);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
