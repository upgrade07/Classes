// function counter(){
//     var counter = 0;

//     function IncreaseCounter() {
//         return counter += 1;
//     };

//     return IncreaseCounter;
// }

// var counter = counter();
// alert(counter());   //output is 1
// alert(counter());   //output is 2
// alert(counter());   //output is 3
// alert(counter());   //output is 4----it comes in pop up window

// let count = 0;
// (function immediate() {
//   if (count === 0) {
//     let count = 1;
//     console.log(count); // What is logged?---output is 1
//   }
//   console.log(count); // What is logged?---output is 0
// })();

// for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i); // What is logged?---output is 3(iterable)
//     }, 1000);
// }

//Print Output

// var a = 12;
// (function () {
//   alert(a);
// })();  //output is 12---it comes in pop up window

// var a = 10;
// var x = (function () {
//   var a = 12;
//   return function () {
//     alert(a);
//   };
// })();
// x();    //output is 12---it comes in pop up window

// var globalVar = "xyz";

// (function outerFunc(outerArg) {
//     var outerVar = 'a';
    
//     (function innerFunc(innerArg) {
//     var innerVar = 'b';
    
//     console.log(
//         "outerArg = " + outerArg + "\n" +
//         "innerArg = " + innerArg + "\n" +
//         "outerVar = " + outerVar + "\n" +
//         "innerVar = " + innerVar + "\n" +
//         "globalVar =" + globalVar);
    
//     })(456);
// })(123);       //outerArg = 123
               //innerArg = 456
               //outerVar = a
               //innerVar = b
               //globalVar =xyz


//   Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.

// function OuterFunction() {

//     var  length= 20;

//     function InnerFunction() {
//         var width=10;
//         var area;
//         console.log(area=length*width);
//     }

//     return InnerFunction;
// }
// var innerFunc = OuterFunction();

// innerFunc();  

//Take a variable in outer function and create an inner function to increase the counter every time it is called
function Outerfunc(){
    let count=0;
    return function Innerfunc(){
     return count++;
    }
}
let getFunction=Outerfunc();
console.log(getFunction());
console.log(getFunction());
console.log(getFunction());
console.log(getFunction());
console.log(getFunction());
console.log(getFunction());
console.log(getFunction());
console.log(getFunction());