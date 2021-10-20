// 
import { MongoClient } from "https://deno.land/x/mongo@v0.8.0/mod.ts";

const MONGO_URL = `mongodb://localhost:27017` // Change this to your mongodb url 
const client = new MongoClient();
client.connectWithUri(MONGO_URL); // creates the connection 

const db = client.database('notes');

export default db;
