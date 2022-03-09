let values = ["a","e","i","o","u"];

console.log(values.length);

values[10] = 12;

console.log("Original array "+values);

values.push(20);

console.log("Array after pushing "+values);



values.pop();

console.log("Array after popping "+values);

values.shift();

console.log("Array after shifting "+values);

values.unshift(1);

console.log("Array after unshifting "+values);


function countString(str){
    let count = 0 
    for(let i = 0 ; i< str.length ; i++){
        const element = str[i];
        if(typeof(element)==="string"){count++}
    }
    return count;
}

const result = countString(values);
console.log(result);