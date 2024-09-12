const mongoose = require("mongoose");
const connectdb=async ()=>{
    try{
        const connection = mongoose.connect("mongodb://localhost:27017/techno");
        console.log("Database is connected");
    }
    catch(error){
        console.log("Error connecting database",error);
    }
}
module.exports = connectdb;