
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
// var headerTitle=document.getElementById("header-title");
// var header=document.getElementById("main-header");
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
// var itemlist=document.querySelector('#items');
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


//siblings
// console.log(itemlist.nextSibling);

// console.log(itemlist.nextElementSibling);

//previos sibling
// console.log(itemlist.previousSibling);
// console.log(itemlist.previousElementSibling);
// itemlist.previousElementSibling.style.color='green';

//creating and inserting elemnts

//create element
//create div

// var newDiv=document.createElement('div');
// newDiv.className='hello';
// newDiv.id='hello1';
// newDiv.setAttribute('title','hello-div');

//create textnode
// var newDivText=document.createTextNode('new world');

//adding newDivText to newDiv
// newDiv.appendChild(newDivText);
// console.log(newDiv);


///insert into DOM
// var container=document.querySelector('header .container');
// var h1=document.querySelector('header h1');

// newDiv.style.fontSize='30px';


// container.insertBefore(newDiv,h1);

//dom 3

//event listner
// var button=document.getElementById('button').addEventListener('click',buttonClick);
// var button=document.getElementById('button').addEventListener('click',function(){
    // console.log('123');
// });//function definedd in event listner or hav a named function
// function buttonClick(){
//     console.log('button');
//     document.getElementById('header-title').textContent='changed';
//     document.querySelector('#main').style.backgroundColor='#f4f4f4';
// }
//passing event parameter
// function buttonClick(e){
 
// console.log(e);
// console.log(e.target);
// console.log(e.target.id);
// console.log(e.target.className);
// console.log(e.target.classList);

// var output=document.getElementById('output');
// output.innerHTML='<h3>'+e.target.id+'</h3>'

// console.log(e.type);

// console.log(e.offsetX)
// console.log(e.altKey);
// console.log(e.ctrlKey);
// console.log(e.shiftKey);
// }


//varios click events
// var button=document.getElementById('button');
// var box=document.getElementById('box');


// button.addEventListener('click',runEvent);
// button.addEventListener('dblclick',runEvent);
// button.addEventListener('mousedown',runEvent);
// button.addEventListener('mouseup',runEvent);

// box.addEventListener('mouseenter',runEvent);
// box.addEventListener('mouseleave',runEvent);

// box.addEventListener('mouseover',runEvent);
// box.addEventListener('mouseout',runEvent);

box.addEventListener('mousemove',runEvent);


function runEvent(e){
    console.log('EVENT TYPE: '+e.type);

    // output.innerHTML='<h3>MouseX: '+e.offsetX+'</h3><h3>MouseY: '+e.offsetY+'</h3>';


    document.body.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",40)";
}



