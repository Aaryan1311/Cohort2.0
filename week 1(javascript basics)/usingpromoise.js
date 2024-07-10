const fs = require('fs');

function asyncfuncn(){
    console.log("3. inside async function");
    return new Promise(function(resolve){

        console.log("4. going to call js inbuilt async function");
        fs.readFile("a.txt", "utf-8", function(err,data){
            console.log("5. it is called, now returning the resolve(data)");
            resolve(data);
            console.log("6. returned");
        });
        console.log("7. going out of promise instance");
    })
    console.log("8. came out of function");
}

function onDone(data){
    console.log("printing promise  " , a);
    console.log("9. calling onDone function");
    console.log(data);
    console.log("10. all done, thank you");

    console.log("printing promise2  " , a);
}

console.log("1. before async function called");
var a = asyncfuncn();
console.log("1.1 wrting instance of promise that is:  ", a);
a.then(onDone);
console.log("1.2  promise done ", a);



let aa = 0;
for(let i = 0;i<1;i++){
    aa++;
}
console.log("2. all code is done, a: " , aa , " now async function will run");
