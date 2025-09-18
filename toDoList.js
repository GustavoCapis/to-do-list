const button = document.getElementById("button");
const input = document.getElementsByClassName("form-input")[0];
const list = document.getElementById("list");
const form = document.getElementById("form");

button.addEventListener("click", click);


function click() {
  list.innerHTML += `
  <li class="task">
    <p class="content">
      ${input.value} 
      <button class="checkmark">&#10003</button>
    </p>
  </li>
  `;
  form.reset();
}

function checkItem() {
  const checkmark = document.getElementById("checkmark");

  checkmark.addEventListener("click", checkItem);

}