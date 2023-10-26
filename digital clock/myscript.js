ampm = document.getElementById("ampm");

function displayTime(){
    let dateTime = new Date();
    let h = dateTime.getHours();
    let m = padZero(dateTime.getMinutes());
    let s = padZero(dateTime.getSeconds());
    if (h>12){
        ampm.innerHTML="PM"
        if(h==24){
            ampm.innerHTML="AM"
        }
          
        h=h-12
    }
    else if(h==12){
        ampm.innerHTML="PM"
    }
    else{
        ampm.innerHTML="AM"

    }

    h=padZero(h);
    document.getElementById("hour").innerHTML=h;
    document.getElementById("min").innerHTML=m;
    document.getElementById("sec").innerHTML=s;
}

function padZero(num){
    return num<10?"0"+num:num
}


setInterval(displayTime,500)