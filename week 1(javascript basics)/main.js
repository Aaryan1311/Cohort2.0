function sum(){
    let a = 0;
    for(let i = 0;i<10000;i++){
         a += i+1
    }
    console.log("writing sum: " , a)
}
function syncsleep(){
    let a = 0;
    for(let i = 0;i<100000000;i++){
         a += i+1
    }
    console.log("writing sum: " , a)
}
syncsleep();    
console.log("hello world")