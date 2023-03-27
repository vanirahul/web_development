var itemList = JSON.parse(localStorage.getItem("data")) || [];

var description = document.getElementById("description");
var category = document.getElementById("category");
var expence = document.getElementById("expence");
var submit = document.getElementById("submit");
var list = document.getElementById("list");

function clickDelBtn(e) {
  if (confirm("Are you sure?") === true) {
    var key = e.target.getAttribute("data-val");
    console.log(key);
    itemList = itemList.filter(function (val) {
      return val.description !== key;
    });

    saveInLocal();
    render();
  }
}

function clickEditBtn(e) {
  var key = e.target.getAttribute("data-val");
  console.log(key);

  var row = itemList.find(function (val) {
    return val.description === key;
  });

  itemList = itemList.filter(function (val) {
    return val.description !== key;
  });

  description.value = row.description;
  expence.value = row.expence;
  category.value = row.category;

  saveInLocal();
  render();
}

function render() {
  list.innerHTML = "";

  for (var row of itemList) {
    var li = document.createElement("li");
    li.innerText = JSON.stringify(row);

    var delBtn = document.createElement("button");
    delBtn.className = "delete-btn";
    delBtn.innerText = "Delete";
    delBtn.setAttribute("data-val", row.description);
    delBtn.addEventListener("click", clickDelBtn);

    var editBtn = document.createElement("button");
    editBtn.className = "edit-btn";
    editBtn.innerText = "Edit";
    editBtn.setAttribute("data-val", row.description);
    editBtn.addEventListener("click", clickEditBtn);

    li.appendChild(delBtn);
    li.appendChild(editBtn);

    list.appendChild(li);
  }
}

render();

function saveInLocal() {
  localStorage.setItem("data", JSON.stringify(itemList));
}

function addItem(e) {
  if (
    expence.value !== "" &&
    category.value !== "" &&
    description.value !== ""
  ) {
    data = {
      expence: expence.value,
      category: category.value,
      description: description.value,
    };
    console.log(data);
    itemList.push(data);

    saveInLocal();
    render();
  } else {
    alert("No data entered");
  }
}

 