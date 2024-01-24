console.log("Welcome to pjs");
console.log("Hello World");

// DATA TYPE

name = "Mustafa";  //STRING
num = 80;  // NUMBER
x = "undefined";  // undefined
y = "null";  //NULL
boolean = "true";  // TRUE , FALSE

console.table(name , num , x , y ,boolean);

// we have two kinds of data types 

//  1) Primitive Data Type : STRING,NUM,BOOLEAN etc
//  2) Non Primitive Data Type : Array object Function etc 

let obj ={
    name : "Asad",
    age : 20,
    grade : "A",
    phone : 25648,
    city : "karachi"

}

// First Method to getting values of an object
console.log(obj["name"]);
console.log(obj["city"]);

// Second Method to getting values of an object

console.log(obj.grade);

// For in Loop

for(let i in obj){
    console.log( i , obj[i])
}


