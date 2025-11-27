const addButton = document.querySelector("#addBtn");

const input = document.querySelector("#itemInput");

const list = document.querySelector("#shoppingList");

const emptyMsg = document.querySelector("#emptyMsg");

// --------------------------------------- FUNCTIONS  -------------------------------------
//create list item content
function createListItem(text) {
  const listItem = document.createElement("li");
  listItem.classList.add("listItem");

  listItem.textContent = text;

  const deleteBtn = createDeleteBtn();

  listItem.append(deleteBtn);

  return listItem;
};

//create delete button aside list item
function createDeleteBtn() {
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("deleteBtn");

  const deleteBtnIcon = document.createElement("img");
  deleteBtnIcon.classList.add("deleteBtnIcon");
  deleteBtnIcon.src = "assets/imgs/trash-icon.png";
  deleteBtnIcon.alt = "trash-icon";

  deleteBtn.append(deleteBtnIcon);

  return deleteBtn;
};

//Empty list message visibility
function updateEmptyMsg() {
  list.children.length === 0 ? emptyMsg.removeAttribute("hidden") : emptyMsg.setAttribute("hidden");
};

//Add item to list
function addItem() {
  const newItem = createListItem(input.value);
  list.append(newItem);
  input.value = ''; //clears the input

  updateEmptyMsg();
};

//event delegation function
function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) callback(e);
  });
}
    //----------------------------------    EVENTS   -----------------------------------------


//add item button event
addButton.addEventListener("click", addItem);

//delete item button event
addGlobalEventListener("click", ".deleteBtnIcon", (e) => {
  e.target.closest("li").remove();
  updateEmptyMsg();
});

//change trash icon to red on mouse over
addGlobalEventListener("mouseover", ".deleteBtnIcon", (e) => {
  e.target.src = "assets/imgs/trash-icon-red.png";
});

//change trash icon to black on mouse out
addGlobalEventListener("mouseout", ".deleteBtnIcon", (e) => {
    e.target.src = "assets/imgs/trash-icon.png";
});

