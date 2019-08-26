var calendar = () =>{
    let allDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let allMonths =['January','February','March','April','May','June','July','Agust','October','Setembr','November','Decembeer'];
    let time = new Date();
    let days = time.getDay();
    let months = time.getMonth();
    let years = time.getFullYear();
    let date =time.getDate().toString();
    let outputDays = "";
    let outputMonths ="";
    let outputDate = "";
    for (let i = 0;i<allDays.length;i++){
        switch(days){
            case i:
                outputDays = allDays[i];
                break;
        }
    }
    for (let i = 0 ;i<allMonths.length;i++){
        switch(months){
            case i:
                outputMonths = allMonths[i];
        }
    }
    if(date.length<2){
        date = '0'+date;
    }
    switch(date){
        case 1:
        case 21:
        case 31:
            outputDate = "st";
            break;
        case 2:
        case 22:
            outputDate = "nd";
            break;
        case 3:
        case 23:
            outputDate ="rd";
            break;
        default:
            outputDate = "th";
            break;
    }
    let results = document.getElementById('h3');
    results.innerHTML = outputDays+date+"<sup>"+outputDate+"</sup>"+outputMonths+years;
    //time
    let hours = (time.getHours()%12).toString();
    let minutes = time.getMinutes().toString();
    let seconds = time.getSeconds().toString();
    let mili = time.getMilliseconds();

    if(hours.length<2){
        hours = '0'+hours;
    }
    if(minutes.length<2){
        minutes = '0'+minutes;
    }
    if(seconds.length<2){
        seconds = '0'+seconds;
    }
    let resultsTime = document.getElementById('h1');

    if(time.getHours()<12){
        resultsTime.innerHTML = hours+":"+minutes+":"+seconds+" "+"AM";
        document.getElementById('h2').innerHTML ="Good Morning !"
        document.body.style.background ="url(../images/morning.jpg)center/cover no-repeat";
    }else{
        resultsTime.innerHTML = hours+":"+minutes+":"+seconds+"PM";
        document.getElementById('h2').innerHTML = "Good afternoon !"
        document.body.style.background = "url(../images/afternoon.jpg)center/cover no-repeat";

    }
    if(time.getHours() == 12){
        resultsTime.innerHTML = time.getHours()+":"+minutes+":"+seconds;
    }
}
var changeColor = () =>{
    let colors = document.getElementById("h1");
    if(colors.style.color == "orange"){
        colors.style.color ="blue";
    }else{
        colors.style.color ="orange";
    }
}
var changeColor1 = () =>{
    let colors = document.getElementById("h2");
    if(colors.style.color == "blue"){
        colors.style.color ="orange";
    }else{
        colors.style.color ="blue";
    }
}
var changeColor2 = () =>{
    let colors = document.getElementById("h3");
    if(colors.style.color == "teal"){
        colors.style.color ="orange";
    }else if(colors.style.color == "orange"){
        colors.style.color ="purple";
    }else if(colors.style.color=="purple"){
        colors.style.color ="pink";
    }else if(colors.style.color=="pink"){
        colors.style.color ="white";
    }else{
        colors.style.color ="teal"
    }
}
setInterval(changeColor,1000);
setInterval(changeColor1,1000);
setInterval(changeColor2,1000);
setInterval(calendar,1000);