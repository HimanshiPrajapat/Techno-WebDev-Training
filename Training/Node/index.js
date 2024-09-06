//Node .js is a js runtime environment
//FILE SYSTEM  
// const fs = require('fs') ;
//node library -fs(file system helps to manipulate file)
// console.log(process)


// data=fs.writeFileSync('Read.txt','utf8');
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
// const os=require('os');
// console.log(os.arch());
// console.log(os.platform());
// console.log(os.hostname());
// console.log(os.freemem()/1024/1024/1024);
// console.log(os.totalmem()/1024/1024/1024);

//PATH MODULE
// const path=require('path');
// console.log(path.dirname("C:\FullStack-webDev\Training\index.js"));
// console.log(path.extname("C:\FullStack-webDev\Training\index.js"));
// console.log(path.basename("C:\FullStack-webDev\Training\index.js"));

// const fullpath = path.join("C:","FullStack-webDev","Training","index.js");  //create full path - C:\FullStack-webDev\Training\index.js
// console.log(fullpath)
// const abspath=path.resolve("user","local","bin")    //add path to current path -C:\FullStack-webDev\training\user\local\bin
// console.log(abspath)

//HTTP MODULE
const http= require("http");
//server configuration
// const server=http.createServer((req,res)=>{
// // res.end("Hello Techno ,welcome to http server of node.js")
// //configure application with server
// if(req.url=="/")
//     res.end("Welcome to home route");
// else if(req.url=="/about")
//     res.end("Welcome to about route");
// else
//     res.end("Unknown route");
// });

const EventEmitter= require ("events");
const { url } = require('inspector');
// const event = new EventEmitter();
// //defining event and calling twice
// event.on("myName",(name,age)=>{
//     console.log(`My name is ${name} and age is ${age},First Event Emitter`)
// })
// event.on("myName",(name,age)=>{
//     console.log(`My name is ${name} and age is ${age},Second Event Emitter`)
// })
// //calling event
// event.emit("myName","Himanshi",27);

// const server=http.createServer((req,res)=>{
//     if(req.url === "/"){
//         res.end("Homepage");
//         event.emit("homePageAccessed");
//     }
//     else if(req.url === "/about"){
//         res.end("Aboutpage");
//         event.emit("aboutPageAccessed");
//     }
//     else {
//         res.end("Unknownpage");
//         event.emit("UnknownPageAccessed");
//     }
// })

// event.on("homePageAccessed",()=>{
//     console.log("Home Api called")
// })
// event.on("aboutPageAccessed",()=>{
//     console.log("about Api called ")
// })
// event.on("UnknownPageAccessed",()=>{
//     console.log(`Unknown Api called ${req.url}`)
// })

// server.on("request",(req,res)=>{
//     console.log(`Request called Url: ${req.url}`)
// })
// server.on("connection",(socket)=>{
//     console.log("New connection made")
// })
// server.on("close",()=>{
//     console.log("Server closed")
// })

// setTimeout(()=>{
//     server.close();
// },8000)

const event = new EventEmitter();

let storedData;

const server = http.createServer((req,res)=>{
    if(req.method === "POST"){
        let body = "";
        req.on("data",(chunk)=>{
            body += chunk.toString();
        });

        req.on("end",()=>{
            storedData = JSON.parse(body);
            // res.writeHead(200,{"Content-Type": "text/plain"});
            res.end(JSON.stringify(storedData));
        })
    }
});

server.listen(5500,"127.0.0.1",()=>{
    console.log("Server is running on port 5500")
});
// event.emit("myName","Himanshi",26)