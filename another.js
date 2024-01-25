let down = document.getElementsByClassName('container');
down[0].innerHTML = "HELLO WORLD";

let newBtn = document.createElement('button');

down[0].appendChild(newBtn);

newBtn.innerHTML = "Click Here!"
newBtn.className = "btn btn-dark px-5 fw-bold";
newBtn.style.letterSpacing = "2px";


// EVENTS

newBtn.addEventListener('Click' , hello);
    function hello(){
        console.log("YOU CLICKED ON ME!");
        newBtn.innerHTML = "WOW!"
    }

    let newInp = document.createElement('input');
    down[0].appendChild(newInp)
    newInp.className = "form-control mt-5";

    newInp.addEventListener('keyup' , one);
    function one(){
        console.log("done");
    }