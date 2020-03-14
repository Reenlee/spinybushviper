import { MongoClient } from 'mongodb';

export async function connectDB(collection) {
  const username = process.env.MDB_USERNAME;
  const password = process.env.MDB_PASSWORD;
  const database = process.env.MDB_DATABASE;

  console.log(username, password, database);
  if (typeof global.client === 'undefined') {
    console.log('client is undefined. connecting again.');
    const uri = `mongodb+srv://${username}:${password}@cluster0-sb1ds.mongodb.net/${database}?retryWrites=true&w=majority`;

    global.client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await global.client.connect();
  }

  return global.client.db(database).collection(collection);
}

// How to run local mongodb
// $ sudo mongod --port 27017 --dbpath /data/db
// const uri = 'mongodb://localhost:27017/db'
