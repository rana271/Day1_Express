const { MongoClient } = require('mongodb');

const uri = "mongodb://0.0.0.0:27017/";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db('SampleStudentDB');
    const collection = db.collection('Student');

    // Find the first document in the collection
    const first = await collection.findOne();
    console.log(first);
  } finally {
    // Close the database connection when finished or an error occurs
    await client.close();
  }
}
run().catch(console.error);