function clock() {
    var time = new Date();
    var hour = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var ampm = document.querySelector("#ap-pm");

    if(hour >= 12){
        ampm.innerHTML = "PM"
    } else{
        ampm.innerHTML = "AM"
    }

    if(hour > 12){
        hour = hour - 13;
    }

document.querySelector("#hours").innerHTML = hour;
document.querySelector("#minutes").innerHTML = minutes;
document.querySelector("#seconds").innerHTML = seconds;
}

setInterval(clock, 1000);