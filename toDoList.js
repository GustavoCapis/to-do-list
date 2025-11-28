const addButton = document.querySelector("#addBtn");

const themeButton = document.querySelector(".themeBtn");

const input = document.querySelector("#itemInput");

const list = document.querySelector("#shoppingList");

const emptyMsg = document.querySelector("#emptyMsg");

// --------------------------------------- FUNCTIONS  -------------------------------------
//create list item content
function createListItem(text) {
  const listItem = document.createElement("li");
  listItem.classList.add("listItem");

  const textSpan = document.createElement("span");
  textSpan.classList.add("item");
  textSpan.textContent = text;

  const deleteBtn = createDeleteBtn();

  listItem.append(textSpan);

  listItem.append(deleteBtn);

  addCheckBox(listItem);

  return listItem;
}

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
}

//empty list message visibility
function updateEmptyMsg() {
  list.children.length === 0
    ? (emptyMsg.hidden = false)
    : (emptyMsg.hidden = true);
}

//add item to list
function addItem() {
  if (input.value.trim() === "") {
    window.alert("You must write something first!");
    input.focus();
    return; //empty return STOPS the function!
  }

  const newItem = createListItem(input.value);
  list.append(newItem);
  input.value = ""; //clears the input

  updateEmptyMsg();
}

//add checkbox to each item function
function addCheckBox(listItem) {
  const checkbox = document.createElement("button");
  checkbox.classList.add("checkBox");
  listItem.prepend(checkbox);

  return checkbox;
}

//checkbox interactions with the item function
function clickCheckBox(checkbox, listItem) {
  const isChecked = checkbox.classList.toggle("checked");
  const itemText = listItem.querySelector(".item");
  const html = document.querySelector('html');

  if (isChecked) {
    checkbox.textContent = "✔";
    if (!html.classList.contains("dark-mode")) {
      checkbox.style.backgroundColor = "var(--color-themeBtn-hover)";
      itemText.style.color = "var(--color-input-background)";
    } else {
      checkbox.style.backgroundColor = "#261d55";
      itemText.style.color = "#b4aaccff";
    };

    itemText.style.textDecoration = "line-through";

  } else {
    checkbox.style.backgroundColor = "transparent";
    checkbox.textContent = "";

    itemText.style.textDecoration = "none";
    itemText.style.color = ''; //reset to CSS parameters 
  }

  return isChecked;
}

//change theme function
function changeTheme() {
  const html = document.querySelector("html");
  html.classList.toggle("dark-mode");

  const themeBtnIcon = document.querySelector(".themeBtnIcon");
  if (html.classList.contains("dark-mode")) {
    themeBtnIcon.src = "assets/imgs/sun-icon.png";
  } else {
    themeBtnIcon.src = "assets/imgs/moon-icon.png";
  }
}

//event delegation function
function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) callback(e);
  });
}
//----------------------------------    EVENTS   -----------------------------------------
themeButton.addEventListener("click", changeTheme);
//add item button event
addButton.addEventListener("click", addItem);

//add item on Enter key
input.addEventListener("keydown", (e) => {
  console.log("tecla pressionada", e.key);
  if (e.key === "Enter") {
    addItem();
  }
});

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

//check item button event
addGlobalEventListener("click", ".checkbox", (e) => {
  const checkbox = e.target;
  const listItem = checkbox.parentElement;

  clickCheckBox(checkbox, listItem);
});
