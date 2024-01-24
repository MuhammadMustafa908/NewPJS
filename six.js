let heroes = ["Super Man" , "Bat Man" , "Spider Man" , "Hulk" , "Iron Man" , "Aqua Man"];
console.log(heroes);

// ARRAYS ARE MUTABLE
heroes[5] = "Aqua Man";
console.log(heroes);

// SPLICE METHOD
//  SPLICE METHOD first index ko target krky ussy pehly likhta h
console.log(heroes.splice(2,1,"WHY MAN" , "ACHA MAN"));
console.log(heroes);


let bbq = ["TIKKA" , "SEEKH KABAB" , "MALAI BOTI" , "CHAPLI KABAB" , "CHARGA"];
let seaFood = ["FISH" , "PRAWNS" , "LOBSTER"];
let sweetDish = ["CUSTARD" , "JELLY" , "ICE CREAM" , "GULAB JAMUN"];


let menu = bbq.concat(seaFood , sweetDish);
console.log(menu);

