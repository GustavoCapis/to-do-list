const addButton = document.querySelector("#addBtn");
const input = document.querySelector("#itemInput");
const list = document.querySelector("#shoppingList");
const emptyMsg = document.querySelector("#emptyMsg");



//Add item function
addButton.onclick = () => {
  const item = document.createElement("p");
  item.textContent = input.value;

  const removeButton = document.createElement("button");
  removeButton.textContent = " X "

  item.append(removeButton);

  list.append(item);

  emptyMsg.toggleAttribute("hidden");
  
  //Remove item function
  removeButton.onclick = () => {
    item.remove();
  };
};



