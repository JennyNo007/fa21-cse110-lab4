var interval = 0;

if(interval < 10000){
    interval = setInterval(clock, 1000);
    console.log(interval);
}
else{
    clearTimeout(time);
}

var timeout;
function clock(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    timeout = setTimeout(function(){ console.log(time); }, 0);
    
}
// function stopClock(){
//     clearTimeout(time);
// }

