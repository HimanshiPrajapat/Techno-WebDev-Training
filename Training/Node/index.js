//Node .js is a js runtime environment
//FILE SYSTEM  
const fs = require('fs') ;
//node library -fs(file system helps to manipulate file)
// console.log(process)


data=fs.writeFileSync('Read.txt','utf8');
// console.log(data.toString());
// console.log('Reading file')
// fs.writeFileSync("Read.txt","Welcome to text file.")
// fs.appendFileSync("Read.txt","Welcome to text file.")

// fs.writeFile("Read.txt","Hello TR1,Welcome Back !",(err)=>{
//     console.log(err);

// console.log("File Created");})
// console.log("After write file sync");

// fs.readFile("Read.txt","UTF-8",(err,data)=>{
//     console.log(data)
// })

// fs.mkdir("./Folder1",(err)=>{
//     console.log("Folder Created")})
// // fs.unlink("Read.txt",(err)=>{
// //     console.log("File deleted");
// // })
// fs.rmdir("./Folder1",(err)=>{
//     console.log("Folder Deleted")})

//OS MODULE
const os=require('os');
// console.log(os.arch());
// console.log(os.platform());
// console.log(os.hostname());
// console.log(os.freemem()/1024/1024/1024);
// console.log(os.totalmem()/1024/1024/1024);

//PATH MODULE
const path=require('path');
console.log(path.dirname("C:\FullStack-webDev\Training\index.js"));
console.log(path.extname("C:\FullStack-webDev\Training\index.js"));
console.log(path.basename("C:\FullStack-webDev\Training\index.js"));

const fullpath = path.join("C:","FullStack-webDev","Training","index.js");  //create full path - C:\FullStack-webDev\Training\index.js
console.log(fullpath)
const abspath=path.resolve("user","local","bin")    //add path to current path -C:\FullStack-webDev\training\user\local\bin
console.log(abspath)

