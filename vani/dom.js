// //console.dir(document);
// //examine the document object//

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title=123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// //document.all[10].textContent= 'Hello';
// console.log(document.forms);
// console.log(document.links);

//console.log(document.images);

//get element by id
//console.log(document.getElementById('header-title'));
var headerTitle=document.getElementById('header-title');
var header=document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent = 'Hello';
//headerTitle.innerText = 'Goodbye';
//console.log(headerTitle.innerText);
//headerTitle.innerHTML = '<h3>Hello<h3>';

 
header.style.borderBottom ='solid 3px black';
var title=document.getElementById('title');
 title.style.color ='green';
 title.style.fontWeight ='bold';

//get elements by classname

 //var items =document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[0].textContent = 'Hello 2';
 //items[0].style.fontWeight = 'bold';
 //items[0].style.color = 'yellow';

//  var items =document.getElementsByClassName('title');
//  items[0].style.color='green';
// items[0].style.innerText='bold';
// for(var i=0; i< items.length;i++){
//     items[i].style.backgroundColor ='grey';
// }

//get elements by tag names
// var li =document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// for(var i=0; i< li.length;i++){
//    li[i].style.backgroundColor ='grey';
// }

//queryselector//
 //var header = document.querySelector('#main-header');
 //header.getElementsByClassName.borderBottom = 'solid 4px #ccc';
//  var input = document.querySelector('input');
//  input.value = 'Hello world'

//  var submit = document.querySelector('input[type="submit"]');
//  submit.value="SEND"

//  var item = document.querySelector('.list-group-item');
//  item.style.color = 'red';

//  var LastItem = document.querySelector('.list-group-item:last-child');
//  LastItem.style.color = 'blue';

//  var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

//queryselectorall//
 //var titles = document.querySelectorAll('#title');
 //console.log(titles);
 //titles[0].style.text = 'bold';
 //titles[0].style.fontColor ='green';
 

// var odd= document.querySelectorAll('li:nth-child(odd)');
// var even= document.querySelectorAll('li:nth-child(even)');

// for(var i=0; i<odd.length;i++){
//     odd[i].style.backgroundColor = 'darkgrey';
//     even[i].style.backgroundColor = 'grey';
// }