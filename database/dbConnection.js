import { MongoClient } from "mongodb";
import dotenv from 'dotenv';
dotenv.config()
const MONGO_URL_CON = process.env.MONGO_URL
const client = new MongoClient(MONGO_URL_CON);

let dbClient;

export async function connectDB() {
  try {
    await client.connect();
    console.log('Connected successfully to local MongoDB');
    dbClient = client;
    return client;
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    throw err;
  }
}

export function getClient() {
  if (!dbClient) {
    throw new Error('Database not connected. Call connectDB first.');
  }
  return dbClient;
}

