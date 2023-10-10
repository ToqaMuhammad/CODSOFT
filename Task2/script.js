const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const clearButton = document.getElementById("clear-button");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let editButton = document.createElement("span");
    editButton.innerHTML = "\u270D";
    editButton.classList.add("edit");
    li.appendChild(editButton);

    let deleteButton = document.createElement("span");
    deleteButton.innerHTML = "\u00d7";
    deleteButton.classList.add("delete");
    li.appendChild(deleteButton);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.classList.contains("edit")) {
    let newText = prompt("Edit task:", e.target.parentElement.firstChild.textContent);
    if (newText !== null) {
      e.target.parentElement.firstChild.textContent = newText;
      saveData();
    }
  } else if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
    saveData();
  }
}, false);

/* clearButton.addEventListener("click", function () {
  listContainer.innerHTML = "";
  localStorage.removeItem("data");
}); */

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();