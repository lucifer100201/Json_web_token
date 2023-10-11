const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const databaseName = 'local';
const client = new MongoClient(url);

async function dbConnect() {
    
        await client.connect();
        const db = client.db(databaseName);
        return db.collection('startup_log');

}



module.exports = dbConnect;