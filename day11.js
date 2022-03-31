// function cb(){
//     console.log("after timeout");
// }
// console.log("me first")
 
// function print(){
//     console.log("me second");
// }


// setTimeout(cb,2000)

// print()
// console.log("me third")


// function cb(){
//     console.log("after timeout");
// }
// console.log("me first")
 
// function print(){
//     console.log("me second");
// }


// setTimeout(cb,0)

// print()
// console.log("me third")


// function printAlphabets(letter,delay){
//     setTimeout(
//         ()=>console.log(letter)
//     ,delay) 
// }


// function printValue(){
//     setTimeout(()=>{
//         console.log("first timeout")
//         setTimeout(()=>{
//         console.log("second timeout")
//         },2000)
//     },2000)
// }

// printValue();

// function printLetter(letter,cb){
//         setTimeout(()=>{
//             console.log(letter)
//             cb()
//         },1000)
// }


// function printAlphabets(){
//     printLetter("A")
// }



//  let pr =  new Promise ((resolve,reject)=>{
//      setTimeout(()=>{
//         console.log('Me first')
//         reject(1)
//      },2000)
     
     
//  })

// // console.log('Me second')


// pr.catch(()=>{
//     console.log("Rejected")
// }).then(()=>{
//     console.log("Resolved")
// }).finally(()=>{
//     console.log("All")
// })


// function printNum(num){
//     return new Promise((resolve,reject)=>{
//         if(num % 2 == 0){
//             resolve("Number is even")
//         }
//         else{
//             reject("Number not even");
//         }
//     })
// }


// printNum(21).then((reject)=>{
//     console.log(reject)
// })


// let prA = new Promise((resolve , reject) =>{
//     setTimeout(() => {
//         resolve('A')
//     }, 1000);
// })
    
// let prB = new Promise((resolve , reject) =>{
//     setTimeout(() => {
//         resolve('B')
//     }, 2000);
// })

// prA.then((result)=>{console.log(result)})
// prB.then((result)=>{console.log(result)})




// function callPromise(alphabet){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(alphabet)
//         }, 1000);
//     })
    
// }


// function callPromise(alphabet){
//     return new Promise ((res,rej)=>{
//         setTimeout(() => {
//             console.log(alphabet)
//             res("Promise resolved")
//         }, 1000);
//     })
// }

// callPromise("A").then(()=>{callPromise("B").then(()=>{callPromise("C")})})