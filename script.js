// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Change text content dynamically
    const myParagraph = document.getElementById("myParagraph");
    myParagraph.textContent = "The paragraph text has been changed!";

    // Modify CSS styles via JavaScript
    const mySpan = document.getElementById("mySpan");
    mySpan.style.color = "red";
    mySpan.style.fontWeight = "bold";

    // Add element when button is clicked
    const addButton = document.getElementById("addButton");
    addButton.addEventListener("click", function () {
        const newListItem = document.createElement("li");
        newListItem.textContent = "New list item added!";
        document.getElementById("myList").appendChild(newListItem);
    });

    // Remove element when button is clicked.
    const removeButton = document.getElementById("removeButton");
    removeButton.addEventListener("click", function () {
        const myList = document.getElementById("myList");
        if (myList.children.length > 0) {
            myList.removeChild(myList.lastElementChild);
        }
    });

    // Change the background color of the aside paragraph.
    const asideParagraph = document.getElementById("asideParagraph");
    asideParagraph.style.backgroundColor = "lightgreen";

});