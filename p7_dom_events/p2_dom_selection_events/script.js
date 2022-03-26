/////////////////////////
//// DOM Selection /////
///////////////////////
console.log(document.querySelector(".message").textContent);

// Changing the text content on the web page using the DOM
document.querySelector(".message").textContent = "Correct Number";
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 20;

// Need to use the 'value' property with an input field
document.querySelector(".guess").value = 15;
