
addEventListener("DOMContentLoaded", button);

    /* OBJECTIVE 1 */

    function button() {
    let button = document.createElement("button");
    let buttonText = document.createTextNode("Submit");
    button.appendChild(buttonText);
    document.body.appendChild(button);
    button.addEventListener("click", function() {
        alert("You are a sweet soul")
    })
}


/* OBJECTIVE 2 */
let buttonOne = document.getElementById("submitBtn");
buttonOne.addEventListener("click", click);
function click() {
    let message = document.getElementById("textBox").value;
    alert(message);
}


/* OBJECTIVE 3 */
let div = document.getElementById("me");
div.addEventListener("mouseenter", function() {
    div.style.backgroundColor = "powderblue";
})
div.addEventListener("mouseleave", function() {
    div.style.backgroundColor = "";
})


/* OBJECTIVE 4 */
let p = document.getElementById("p");
p.addEventListener("click", function() {
    let allchar = "0123456789ABCDEF";
    let randcol = "";
    for (let i = 0; i < 6; i++) {
        randcol += allchar[Math.floor(Math.random() * 16)];
    }
    p.style.color = "#" + randcol;
})


/* OBJECTIVE 5 */
let buttonTwo = document.getElementById("btn");
let divOne = document.getElementById("span");
buttonTwo.addEventListener("click", function() {
    let span = document.createElement("span");
    divOne.appendChild(span);
    let text = document.createTextNode("Luke Stephens");
    span.appendChild(text);
})

/* OBJECTIVE 6 */

let friends = ['jack', 'morgan', 'prim', 'jackson', 'noah', 'kaleb', 'clayton', 'jenna', 'jonathon', 'joe'];
let buttonThree = document.getElementById("btnTwo");
let ul = document.getElementById("ul");
buttonThree.addEventListener("click", function () {
    for (let i = 0; i < friends.length; i++) {
        let li = document.createElement("li");
        let name = document.createTextNode(friends[i]);
        li.appendChild(name);
        ul.appendChild(li);
    }
});

