/*
let str1="heyy hii i m shivam"; //double quotes
let str2='my self shivam';// single
let str3=`hlo shivam`;// backtick
console.log(str1);
console.log(str2);
console.log(str3);
let amount=1000;
console.log("please pay RS amount"); //please pay RS amount
console.log('please pay RS amount');//please pay RS amount
console.log("please pay RS ${amount}");//please pay RS amount
console.log(`please pay RS ${amount}`);//please pay RS 1000
let money='one hundred';
console.log("plz pay money") //plz pay money
console.log('please pay rs ${money}') //please pay rs ${money}
console.log(`plz pay rs ${money}`); //plz pay rs one hundred
let guestlist= "guest:
rahul
Aj 
bj         // unexpected error
cj
dj";
console.log(guestlist);
but can be done by space like "\n"
// It is still possible to create multiline strings with single and double quotes by using a so-called “newline character”, \
//written as \n, which denotes a line break:
let guestList = "Guests:\n * John\n * Pete\n * Mary";
console.log(guestList);
let matchlist= "player:\n aj\n bj\n cj\n dj\n";
console.log(matchlist);
let guestlist=`guest:
aj
bj
cj
dj`;
console.log(guestlist);
let str1="hello\nworld";
let str2="hello\n world";
let str3=`hello
world`;
console.log(str1);      
console.log(str2);
console.log(str3);
console.log(str1==str2);  //false
console.log(str1==str3);  //true
console.log(str2==str3);   //false
//   output 1
hello
world
// output 2
hello
 world
 //output 3
 hello
world
//let str1="hello my fav "color" is "red" ";  // it show error bcz str does not understand where we end the string ..it end whwn it get a double quotes i.e "color"..end not goes forward.
let str1="hello how're you";  // double quotes we use single quotes and viceversa
console.log(str1); //  hello how're you
// problem solve by escape opertor \"abc\"
let str2="hello my fav \"color\" is \"red\" "; 
console.log(str2); //hello my fav "color" is "red" 
// string length
// Please note that str.length is a numeric property, not a function. There is no need to add parenthesis after it.
let str1="hello hii bye";
let str2="hellohiibye";
console.log(str1.length,str2.length); //13 //11
//Accessing characters
//To get a character at position pos, use square brackets [pos] or
// call the method str.charAt(pos). The first character starts from the zero position:
let str1="hello world";
let str2="helloworld";
console.log(str1[5],str1[6],str1[10]); //  space hai  w d
console.log(str2[5],str2[6],str2[10]); //w o undefined
console.log(str2[5],str2[6],str2[9]); //w o d
console.log(str1.charAt(5),str1.charAt(6),str1.charAt(10)); //   w d
console.log(str2.charAt(5),str2.charAt(6),str2.charAt(10)); //w o 
console.log(str1[100]); // undefined
console.log(str1.charAt(100)); // '' (an empty string)
// Strings are immutable
//Strings can’t be changed in JavaScript. It is impossible to change a character.
//The usual workaround is to create a whole new string and assign it to str instead of the old one.
let str="hello";
str[0]='S' // error bcz string is immutable
console.log(str); // hello
str="world";
console.log(str); // world
 // uppercase lowercase
 let str1="hello guys";
 let str2='hyy guys';
 console.log(str1.toUpperCase()); //HELLO GUYS
 console.log(str2.toLowerCase());   // hyy guys
 console.log(str1[0].toUpperCase()); //H
 console.log(str1[6].toUpperCase()); // G
// Searching for a substring
// str.indexOf
//The first method is str.indexOf(substr, pos).
//It looks for the substr in str, starting from the given position pos, and returns the position where the match was found or
// -1 if nothing can be found.
let str = 'Widget with id';
console.log(str.indexOf('widget')); // -1
console.log(str.indexOf('Widget')); // 0
console.log(str.indexOf('with')); // 7
console.log(str.indexOf('id')); // 1
console.log(str.indexOf('w')); // 7
console.log(str.indexOf('i')); //1
console.log(str.indexOf('d'));  //2
console.log(str.indexOf('id',3));//12
console.log(str.lastIndexOf('id')); //12
console.log (~str.indexOf("Widget"));
// The bitwise NOT trick
//In practice, that means a simple thing: for 32-bit integers // ~n equals -(n+1).
console.log(~1); // -2
console.log(~2); // -3
console.log(~0); //-1
console.log(~-1); // 0
// include ()// it return true or false //when element found ..true..not found..false
let str1="hello everybody kaise ho";
let str2="hello hyy byee";
//console.log(str1.includes('hello')); // true
//console.log(str2.includes("hlo")); //false
//console.log(str1.slice(0,6)); //hello
//console.log(str1.slice(2)); //llo everybody kaise ho
//console.log(str1.slice(-4,-1)); // 
//console.log(str1.substring(1,4)); ell
//console.log(str1.substring(-4,-1)); //substring not valid for negative index
// in substring (2,6)// (6,2) same 
// but in slice different 
console.log(str1.slice(2,6));//llo 
console.log(str1.slice(6,2)); //"" (an empty string)
console.log(str1.substring(2,6)); //llo 
console.log( str1.substring(6, 2)); //llo 
//
//method 	selects…	negatives
//slice(start, end)	from start to end (not including end)	allows negatives
//substring(start, end)	between start and end	negative values mean 0
//substr(start, length)	from start get length characters	allows negative start
let str = "stringify";
//         012345678
//negative 987654321
console.log( str.substr(-4, 2) ); // gi
// split() string to array
console.log(str.split());
let str4="hello every body ";
console.log(str4.split().join()); // string to array to string
let str5="          hello everyone                 ";
console.log(str5.trim());  // trim remove unnecessary space from start to end
let str6="hello hyy bye everbody";
let resultarr=str6.split();
console.log(resultarr); // ['hello hyy bye everbody']
console.log (resultarr.join('\n')); // 
let S="Hi, I am You."
let result=(S.replace('You','prepbyte'));
console.log(result);// result;
     */


// match function

   // let S="prepbyte";
   // console.log(S.match(/[aeiou]/gi));// ['e', 'e']
   // console.log(S.match(/[aeiou]/gi).length);//2

   let str1="abcdefghijklmnopqrstuvwxyz";
   console.log(str1.match(/[aeiou]/gi)); // ['a', 'e', 'i', 'o', 'u']
   console.log(str1.match("def")); //
   console.log(str1.match(/ghi/));  //
   console.log(str1.match(/ghi/g)); //
   console.log(str1.match(/ghi/gi)); //

   let str="ADDAAADDDDD";
   let alength=str.match(/A/gi).length;
   let dlength=str.match(/D/gi).length;
   if(alength>dlength)
   
     console.log("Aditya");
   
   else if(alength<dlength)
   
   console.log ("Danish") ;
   
   else
   
console.log("Draw");