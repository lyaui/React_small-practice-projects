import { MongoClient } from 'mongodb';

export const connectDatabase = async (dbName) => {
  const url = `mongodb+srv://next-event-test:YcQrmqFnFGVUSzzW@cluster0.oo4rq.mongodb.net/${dbName}?retryWrites=true&w=majority`;
  const client = await new MongoClient(url).connect();
  return client;
};

export const insertDocument = async (arg) => {
  const { client, collection, document } = arg;
  return await client.db().collection(collection).insertOne(document); // generated ID
};

export const getAllDocuments = async (arg) => {
  const { client, collection, sort } = arg;
  return await client.db().collection(collection).find().sort(sort).toArray();
};
