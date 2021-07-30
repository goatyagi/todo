const button = document.getElementById("add")

add.addEventListener("click",()=>{
const input = document.getElementById("input");
const list = document.createElement("div");
list.textContent =　input.value;
const remove = document.createElement("input");
remove.type = "button"
remove.value = "削除";
list.appendChild(remove);
remove.addEventListener("click",()=>{
const list=remove.closest("div");
list.remove();
});

const div = document.getElementById("todo");
div.appendChild(list);
});
