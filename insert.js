const dbConnection = require('./connection');

const insertData = async () => {
  const db = await dbConnection();
  
  const result = await db.insertOne(
    {
    hostname: 'anoop1',
    startTime: new Date('2023-10-11T18:49:29.000Z'), // Use a valid date string or a JavaScript Date object
    startTimeLocal: 'Wed Oct 10 00:19:29.535',
    cmdLine: '{}',
    pid: '50014',
    buildinfo: '{}'
  }
  
);

  if(result.acknowledged==='true'){
  console.log("Data insert successfully");
  }
};

insertData();
