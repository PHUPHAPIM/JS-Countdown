 function countdown(){

        let NewYear = new Date("Jan 1 2024 00:00:00").getTime();
        let Now = new Date().getTime();

        let distance = NewYear - Now;
 
        let days = Math.floor(distance/(1000*60*60*24));
        let hours = Math.floor((distance%(1000*60*60*24))/(60*60*1000));
        let minutes = Math.floor((distance%(1000*60*60))/(1000*60));
        let seconds = Math.floor((distance%(1000*60))/1000);
        
        document.getElementById("seconds").innerHTML = seconds;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("days").innerHTML = days;

    }
    setInterval(countdown, 1000);

   

