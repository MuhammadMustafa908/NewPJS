// GAME

let gameNum = 56;
let userNum = prompt("Enter your Number!");
while(userNum != gameNum){
    userNum = prompt("You guess the wrong number : Guess again")

}

swal({
    title: "Auto Close Alert!",
    text: "You Win The Game.",
    timer: 5000

});