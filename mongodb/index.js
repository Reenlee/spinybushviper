import { MongoClient } from 'mongodb';

let client;

export async function connectDB(collection) {
  const username = process.env.MDB_USERNAME;
  const password = process.env.MDB_PASSWORD;
  const database = process.env.MDB_DATABASE;

  if (typeof client === 'undefined') {
    const uri = `mongodb+srv://${username}:${password}@gorilla-xgquu.mongodb.net/${database}?retryWrites=true&w=majority`;

    client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await client.connect();
  }

  return client.db(database).collection(collection);
}

// How to run local mongodb
// $ sudo mongod --port 27017 --dbpath /data/db
// const uri = 'mongodb://localhost:27017/db'
