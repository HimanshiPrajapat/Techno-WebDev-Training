const express = require("express");
const Users = require("../user");
const users = require("../user");
const router = express.Router();
router.get("/user",(req,res)=>{  //http://localhost:3000/api/user
    const data=req.body;
    res.status(500).send({message: "user fetched" ,data: users});
});
router.post("/user",(req,res)=>{
   const data=req.body;
   const modifiedData= ({id: users.length+1 , ...data})
   users.push(modifiedData);
   res.status(201).send({message: "User Created",data: users});
});

router.put("/user/:id",(req,res)=>{
    const id= req.params.id;
    const user = users.find(item=>item.id === +id);
    if(!user){
        return res.status(404).send({message: "user not found"});
    }
    user.contactNo  =req.body.contactNo;
    res.status(202).send({message: "user updated"});
});

router.delete("/user/:id",(req,res)=>{
    const id= req.params.id;
    const userIndex = users.findIndex(item=>item.id === +id);
    if(userIndex === -1){
        return res.status(401).send({message: "user not found"});
    }
    const deleteUser=users.splice(userIndex , 1);
    res.status(200).send({message: "user deleted", data: deleteUser});
})

module.exports = router;