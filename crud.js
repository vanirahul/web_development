let itemList = [];
 
const name = document.getElementById("name");
const description = document.getElementById("description");
const price = document.getElementById("price");
const quantity = document.getElementById("quantity");
const submit = document.getElementById("submit");
const list = document.getElementById("list");

const apiFail = () => {
  alert("crud api expired");

};

const clickBuyBtn = (e) => {
    
    const key = e.target.getAttribute("data-id");
    const quantity = e.target.getAttribute("data-q");
    const type = e.target.getAttribute("data-type");


    if(quantity-type>=0){
      const row = itemList.find(val => val._id === key);
      const data ={
        name:row.name,
        description:row.description,
        price:row.price,
        quantity:row.quantity-type
      };
      editData(key,data, render, apiFail)
    }else{
      alert("out of stock")
    }
    
}

 
//to fetch and display data from web use render function
const render = () => {

  getAllData(function (response) {
    itemList = response.data;
    list.innerHTML = "";

    for (var row of itemList) {
      var li = document.createElement("li");
      li.innerText = JSON.stringify(row);

      const buy1 = document.createElement("button");
      buy1.className = "buy1-btn";
      buy1.innerText = "Buy 1";
      buy1.setAttribute("data-id", row._id);
      buy1.setAttribute("data-q", row.quantity);
      buy1.setAttribute("data-type",  "1");
      buy1.addEventListener("click", clickBuyBtn);

      const buy2 = document.createElement("button");
      buy2.className = "buy2-btn";
      buy2.innerText = "Buy 2";
      buy2.setAttribute("data-id", row._id);
      buy2.setAttribute("data-q", row.quantity);
      buy2.setAttribute("data-type",  "2");
      buy2.addEventListener("click", clickBuyBtn);

      const buy3 = document.createElement("button");
      buy3.className = "buy3-btn";
      buy3.innerText = "Buy 3";
      buy3.setAttribute("data-id", row._id);
      buy3.setAttribute("data-q", row.quantity);
      buy3.setAttribute("data-type",  "3");
      buy3.addEventListener("click", clickBuyBtn);



      li.appendChild(buy1);
      li.appendChild(buy2);
      li.appendChild(buy3);


      list.appendChild(li);
    }
  });

}

const addItem = () => {
  if (
    name.value !== "" &&
    description.value !== "" &&
    price.value !== "" &&
    quantity.value !== ""
  ) {
    data = {
      name:name.value,
      description:description.value,
      price: price.value,
      quantity:quantity.value
    };
    console.log(data);

     
    saveData(data, render, apiFail)
     
    name.value = "";
    description.value = "";
    price.value = "";
    quantity.value = "";


  } else {
    alert("No data entered");
  }
}
const api = "https://crudcrud.com/api/58b44eb0716240eaa53d4cded731e8a6";
const done = () => document.getElementById("load").style.display = "none";
const start = () => document.getElementById("load").style.display = "block";

//render();

const getAllData = (pass, fail) => {
  start();
  axios.get(api + "/vani")
    .then(pass).catch(fail).finally(done)

}

const saveData = (data, pass, fail) => {
  start();
  axios.post(api + "/vani", data)
    .then(pass).catch(fail).finally(done)
}

const deleteData = (id, pass, fail) => {
  start();
  axios.delete(api + "/vani/" + id)
    .then(pass).catch(fail).finally(done)

}

const editData = (id, data, pass, fail) => {
  start();
  axios.put(api + "/vani/" + id, data)
    .then(pass).catch(fail).finally(done)
}



