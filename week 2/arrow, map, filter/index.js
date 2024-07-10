// common way of writing function is following
function sum (a,b){
    return a + b;
}
// using arrow function is can be written as following
const sum2 = (a,b) =>{
    return a+b;
}

console.log(sum(2,3));
console.log(sum2(3,4));

// difference between both is that , arrow function can't be used as constructors
// they don't have their own binding with the "new" "argument" and "super" 
// can't be used as methods


//Map

// it is a method of array class, with takes two parameters one is array and other is function
// this method returns a new array after passing each element of old array to function and adding output of function to new array

function transform(i){ return i*2; }
let arr = [1,2,3];
console.log(arr.map(transform));

// also it can be written as 
console.log(arr.map(function(i){
    return i*2;
}));
// using arrow function

console.log(arr.map((i) =>{
    return 2*i;
}))


//Map

// it is a method of array class, with takes two parameters one is array and other is function
// this method returns a shodow copy of old array after passing each element of old array to function and adding that element in the new array only if it passes the given function

function filterlogic(i){ return i%2==0; }
let brr = [1,2,3];
console.log(arr.filter(filterlogic));

// also it can be written as 
console.log(arr.filter(function(i){
    return i%2==0;
}));
// using arrow function

console.log(arr.filter((i) =>{
    return i%2==0;
}))
