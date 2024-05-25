// Method 1
const promiseOne = new Promise(function(resolve, reject) {
 setTimeout(function() {
    console.log("Task Completed");
    resolve();
 }, 1000);    
})
promiseOne.then(function(){
    console.log('Promise Resolved')
})

// Method 2
new Promise(function(resolve , reject){
    setTimeout(() => {
        console.log("Task 2 Completed !");
        resolve();
    }, 1000);
}).then(function(){
    console.log("Promise 2 Resolved !");
})

// Method for passing parameters
const promiseTwo = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Task 3 Completed !");
        resolve({username: "Me", email:"me@gmail.com"});
    }, 1000);
})
promiseTwo.then(function(user){
    console.log(user);
})

// method for Reject

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username: "me2", password:"123"})
        }
        else{
            reject("Error Occured !");
        }
    }, 1000);
})
promiseThree
.then((user) =>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch((err) =>{
    console.log(err);
})
.finally(()=>{
    console.log("Promise 3 is either resolved or rejected finally!");
})


// method Using Asyn/Await

const promiseFour = new Promise((resolve, reject)=>{
setTimeout(() => {
    let err = true;
    if(!err){
        resolve({language: "JS", password: "12345"});
    }
    else{
        reject("Error Occured in Task 4!");
       } 
}, 1000);
})

 async function ComsumePromise (){
    const response = await promiseFour;
    console.log(response);
}
ComsumePromise(); 




// method Using Asyn/Await (try-Catch)
const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let err = true;
        if(!err){
            resolve({language: "JS-ES6", password: "12345"});
        }
        else{
            reject("Error Occured in Task 5!");
           } 
    }, 1000);
    })
async function ComsumePromiseFive (){
  try{
    const response = await promiseFive;
    console.log(response);
  }
  catch(err){
    console.log(err);
  }
}
ComsumePromiseFive(); 


// Example Using Asyn/Await
 async function getAllUsers(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("E:", error);
    }
 }
 getAllUsers();

 
//https://jsonplaceholder.typicode.com/users




// Example Using .then, .catch
 fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json();
 })
 .then((response)=>{
    console.log(response);
    console.log("Success");
 })
 .catch((err) =>{
    console.log(err);
 })
