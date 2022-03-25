// let user = new Object(); // "object constructor" syntax
// let user = {};  // "object literal" syntax
//let user={
// name: 'shivam',
// age: 22,
// clg:'gurukul' ,
// isadmin:true ,
// "like birds": true
// }
//The dot requires the key to be a valid variable identifier. 
//That implies: contains no spaces, doesn’t start with a digit and doesn’t include special characters ($ and _ are allowed).
// this would give a syntax error
//user.likes birds = true
//user["likes birds"] = true;
//console.log(user); // {name: 'shivam', age: 22, clg: 'gurukul'}
// console.log(user[key]); //
//  console.log(user.name); // shivam
//  console.log(user.age); //22
//  console.log(user.clg);//gurukul
//console.log(user.isadmin); //true
//  delete user.clg
//console.log(user);//{name: 'shivam', age: 22}
//The value can be of any type. Let’s add a boolean one:
// isadmin:true
// user.isadmin
// We can also use multiword property names, but then they must be quoted:

/*
//Add object
let obj=[
    
    { id:1, name:'shivam', age:20 },
    { id:2,name:'kumar',age:21},
    {id:3, name:'aj',age:23}
]
console.log(obj);
let newobj=
{id:4, name:'dj',age:45}
obj.push(newobj);
console.log(obj);
let tomodifyindex= obj.findIndex(item=> item.id===3)
obj[tomodifyindex].age=20;
console.log(obj);
                                                              // modify object
// soppose we want to change age of id 2 and yaa name of 1d 1
//first we get the index we want to modify then modify it
// delete an object
//  for single 
//delete Obj.name 
//but for individual Id 
let user=[
    
    { id:1, name:'shivam', age:20 },
    { id:2,name:'kumar',age:21},
    {id:3, name:'aj',age:23}
]
                                                      // delete id 3
//first we find id  3 and then delete it
let deleteindex= user.findIndex(item=>item.id===3)
user.splice(deleteindex,1);                                // dought diff of user.find // user.findindex
console.log(user);
let deleteindexes= user.find(item=>item.id===3)
user.splice(deleteindexes,1);
console.log(user);
                                                                // Computed properties  
//Square brackets allow to take the key from a variable,
//We can use square brackets in an object literal, when creating an object. That’s called computed properties.
let fruit='apple';
let obj={
    [fruit]:true,  //  the name of the property is taken from the variable fruit  // how can we access these key
    fruit: false
}
console.log(obj); // {apple: true, fruit: false}
console.log(obj.fruit);// false 
let fruits = 'apple';
let bag = {
  [fruits + 'Computers']: 5 // bag.appleComputers = 5 
};
console.log(bag); // {appleComputers: 5}
                                           // check key exist or not  syntax== "key" in object   // boolean value
console.log("age" in bag); // false
console.log("apple" in bag); // false
console.log("appleComputers" in bag);// true
let obje = {
    test: undefined
  };
  console.log(obje.test); // undefined
                                                             // looping in object  //
                                                             //for in loop
          // want to print value of key
                                                              // user[key]                                                     
    let user={
        name:'shivam',
        age: 22,
        isadmin:true,
        "like birds": false
    }                                                         
    for(let key in user)
    {
        //console.log(key);   //name age isadmin like birds  // print key
       // console.log(user[key]);   // shivam 22 true false  // print value
       console.log(key, user[key]);  // both name shivam  age 22 isadmin true ..
    }
           
           
    
    // question salary find  calculate sum of all salaries
    let salaries=
{
    john:100,
    ram: 200,
    shyam:300,
    rama:500
}    
let sum=0;
for (let i in salaries)
{
    sum=sum+salaries[i];
}
    
console.log(sum); // 1100
// ques 2  Multiply numeric property values by 2
let rect={
    length:100,
    width:200,
    title:"rectangle"
}
//console.log(rect) // {length: 100, width: 200, title: 'rectangle'}
for(let i in rect)
{
    if(typeof rect[i]=='number')
    {
        rect[i]=rect[i]*2
    }
}
//console.log(rect); //{length: 200, width: 400, title: 'rectangle'}
// ques 3   create a dublicate of rect but change the title name
let duplicate ={}
for(let i in duplicate)
{
    duplicate[key]=rect[key]
}                                          // dought not create duplicate why
console.log(duplicate);
duplicate.title='rectangle area';
console.log(duplicate);
Object.assign(duplicate,rect)
duplicate.title= 'rectarea';
*/
                 // assign object.assign(duplicate,user)
