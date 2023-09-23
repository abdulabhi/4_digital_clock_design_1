

// now write the script tag


setInterval(() =>
{


    const time = document.getElementById("time");
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (hours < 10) {
        houres = "0" + houres;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    time.textContent = hours + ":" + minutes + ":" + seconds;


})