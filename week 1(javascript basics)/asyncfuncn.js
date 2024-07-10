const fs = require('fs');

function readingFiles(cb){
    fs.readFile("a.txt", "utf-8", function(err,data){
        cb(data);
    });
}

function onDone(data){
    console.log(data);
}

readingFiles(onDone);

let a = 0;
for(let i = 0;i<100000;i++){
    a++;
}
console.log("all done value of a is: " , a);