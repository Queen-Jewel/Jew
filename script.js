var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var todoElements = document.querySelectorAll("#todo-item");

todoElements.forEach((item) => {
    item.addEventListener("click", ()=>{
        item.classList.toggle("done")
    })
})

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.which === 13) {
        createListElement();
    }
}
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
li.addEventListener("click", toggleList);


































// function inputLength() {
//     return input.value.length;
// }

// function createListElement() {
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li);
//     input.value = "";
// }

// function addListAfterClick() {
//     if (inputLength() > 0) {
//         createListElement();
//     }
// }

// function addListAfterKeypress(event) {
//     if (inputLength() > 0 && event.which === 13) {
//         createListElement();
//     }
// }

// button.addEventListener("click", addListAfterClick);
// input.addEventListener("keypress", addListAfterKeypress);
  