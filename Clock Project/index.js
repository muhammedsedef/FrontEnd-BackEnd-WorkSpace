setInterval(setDate,1000);

function setDate(){
    var date = new Date();
    var hours = date.getHours() * 30;
    var minutes = date.getMinutes() * 6;
    var seconds = date.getSeconds() * 6;
    var digitalClock = document.getElementById("digitalClock");

    var hourRatio = document.getElementById("hour");
    hourRatio.style.setProperty('--rotation',hours);

    var minuteRatio = document.getElementById("minutes");
    minuteRatio.style.setProperty('--rotation',minutes);

    var secondRatio = document.getElementById("second");
    secondRatio.style.setProperty('--rotation',seconds);
    
    digitalClock.innerText = ((hours/30) % 12 +":"+ (minutes/6) + ((hours/30)<12? " AM" : " PM" ));
    
}




/*
    Bu şekilde neden .style ögesine erişemiyorum?
    var rotationRatio = document.getElementsByClassName("hand")[0];
*/