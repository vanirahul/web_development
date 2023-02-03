// //parentelement//
// console.log(itemList.parentElement);
//  itemList.parentElement.style.backgroundColor = '#f4f4f4';

//  console.log(itemList.parentElement.parentElement.parentElement);

//  //lastelementchild
//  console.log(itemList.lastElementChild);
//  itemList.lastElementChild.textContent =' hello 4';

//  //lastchild
//  console.log(itemList.lastChild);

//  //childnodes
// console.log(itemList.childNodes);

// //firstelementchild
// console.log(itemList.firstElementChild);
//  itemList.firstElementChild.textContent =' hello 1';

//  //firstchild
// console.log(itemList.firstChild);

// //nextSibling
// console.log(itemList.nextSibling);

// // nextelementsibling
// console.log(itemList.nextElementSibling);

// //previoussibling
// console.log(itemList.previousSibling);

// //previouselementsibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

// //createlement//

//creat a div
var newDiv = document.createElement('div');

//Add attribute
newDiv.setAttribute('title', 'Hello Div');

//creat textnode
var newDivText = document.createTextNode('HEllo');

//add text to div
newDiv.appendChild(newDivText);
 var container = document.querySelector('header .container');
 var h1 = document.querySelector('header h1');

 console.log(newDiv);

newDiv.style.fontSize = '30px';

 container.insertBefore(newDiv,h1);

 
