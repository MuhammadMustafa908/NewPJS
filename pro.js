setTimeout(function(){
    console.log("HELLO WORLD");
},4000)

setInterval(function(){
    document.write("wow")
},2000)

// PROMISE

let promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("THIS IS FIRST PROMISE")
    },3000)
})

let promiseTwo = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({name : "Ali" , password : "12345"})
    },2000)
})

promiseTwo.then(function(user){
    console.log(user);
})

let promiseThree = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({username : "Camel" , email : "camel@gmail.com"})
    },2000)
})
promiseThree.then(function(elec){
    return elec.email;
}).then(function(userEmail){
    console.log(userEmail)
})

let promiseFour = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({name : "Ahmed" , password : "789"})
        }else{
            reject("ERROR : SOMETHING WENT WRONG HERE!")
        }
    },4000)
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

// ASYNC
let promiseFive = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({party : "annual party" , email : "annual@gmail.com"})
        }else{
            reject("ERROR IN THIS JS FUNCTION");
        }
    },3000)
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