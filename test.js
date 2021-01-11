
//console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.head);
// console.log(document.all);
// console.log(document.all[10]);
// document.all.textContent='hello';
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);


//selectors for queries in dom
var headerTitle=document.getElementById("header-title");
var header=document.getElementById("main-header");
// headerTitle.textContent="pitti";
// headerTitle.innerText="itti";

// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);

// headerTitle.innerHTML='<h3>hello</h3>;
// headerTitle.style.borderBottom='solid 3px black';
// header.style.borderBottom='solid 3px black';

//getting elemnts by class name//
// var items=document.getElementsByClassName('list-group-item');
// console.log(items);
// items[1].textContent='hell';
// items[1].style.fontWeight='bold';
//gives error
// items.style.backgroundColor='#f4f4f4';


// for (var i =0;i<items.length;i++){
//     items[i].style.backgroundColor='#f4f4f4';
// }

//get elemnts bt tag name
// var li=document.getElementsByTagName('li');
// console.log(li);
// li[3].textContent='hell';
// li[0].style.fontWeight='bold';

// for (var i =0;i<li.length;i++){
//     li[i].style.backgroundColor='#f4f4f4';
// }

// //query selector
// var header=document.querySelector('#main-header');
// header.style.borderBottom='solid 4px #c01';


// var input =document.querySelector('input');
// input.value='hello';

// //css pseudoclasses
// var submit=document.querySelector('input[type="submit"]');
// submit.value="send";

// var item=document.querySelector('.list-group-item');
// item.style.color='red';

// var lastitem=document.querySelector('.list-group-item:last-child');
// lastitem.style.color='blue';

// var seconditem = document.querySelector('.list-group-item:nth-child(2)');
// seconditem.style.color='coral';


//  query selector all

// var titles=document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent='helllo';

// var odd=document.querySelectorAll('li:nth-child(odd)');
// var even=document.querySelectorAll('li:nth-child(even)');

// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='#f4f4f4';
//     even[i].style.backgroundColor='#f1f111';
// }

//DOM 2 

//query parents,siblings,child
var itemlist=document.querySelector('#items');
//parent node property
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemlist.parentNode.parentNode);


//parent element
// console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundColor='#f4f4f4';
// console.log(itemlist.parentElement.parentElement);


// childe nodes
// console.log(itemlist.childNodes);
// console.log(itemlist.children);

// console.log(itemlist.children[1]);
// itemlist.children[1].style.backgroundColor='yellow';

//firstchild= gives the line break
// console.log(itemlist.firstChild);

//first element child= only consider the tag elemnt
// console.log(itemlist.firstElementChild);

//firstchild= gives the line break
// console.log(itemlist.lastChild);

//first element child= only consider the tag elemnt
// console.log(itemlist.lastElementChild);



