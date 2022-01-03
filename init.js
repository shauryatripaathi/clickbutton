let box = document.getElementById("box");
let enterText = document.getElementById("enterText");
let listUl = document.createElement("ul");
listUl.id = "listUl";
box.appendChild(listUl);

enterText.value = "";

btn.addEventListener("click", handleOnClick);
function handleOnClick() {
    if (enterText.value == "") {
        alert("type something")
    }
    else {
        let listLi = document.createElement("li");
        listLi.innerText = enterText.value;
        listUl.appendChild(listLi);

        let crossBtn = document.createElement("div");
        crossBtn.id = "crossBtn";
        crossBtn.innerText = "X";
        listUl.appendChild(crossBtn);

        function handleOnCross(){
            listLi.remove();
            crossBtn.remove();
        }
        crossBtn.addEventListener("click", handleOnCross);

    }
}
console.log(listUl);

let clearBtn = document.getElementById("clearBtn");
function handleClearBtn() {
    listUl.innerText = "";
}
clearBtn.addEventListener("click", handleClearBtn);

function enterTextClr() {
    enterText.value = "";
}
enterText.addEventListener("click", enterTextClr);

console.log(box.innerHTML);