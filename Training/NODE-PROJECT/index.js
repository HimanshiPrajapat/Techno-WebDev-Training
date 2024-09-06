const express= require("express");
const app= express();            //is in the form of function that returns object with several methods
app.get("/",(req,res)=>{
    res.send("Hello from / Route")
});
app.listen(5500,()=>{
    console.log("server is running on 5500")
})