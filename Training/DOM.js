//DOm
//document is an html page
console.log(document)
//document methods
let MyDiv=document.getElementById("main")
console.log(MyDiv) //accessing ID of div on console
//On console
// MyDiv.id
// 'main'
// MyDiv.className
// ''
// MyDiv.className="divClass"
// 'divClass'
MyDiv.className="divClass"
MyDiv.style.height="200px"
MyDiv.style.width="200px"
MyDiv.style.backgroundColor="30px"
MyDiv.style.border="black 200px"
 console.log(MyDiv.getAttribute('class'));
 console.log(MyDiv.className);
//MyDiv.setAttribute("id","container")
console.log(MyDiv)