const fs = require('fs');

function myasyncfunction(){
    let p = new Promise(function(resolve){
        fs.readFile("a.txt","utf-8",function(err,data){
            resolve("hi there");
        })
        
    });
}
async function main(){
    const value = await myasyncfunction();
    console.log(value);
}
main();