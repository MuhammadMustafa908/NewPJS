// FOR LOOP

for(let a=0; a<=10; a++){
    console.log("THIS IS FOR LOOP" , a);
}

// WHILE LOOP 

let num = 15;

while(num<=20){
    console.log("THIS IS WHILE LOOP" , num);
    num++;
}

// DO WHILE LOOP

let i = 50;
do{
    console.log("THIS IS DO WHILE LOOP" , i)
    i++;
} while (i<=50);


//FOR IN LOOP

let obj = {
    name : "MIKE",
    age : 20,
    grade : "A+"
}

for(let z in obj){
    console.log(z , obj[z])
}

// Table
let number = prompt("ENTER YOUR VALUE");
for(let w=1; w<=10; w++){
    console.log("5x", w, "=",5*w );
}

// even odd
for(let s=0; s<=45; s++){
    if(s%2==0){
    console.log("This is an even number" , s);
}
else{
    console.log("This is an odd number" , s);
}
} 


// Table 2nd Method
// let mynumber = prompt("ENTER YOUR VALUE");
// for(let o=1; o<=10; o++){
//     console.log(`${mynumber} x ${o} = ${mynumber*o}`);
// }
    

// even odd  2nd Method
// for(let p=0; p<=45; p++){
//     if(p%2==0){
//     console.log(`${p} is EVEN`);
// }
// else{
//     console.log(`${p} is ODD`);
// }
// }
