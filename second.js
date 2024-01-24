// ARITHMETIC OPERTOR

let a = 30;

let b = 50;

console.log("The sum of a + b is :", a+b);
console.log("The sub of a - b is :", a-b);
console.log("The mul of a + b is :", a*b);
console.log("The div of a + b is :", a/b);
console.log("The modulus of a + b is :", a%b);

let z = 50;
// POST INCREMENT

console.log(z++); //z = z + 1 =>51
console.log(z); //51
// pre Increment
console.log(++z); // z = z + 1 =>51 + 1 => 52

z += 20;  //72

console.log(z); //72


let s = 50;
// POST DECREMENT

console.log(s--); //z = z - 1 =>49
console.log(s); //49
console.log(--s); // z = z + 1 =>49 - 1 => 48

s -= 20;  //48

console.log(s); //28

// LOGICAL OPERATOR
console.log("OR CASE")

console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log( !false || false); 

console.log("AND CASE")

console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log( !false && !false); 

// Comparison operator

// > // greater than
// < // less than
//  == equal
// === equal with type check