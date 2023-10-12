const dbConnection = require('./connection');

const deleteData= async()=>{
 let data = await dbConnection();
 const result = await data.deleteMany({
    hostname:"Anoop"
 })
 console.log(result);
 if(result.acknowledged){

    console.log("Data deleted")
 }
}

deleteData();