let elem = document.getElementsByClassName('container');
elem[0].innerHTML = "BABAR AZAM! ";

let newBtn = document.createElement('button');
elem[0].appendChild(newBtn);

newBtn.innerHTML = "CLICK HERE!";
newBtn.className = "btn btn-dark px-6 fw-bold";
newBtn.style.letterSpacing = "6px";

// EVENTS

newBtn.addEventListener('click' , six);
    function six(){
        console.log("Century Complete💯 ");
        newBtn.innerHTML = "CENTURY IS LOADING🏏";
    }


let key = document.createElement('input');
elem[0].appendChild(key);

key.classList = "form-control mt-3"

key.addEventListener('keyup' , No);
    function No(){
        console.log("56");
    }
    



























// let down = document.getElementsByClassName('container');
// down[0].innerHTML = "HELLO WORLD";

// let newBtn = document.createElement('button');

// down[0].appendChild(newBtn);

// newBtn.innerHTML = "Click Here!"
// newBtn.className = "btn btn-dark px-5 fw-bold";
// newBtn.style.letterSpacing = "2px";


// // EVENTS

// newBtn.addEventListener('Click' , hello);
//     function hello(){
//         console.log("YOU CLICKED ON ME!");
//         newBtn.innerHTML = "WOW!"
//     }

//     let newInp = document.createElement('input');
//     down[0].appendChild(newInp)
//     newInp.className = "form-control mt-5";

//     newInp.addEventListener('keyup' , one);
//     function one(){
//         console.log("done");
//     }