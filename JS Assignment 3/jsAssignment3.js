// JavaScript DOM Manipulation Assignment
// 1. Create an HTML file with a paragraph element. Write a JavaScript function to change the text
// content of the paragraph when a button is clicked.


    const button = document.getElementById("changeTextButton");
    const paragraph = document.getElementById("text");

    button.addEventListener("click", function() {
        paragraph.innerText = "The paragraph text has been changed!";
    });


// 2. Write a program that changes the background color of a <div> element to blue when the mouse
// hovers over it.


const Event= document.getElementById("Mydiv").addEventListener("mouseover",function(){
    Mydiv.style.backgroundColor="blue";
})
document.getElementById("Mydiv").addEventListener("mouseout",function(){
    // CloseEvent(Event);
    Mydiv.style.backgroundColor="lightgreen";
})

// 3. Write a JavaScript program that creates a new <li> element with some text and adds it to an
// existing <ul> list when a button is clicked.

document.getElementById("addlist").addEventListener("click",function(){
    let add=document.getElementById("itemList");
    let li=document.createElement("li")
    li.innerHTML=`new item <button class="removeButton">Remove</button>`;
    add.appendChild(li)
    
})


// 4. Create a list of items. Write a function to remove an item from the list when a specific button next
// to it is clicked.

document.getElementById("removelist").addEventListener("click",function(){
    
    const buttons = document.querySelectorAll(".removeButton");

            buttons.forEach(button => {
                button.addEventListener("click", function() {
                    const listItem = this.parentElement;
                    listItem.remove(); // Remove the parent <li> element from the list
                });
            });
    
})

// 5. Create a simple HTML form with input fields for a user's name and email. Write JavaScript to
// display a message below the form that says 'Thank you for submitting, [name]!' when the form is
// submitted.

const form = document.getElementById("userForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const name = document.getElementById("name").value;

    message.innerText = `Thank you for submitting, ${name}!`;
});

// 6. Write a program that adds an event listener to a button so that when it is clicked, an alert
// message is shown.

const alertbutton = document.getElementById("alertButton");

alertbutton.addEventListener("click", function() {
    alert("Button was clicked!");
});

// 7. Create an HTML element with a class of 'hidden'. Write a JavaScript function that toggles this
// class when a button is clicked, showing and hiding the element.

const toggleButton = document.getElementById("toggleButton");
            const toggleElement = document.getElementById("toggleElement");

            toggleButton.addEventListener("click", function() {
                toggleElement.classList.toggle("hidden");
            });

// 8. Write a program that retrieves the value of an input field and displays it in another part of the
// document when a button is pressed.

const inputField = document.getElementById("userInput");
            const displayButton = document.getElementById("displayButton");
            const displayText = document.getElementById("displayText");

            displayButton.addEventListener("click", function() {
                const inputValue = inputField.value; // Retrieve the value of the input field
                displayText.innerText = "You entered: " + inputValue; // Display the value in the paragraph
            });

// 9. Create an HTML element with some text that includes HTML tags. Write two JavaScript functions:
// one that retrieves the innerHTML and one that retrieves the textContent of the element, and display
// these values elsewhere on the page.
const contentElement = document.getElementById("contentElement");
            const innerHTMLButton = document.getElementById("getInnerHTML");
            const textContentButton = document.getElementById("getTextContent");

            const innerHTMLResult = document.getElementById("innerHTMLResult");
            const textContentResult = document.getElementById("textContentResult");

            innerHTMLButton.addEventListener("click", function() {
                const innerHTML = contentElement.innerHTML; // Retrieve innerHTML
                innerHTMLResult.innerText = "innerHTML: " + innerHTML; // Display innerHTML value
            });

            textContentButton.addEventListener("click", function() {
                const textContent = contentElement.textContent; // Retrieve textContent
                textContentResult.innerText = "textContent: " + textContent; // Display textContent value
            });

// 10. Write a JavaScript program that automatically updates the content of an element every second,
// displaying the current time.

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    document.getElementById("clock").innerText = timeString;
}

// Initial call to display the clock immediately when the page loads
updateClock();

// Update the clock every second (1000 milliseconds)
setInterval(updateClock, 1000);