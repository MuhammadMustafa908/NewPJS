//  ARRAY

let fruits = ["mango" , "apple" , "orange" , "banana"];
console.log(fruits);
console.log(fruits.length);

// METHOD OF AN ARRAY
// PUSH LAST INDEX ME  ADD KARTA HAI
console.log(fruits.push("Pine apple"));
console.log(fruits);

// POP LAST INDEX KO REMOVE KARTA HAI
console.log(fruits.pop(""));
console.log(fruits);

// SHIFT FIRST INDEX KO REMOVE KARTA HAI
console.log(fruits.shift(""));
console.log(fruits);

// UNSHIFT FIRST INDEX MAI ADD KARTA HAI
console.log(fruits.unshift("KIWI"));
console.log(fruits);

// SLICE (ek particular position apko laa ke deta hai first value target index like second jahan tk elements hain{1,5})!
// (Second value me apne jo last value di hai to wo us se ek phele wale tk apko elelments laa ke deta hai)!
// (agar 5 diya hai second index me to wo apko 4 tak ki values laa kr degaa)!




// ["mango" , "apple" , "orange" , "banana"];

console.log(fruits.slice("1,4"));
console.log(fruits);





