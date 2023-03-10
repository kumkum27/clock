setInterval(() => {
    d = new Date();
    hrs = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hrsrotation = 30*hrs + min/2;
    minrotation = 6*min;
    secrotation = 6*sec;

    hour.style.transform = `rotate(${hrsrotation}deg)`;
    minute.style.transform = `rotate(${minrotation}deg)`;
    second.style.transform = `rotate(${secrotation}deg)`;
}, 1000);