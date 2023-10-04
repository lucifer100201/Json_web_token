const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const databaseName = 'local';
const client = new MongoClient(url);

async function getData() {
    try {
        await client.connect();
        const db = client.db(databaseName);
        const Collection = db.collection('startup_log'); // Use 'collection' instead of 'Collection'
        const data = await Collection.find({}).toArray(); // Use 'await' here

        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    } finally {
        await client.close(); // Close the connection when done
    }
}

getData();
