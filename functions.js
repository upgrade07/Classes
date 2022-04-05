function sum(a,b){
    console.log(a+b)
 }
 sum(3,4)
 
 
 
 
     console.log(fname+" "+lname+" "+"is"+" "+age+" "+"years"+" "+"old")
 
 threepara("wami","que" , 10)

 let greets=()=>console.log("sahil")
 greets()

 var x = 21;
 var girl = function () {
     console.log(x);
     var x = 20;
 };
 girl ();
 

 var x = 21;
 girl ();
 console.log(x)
 function girl() {
     console.log(x);
     var x = 20;
 };
 
 

 
 var x = 21;
 a();
 b();
 console.log(a);
 function a () {
     
     var x = 20;
 console.log(x);
 };
 
 function b () {
     
     var x = 40;
 console.log(x);
 };
 
 
 var x = 21;
 a();
 b();
 console.log(a);
 a = function() {
     
    x = 20;
   console.log(x);
 };
 b = function() {
     
     x = 40;
    console.log(x);
 };

 
 function factorial(n){
     if(n == 0 || n == 1){
         return 1;
     }else{
         return n * factorial(n-1);
     }
 }
 result=factorial(4);
 console.log(result);