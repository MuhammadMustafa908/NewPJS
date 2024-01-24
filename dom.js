// ID NAME

let elem = document.getElementById('second');
// console.log(elem);

// elem.innerHTML = "AN APPLE A DAY";
elem.textContent= "AN APPLE A DAY";
elem.style.backgroundColor = "yellow";
elem.style.textAlign = "center";
elem.style.padding = "20px";
elem.classList.add('two');
elem.classList.add('one');
elem.id = "three";
elem.classList.remove('two');


// CLASS NAME
let myDiv = document.getElementsByClassName('container')
myDiv[0].innerHTML = "BATCH CODE";
myDiv[0].style.backgroundColor = "purple";
myDiv[0].style.color  = "white";
myDiv[0].style.fontSize = "40px";
myDiv[0].classList.add("world");
myDiv[0].id = "pencil";
myDiv[0].style.textAlign = "center";


let newElem = document.createElement('p');

myDiv[0].appendChild(newElem);
newElem.innerHTML = "WOW";

let pencil = document.createElement("img");
newElem.appendChild(pencil);
pencil.src = "https://akm-img-a-in.tosshub.com/sites/visualstory/wp/2024/01/babar-azam-7-4_675_675.jpg?size=*:900"





