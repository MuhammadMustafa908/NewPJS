setTimeout(function(){
    console.log("HELLO WORLD");
},2000)

setInterval(function(){
    document.write("wow")
},2000)

// PROMISE
// Pormise One
let promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("THIS IS FIRST PROMISE")
    },3000)
})

// Promise Two
let promiseTwo = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({name : "Ali" , password : "12345"})
    },4000)
})

promiseTwo.then(function(user){
    console.log(user);
})

// Promise Three
let promiseThree = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({username : "Camel" , email : "camel@gmail.com"})
    },5000)
})
promiseThree.then(function(elec){
    return elec.email;
}).then(function(userEmail){
    console.log(userEmail)
})

// Promise Four
let promiseFour = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = false;  //true 
        if(!error){
            resolve({name : "Ahmed" , password : "789"})
        }else{
            reject("ERROR : SOMETHING WENT WRONG HERE!")
        }
    },6000)
})

promiseFour
.then(function(apple){
    return apple.name
})
.then(function(myName){
    console.log(myName);
})
.catch(function(error){
    console.log(error);
})
.finally(function(){
    console.log("PROMISE HAS BEEN RESOLVE OR REJECTED!");
})


// Promise Five
// ASYNC
let promiseFive = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = false; //true
        if(!error){
            resolve({party : "annual party" , email : "annual@gmail.com"})
        }else{
            reject("ERROR IN THIS JS FUNCTION");
        }
    },7000)
})

async function consumedPromiseFive(){
    try{
        let resp = await promiseFive;
        console.log(resp);
    }
    catch(error){
        console.log(error);
    }
}
consumedPromiseFive()

// API WITH ASYNC
async function getAllUsers(){
    try{
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let data  = await response.json();
        console.log(JSON.stringify(data))
    }
    catch(error){
        console.log(error);
    }
}
getAllUsers()