 //using Queryselector//
   
    
// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
//   secondItem.style.backgroundColor = 'green';

//   var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
//    thirdItem.style.color = 'white';

// using Queryselector all//
var titles = document.querySelectorAll('.list-group-item');
   console.log(titles);
   
   titles[1].style.color='green';  

  var odd= document.querySelectorAll('li:nth-child(odd)');
 for(var i=0; i<odd.length;i++){
     odd[i].style.backgroundColor = 'green';
}