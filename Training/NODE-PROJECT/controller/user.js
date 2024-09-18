// index.js -> router -> controller -> Model

const users = require("../user");
const User = require("../model/user")
exports.getUsers = (req,res)=>{     //http://localhost:3000/api/user 
    try{
        const user =  User.find();            //await User.find();
        res.status(200).send({message: "user fetched" ,data: user});
    }catch(error){
          res.status(500).send({error:error});
    } 
    
}

exports.createUsers = (req,res)=>{
    try{
        const {firstName,lastName,email,contactDetails}=req.body;
        const existingUser =  User.find({email: email});
        if(existingUser){
            return res.status(400).send({message: "User already exist"});
        }
        const user = new User({firstName: firstName, lastName: lastName ,email: email , contactDetails: contactDetails});
         user.save();  //await user.save();
        res.status(201).send({message: "User Created",data:user});
    } catch (error){
        res.status(500).send({error : error});
    }
    
//     const modifiedData= ({id: users.length+1 , ...data})
//    users.push(modifiedData);
//    res.status(201).send({message: "User Created",data: users});
}

exports.updateUsers = (req,res)=>{
    const id= req.params.id;
    const user = users.find(item=>item.id === +id);
    if(!user){
        return res.status(404).send({message: "user not found"});
    }
    user.contactNo  =req.body.contactNo;
    res.status(202).send({message: "user updated"});
}

exports.deleteUsers = (req,res)=>{
    const id= req.params.id;
    const userIndex = users.findIndex(item=>item.id === +id);
    if(userIndex === -1){
        return res.status(401).send({message: "user not found"});
    }
    const deleteUser=users.splice(userIndex , 1);
    res.status(200).send({message: "user deleted", data: deleteUser});
}