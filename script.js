/* Task 1 */
var heading = document.getElementById("heading");
console.log(heading.innerText);


/* Task 2 using plain JavaScript */
// Task 2a
function addText () {
    var task2div = document.getElementById("task2a");
    var paragraph = document.createElement('p');
    paragraph.innerText = "Hello World";
    task2div.appendChild(paragraph);
}

var textBin = document.getElementById("textBtn2a");
textBin.addEventListener("click", addText);

// Task 2b
function changeBColor(event) {
    var body = document.getElementsByTagName('body')[0];
    if (event.target.innerText == "Red") {
        body.style.backgroundColor = 'red';
    }
    if (event.target.innerText == "Green") {
        body.style.backgroundColor = 'green';
    }
}

// Task 2c
function redirectToGoogle () {
    window.location.assign('https://www.google.com');
}


/* Task 4 using jQuery */
