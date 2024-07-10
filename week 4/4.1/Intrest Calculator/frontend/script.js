let timeout;
function debounce(){
    clearTimeout(timeout);
    timeout = setTimeout(function(){
        getintrest();
    },10000);
}
async function getintrest(){
    const principal = document.getElementById("principal").value;
    const rate = document.getElementById("rate").value;
    const time = document.getElementById("time").value;

    const response = await fetch("http://localhost:3210/intrest?principal=" +principal+ "&rate=" +rate+ "&time="+time);
    const ans = await response.text();
    document.getElementById("finalintrest").innerHTML = ans;
}