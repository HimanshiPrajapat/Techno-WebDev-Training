const express= require("express");
const app= express();            //is in the form of function that returns object with several methods
app.use(express.json());       //used as middleware to convert data into json to display it
const port =3000;
app.get("/",(req,res)=>{
    res.send("Hello from / Route")
});
app.post("/createUser",(req,res)=>{  //http://localhost:5500/createUser
    const data =req.body;
    console.log(data);
    res.send({message : "User created",data: data})
})
// app.listen(5500,()=>{
//     console.log("server is running on 5500")
// })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });


//MVC architechture next  html to react test on monday