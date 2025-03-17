// const val = document.querySelector('li').value = 'javaScript';
// // console.log(val)
// document.querySelector('li').style.color = 'red';


const requesturl = "https://api.github.com/users/techsithgit";

const xhr = new XMLHttpRequest();
xhr.open('GET', requesturl)
xhr.onreadystatechange = function () {
    // console.log(xhr.readyState);
    if (xhr.readyState === 4) {
        const data = JSON.parse(xhr.responseText);
        console.log(data.followers);
        // console.log(this.status);
    }
}
xhr.send();

// ----------Dom(Document Object Model) start Learning all ----------------------------------

const idselector = document.getElementById('food-id').innerHTML = "<h3>Hello my Name Is Bablu<h3>"

// document.getElementById('firstLi').id :>> for id
// document.getElementById('firstLi').className :>> for className
// document.getElementById('firstLi').class :>> output is undefined

// document.getElementById('firstLi').getattribute('id') :>> for get attribute
// document.getElementById('firstLi').setattribute('class', 'new-class') :>> for set attribute

const firstli = document.getElementById('firstLi')
firstli.style.background = 'green';
firstli.style.color = 'red';

//----------------- ishshe content nikalne ke liye --------------------
//idselector.textContent //   ye hide  content  ko bhi show karega
// similar 
//idselector.innerHTML  // HTML content ko show karega
//idselector.innerText //  ye hide content ko show nahi karega karega


document.querySelector('input[type="text"]')
// ---------------------ul to li --------------------
const myul = document.querySelector('ul');
 const turncolor = myul.querySelector('li')
//  turncolor.style.color = 'red';
//tuncolor.innerText;

// -------------------- Nodelist------------------------
//array jaisa hai but  hai nahi 
const items = document.querySelectorAll('li');
const Hone = document.querySelectorAll('h1');
// items[0].style.color = 'green';
// Hone.forEach(function(h){h.style.color = 'red';
// h.style.backgroundColor = 'black';
// h.style.padding = '10px';})


//-----foreach mai call back function lagta hai----------------

items.forEach( function(l){
    l.style.backgroundColor='   #f4f4f4';
})

//--------nodelist ke upar map use karna hai to "convert" karna Padega na----------
//const tempclasslist = document.getElementById('list-item')
 // ------html collection convert----------
Array.from(tempclasslist);


// -----------------Second parent and child selector-------------------

const parent = document.querySelector('.parent');
// console.log(parent.children);
// console.log(parent.children[1].innerHTML);
for (let i = 0; i < parent.children.length; i++) {
    // console.log(parent.children[i].innerHTML);
}
parent.children[1].style.color = 'orange';

// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);
 
//console.log("NODES: ", parent.childNodes);




