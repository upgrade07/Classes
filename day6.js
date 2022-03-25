

  
/*
console.log("hello world");
let arr1=['a','b','c','d','e','f','g','h','i','j','k','l']
console.log(arr1);                                       //['a','b','c','d','e','f','g','h','i','j','k','l']
arr1.push(z);                                               //push z
console.log(arr1);                                   //[ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'z' ]
console.log(arr1.push());                            //13
arr1.pop();                                          // pop z
console.log(arr1);                                  // [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l' ]
console.log(arrl.pop());                           //l
arr1.shift();                                     // remove 1st element 
console.log(arr1);                                 //[ 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k' ]
console.log(arr1.shift());                         //b
arr1.unshift('x');                                     // add x at start
console.log(arr1);                                     //[ 'x', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k' ]
console.log(arr1.unshift());                           //10
console.log(arr1.slice(1,6));                         //[ 'c', 'd', 'e', 'f', 'g' ]
console.log(arr1.slice(2,7));                         //   [ 'd', 'e', 'f', 'g', 'h' ]
console.log(arr1.slice(1,-1));                        //[ 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j' ]
*/  // concat array
//let arr1=['a','b','c','d','e','f','g','h','i','j','k','l']
//console.log(arr1);

//let arr2=['z','x','y']
//let result=arr1.concat(arr2);
//console.log(result);


// indexof
//let arr1=['a','b','c','d','e','f','g','h','i','j','k','l']
//let result=arr1.indexOf('c');
//console.log(result);
/*
let arr2=[1,3,4,3,6,7,8,9]
let result=arr2.indexOf(3,2);
console.log(result);
*/
/*  // tostring
let arr1=['a','b','c','d','e','f','g','h','i','j','k','l']
let result=arr1.toString();
console.log(arr1);
console.log(result);
*/
/*  //Join
let arr1=['a','b','c','d','e','f','g','h','i','j','k','l']
let result=arr1.join(" and ");
console.log(arr1);
console.log(result);
*/
// include method
/*
let arr1=['a','b','c','d','e','f','g','h','i','j','k','l']
let result=arr1.includes("z");
let ans=arr1.includes('a');
console.log(ans);
console.log(result);
*/
/* // lastindexof
let arr=[1,2,3,4,5,5,3,2,1]
console.log(arr);
let result=arr.lastIndexOf(2);
console.log(result);
*/
// entries
/*
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
const f = fruits.entries();
console.log(f);
*/

/*
// every() return true if all test case pass
let arr=[19,12,34,56]
function greaterthan10(item)
{
    return item>10;
}
let result=arr.every(greaterthan10);
console.log(result);
function lessthan100(element)
{
    return element<100;
}
let ans=arr.every(lessthan100);
console.log(ans);
function greaterthan20(n)
{
    return n>20;
}
let answer=arr.every(greaterthan20);
console.log(answer);
// filter return a new array which pass the test case
let arr=[19,12,34,56]
function greaterthan10(item)
{
    return item>10;
}
let result=arr.filter(greaterthan10);
console.log(result);
function greaterthan20(n)
{
    return n>20;
}
let answer=arr.filter(greaterthan20);
console.log(answer);
// Like map , the forEach() method receives a function as an argument and executes it once for each array element. However, 
//instead of returning a new array like map, it returns undefined.
let arr=[10,15,12,10,3,9]
function oddcheck(item)
{
    return item%2!==0;
}
let result= arr.every(oddcheck);
console.log(result);
let ans=arr.forEach(oddcheck);
console.log(ans);
let arr = ["I", "go", "home"];
delete arr[1]; // remove "go"
alert( arr[1] ); // undefined
// now arr = ["I",  , "home"];
alert( arr.length ); // 3
console.log(arr);
let arr = ["I", "study", "JavaScript"];
console.log(arr.slice(1,1));
console.log(arr);
// splice  add /remove array element
let arr = ["I", "study", "JavaScript", "right", "now"];
// remove 3 first elements and replace them with another
arr.splice(0, 3, "Let's", "dance");
console.log(arr);
var fruits = ["Banana", "Orange", "Apple", "Mango","kiwi"];
// At position 2, add 2 elements, remove 1 item: 
let result=fruits.splice(2, 1, "Lemon", "Kiw"); //banana,Orange,Lemon,Kiw,Mango,kiwi
console.log(result);
console.log(fruits)
// At position 2, add 2 elements: remove nothing 
fruits.splice(2, 0, "Lemon", "Kiwi"); //Banana,Orange,Lemon,Kiwi,Apple,Mango
console.log(fruits);
// At position 2, remove 2 items: 
fruits.splice(2, 2);  //Banana,Orange,Kiwi
console.log(fruits);
// remove 2 first elements
 arr.splice(0, 2);
 console.log(fruits);
//  The find method looks for a single (first) element that makes the function return true.
If there may be many, we can use arr.filter(fn).
The syntax is similar to find, but filter returns an array of all matching elements:
let user=[
    {
        id:1 ,name:"shivam"} ,
       { id:2 , name:"kumar"},
       { id:3 , name:"shiv"}
    
];
function people(item)
{
return item.id==1;
}
let student=user.find(people);
console.log(student);
function printid(element)
{
    return element.id<=3;
}
console.log(user.filter(printid));
let arr = [1, 2, 3, 4, 5];
console.log(arr.reverse());
let str = "test";
console.log(str.split(''));
// Reduce method
// acumulator ,current,initial
let arr=[1,3,5,8];
let initialvalue=1;
let result=arr.reduce(function(accumulator,current)
{
    accumulator=accumulator*current; //product=product*arr[i];
    return accumulator;
},initialvalue);
console.log(result);
// chainable map chain
let salary=[100,200,300,400,500]
let result= salary.filter(item=>item>300).map(item=>item*2);
console.log(result);
// sum of evensquare array
let arr = [1, 2, 3, 4, 5];
let result=arr.map(item=> item*item).filter(item=>item%2===0).reduce((acc,curr)=>
{
    acc+=curr;
    return acc;
} , 0);
console.log(result);
*/


