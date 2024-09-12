const express= require("express");

const productRouters=require("./router/product")
const connectDb=require("./config/db");
const userRouters=require("./router/user")
const app= express();            //is in the form of function that returns object with several method
app.use(express.json());       //used as middleware to convert data into json to display it
connectDb();
const users=[
    {
        "Username":"Himanshi",
        "Email":"Himanshi@123",
        "contactNo":"323567586"
    }
]   
const middleWare1=(req,res,next)=>{
 console.log("MiddleWare 1 called");
//  res.send({message : "Unauthorized"})
 next();
}
const middleWare2=(req,res,next)=>{
    console.log("MiddleWare 2 called");
   //  res.send({message : "Unauthorized"})
    next();
   }
app.use(middleWare1);
app.use("/api",userRouters);  //http://localhost:3000/api
app.use("/prod",productRouters);

// const port =3000;
// app.get("/",(req,res)=>{
//     res.send("Hello from / Route")
// });

app.get("/",middleWare2,(req,res)=>{
    res.send({message:"User fetched",users:users})
})
app.post("/createUser",middleWare2,(req,res)=>{  //http://localhost:5500/createUser
    const data =req.body;
    // console.log(data);
    users.push(data);
    res.send({message : "User created",users: data})
})
// app.listen(5500,()=>{
//     console.log("server is running on 5500")
// })

app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000`);
  });


//MVC architechture -Model , view , controller
