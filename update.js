const dbConnection =require('./connection');

const update =async()=>{
 const db =  await dbConnection();
 const result = await db.updateOne(
    {
    hostname:'anoop'}, {$set : {hostname: 'Anoop'}}
 )


 console.warn(result);

}

update();