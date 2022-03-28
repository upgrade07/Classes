// function outer(){
//     var num =5 ; 
//     function inner(){
//         debugger
//     console.log(num)
// }
// return inner
// }

// var func = outer()
// func()


// function extraOuter(){
//     var a =6 ;
//     return function outer(){
//         var b=1;
//         return function extraInner(){
//             debugger
//             console.log(a,b)
//         }
//     }
// }
// extraOuter()()()

// function makeCounter(){
//     var count = 0;
//     return function(){
//         return count++
//     }
// }

// var counter1 = makeCounter();
// var counter2 = makeCounter();

// console.log(counter1())

// console.log(counter2())


// cb = () =>{
//     console.log("Hi after 3 secs")
// }
// setTimeout(()=>console.log("Hi"),3000)
// console.log("after")



// function fun(){
//     var a = 10;
//     setTimeout(function(){
//         console.log(a)
//     },3000)
//     console.log("Inside fun")
// }

// fun()


// function loopTime(){
//     for(let i = 1 ; i<=5 ; i++){
//         setTimeout(function(){
//             console.log(i)
//             while(i>4){
//                 console.log("Start Game")
//                 break
//             }
//         },i*1000)


//     }
//     console.log("Inside Looptime")
// }
// loopTime()







