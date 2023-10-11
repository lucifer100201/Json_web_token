
const dbConnection = require('./connection');

const main = async () => {
    let data = await dbConnection();
    const res = await data.find({}).toArray();
    console.warn(res);

}


main();  