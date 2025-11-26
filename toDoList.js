const addButton = document.querySelector("#addBtn");
const input = document.querySelector("#itemInput");
const list = document.querySelector("#shoppingList");
const emptyMsg = document.querySelector("#emptyMsg");

//Add item function
addButton.onclick = () => {
  const item = document.createElement("p");
  item.textContent = input.value;

  const removeButton = document.createElement("button");
  removeButton.classList.add("removeBtn");

  //add trash icon
  const icon = document.createElement("img");
  icon.classList.add("removeBtnIcon");
  icon.src = "assets/imgs/trash-icon.png";
  icon.alt = "trash-icon";

  removeButton.append(icon);
  item.append(removeButton);
  list.append(item);

  emptyMsg.toggleAttribute("hidden");

  //Remove item function
  removeButton.onclick = () => {
    item.remove();
  };
};

//event delegation function
function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) callback(e);
  });
}

//change trash icon to red on mouse over
addGlobalEventListener("mouseover", ".removeBtnIcon", (e) => {
  e.target.src = "assets/imgs/trash-icon-red.png";
});

//change trash icon to black on mouse out
addGlobalEventListener("mouseout", ".removeBtnIcon", (e) => {
    e.target.src = "assets/imgs/trash-icon.png";
});


