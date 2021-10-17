let count = 0;
let interval = setInterval(clock, 1000);
let timeout;

function clock(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    timeout = setTimeout(function(){ console.log(time); }, 0);
    count++;
    if(count > 10){
        clearInterval(interval);
    }
}
clearTimeout(timeout);

