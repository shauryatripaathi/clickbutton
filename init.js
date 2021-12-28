let container = document.getElementById("container");
let btn = document.createElement("button");
btn.id = "btn";
btn.innerHTML = "click me"
container.append(btn);

let box = document.createElement("div");
box.id = "box";
container.append(box);

let itemUl = document.createElement("ul");
itemUl.id = "itemUl";
box.appendChild(itemUl);

let itemNumber=0;
btn.addEventListener("click",handleOnClick);
function handleOnClick(){
    itemNumber++;
    let itemLi = document.createElement("li");
    itemUl.appendChild(itemLi);
    itemLi.innerText = `item ${itemNumber}`;
}
