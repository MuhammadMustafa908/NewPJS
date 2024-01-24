let userName = prompt("Enter Your Name");
console.log(userName);

let ENG = parseInt(prompt("Enter Your ENG Numbers"));
let URDU = parseInt(prompt("Enter Your URDU Numbers"));
let MATH = parseInt(prompt("Enter Your MATH Numbers"));
let ISL = parseInt(prompt("Enter Your ISL Numbers"));
let PST = parseInt(prompt("Enter Your PST Numbers"));

let obtainedMarks = ENG + URDU + MATH + ISL + PST;

// PER FORMULA 
let per = obtainedMarks/500*100
console.log(per);

if(per>=90 && per<=100){
    console.log("Your Grade is A+1")
}
else if(per>=80 && per<=90){
    console.log("Your Grade is A+");
}
else if(per>=70 && per<=80){
    console.log("Your Grade is A ");
}
else if(per>=60 && per<=70){
    console.log("Your Grade is B");
}
else if(per>=50 && per<=60){
    console.log("Your Grade is C");
}
else if(per>=40 && per<=50){
    console.log("Your Grade is D");
}
else{
    console.log("You are Failed❌.....(SORRY)");
}






