let currentTodoItems = ["walk the dog", "Take out trash"];

let tableElement = document.getElementById("table-items");

window.onload = showTodoItems(currentTodoItems);

let navLinks = document.getElementById("nav-links").querySelectorAll("li");
navLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
  });
});

function showTodoItems(todoItems) {
  tableElement.innerHTML = "";

  if (todoItems.length <= 0) {
    return (tableElement.innerHTML = "List is empty!");
  }

  for (let i = 0; i < todoItems.length; i++) {
    let newTodoItems = document.createElement("tr");
    newTodoItems.innerHTML = `
    <td>Item ${i + 1}</td>
    <td>${todoItems[i]}</td>
    <td><a href="#" class = "del-item" data-index = "${i}"><i class="material-icons">delete</i></a></td>
    `;
    tableElement.appendChild(newTodoItems);
  }
  let deleteLinks = document.querySelectorAll(".del-item");
  deleteLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      let index = parseInt(link.getAttribute("data-index"));
      deleteItem(index);
    });
  });
}

function addItems() {
  let newItem = document.getElementById("new-item");
  currentTodoItems.push(newItem.value);
  newItem.value = "";
  showTodoItems(currentTodoItems);
  return false;
}

function deleteItem(index) {
  currentTodoItems.splice(parseInt(index), 1);
  showTodoItems(currentTodoItems);
  console.log(currentTodoItems);
}
