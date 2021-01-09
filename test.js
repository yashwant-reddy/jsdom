
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
var items=document.getElementsByClassName('list-group-item');
console.log(items);
items[1].textContent='hell';
items[1].style.fontWeight='bold';
//gives error
// items.style.backgroundColor='#f4f4f4';


for (var i =0;i<items.length;i++){
    items[i].style.backgroundColor='#f4f4f4';
}

//get elemnts bt tag name





