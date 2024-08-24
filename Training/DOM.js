// //DOm
// //document is an html page
// console.log(document)
// //document methods
// let MyDiv=document.getElementById("main")
// console.log(MyDiv) //accessing ID of div on console
// //On console
// // MyDiv.id
// // 'main'
// // MyDiv.className
// // ''
// // MyDiv.className="divClass"
// // 'divClass'
// MyDiv.className="divClass"
// MyDiv.style.height="200px"
// MyDiv.style.width="200px"
// MyDiv.style.backgroundColor="Red"
// MyDiv.style.border="black 200px"

// ---------------------------------------------------------------Day-6----------------------------------------------------------------------------

// console.log(MyDiv.getAttribute('class'));
// console.log(MyDiv.className);

// MyDiv.setAttribute("id","container") //changes id to container
// console.log(MyDiv)
// //setAttribute overlap the before styles
// //. me id replace hogi per setAttribute replace both id and style
// //because id is in string while style is a object hence set attribute replaces the whole object while . doesn't  ,on other side the id will be replced in each case
// // MyDiv.setAttribute("style","backgroundcolor:green")   

// // let obj={
// //     id:"container",
// //     style:{
// //         width:"200px",
// //         height:"200px",
// //         backgroundColor:"Red"
// //     }
// // }

// console.log(MyDiv.innerHTML)
// //MyDiv.innerHTML="<input type ='password' placeholder='Enter password'><button='submit'></button>"
// console.log(MyDiv.innerText)
// console.log(MyDiv.textContent)  //console the hidden text also

//class can be multiple<not unique> hence contain different elements
// let MyDiv=document.getElementsByClassName("head") //class is array
// console.log(MyDiv)

// let container=["Red","Green","Yellow","Brown","Blue"]
// for(let i=0;i<MyDiv.length;i++){
//     MyDiv[i].style.padding="20px"
//     MyDiv[i].style.width="200px"
//     MyDiv[i].style.height="100px"
//     MyDiv[i].style.backgroundColor=container[i]
// }


// let tag=document.getElementsByTagName("div");
// console.log(tag)
// //querySelector(nodeList) -is a universal sellector used to get id,class,tag
// let selectid=document.querySelector("#main")
// console.log(selectid)
// //accessing class we only get first element of class in querySelector
// let selectclass=document.querySelector(".head")
// console.log(selectclass)
// let selectallclassElement=document.querySelectorAll(".head")
// console.log(selectallclassElement)

//html collection and node-list -array like structure not pure array
//as map function don't work in both but foreach function workswhich are decided by javascript by function in prototype given (by getting one level down untill it get the functions if not shows an error)
//this concept is called prototype inheritence(oops concept)

// let newDiv=
//working on DOM element
// let MyDiv2=documnet.getElementById("main")
// let MyDiv3=documnet.getElementById("container")
// document.body.insertBefore(MyDiv2,MyDiv3)  //(newDiv,MyDiv3)

 // let newDiv = document.createElement("div");
// newDiv.innerHTML  =  "Hello Techno";
// newDiv.style.backgroundColor = "brown";

// document.body.appendChild(newDiv);

// let myDiv2 = document.getElementById("main");
// myDiv2.appendChild(newDiv);
// let myDiv3 = document.getElementById("container");

// let parentDiv = document.getElementById("heading");
// document.body.insertBefore(newDiv,myDiv3 )

// Events

// document.getElementById("button").onclick = function(){
//    let newDiv = document.createElement("div");
//    newDiv.style.width = "200px";
//    newDiv.style.height = "200px";
//    newDiv.style.backgroundColor = "yellow";
//    document.body.appendChild(newDiv);
// }

// document.getElementById("button").addEventListener("click",function(){
//     let newDiv = document.createElement("div");
//    newDiv.style.width = "200px";
//    newDiv.style.height = "200px";
//    newDiv.style.backgroundColor = "yellow";
//    document.body.appendChild(newDiv);
// })

// document.getElementById("box").addEventListener("mouseenter",function(){
//     document.getElementById("box").style.backgroundColor = "blue";
// })
let obj = {};

function getValue(a){   
    obj[a.target.name] = a.target.value;
    console.log(obj);
}

document.getElementById("name").addEventListener("change",function(event){
    getValue(event)
});
document.getElementById("name1").addEventListener("change",function(event){
    getValue(event)
});

