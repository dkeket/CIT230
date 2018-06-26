var weatherObject = new XMLHttpRequest();
weatherObject.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?id=4156210&appid=49ff59e45f2f814c5595aee9ab322e82&units=imperial',true);

weatherObject.send();

weatherObject.onload =  function() {
    var weatherInfo = JSON.parse(weatherObject.responseText);
        console.log(weatherInfo);
        var list = document.getElementsByClassName("main")[0];
        list.getElementsByClassName('fhighTemp')[0].innerHTML = Math.round(weatherInfo.list["0"].main.temp_max);
        list.getElementsByClassName('fhighTemp')[1].innerHTML = Math.round(weatherInfo.list["0"].main.temp_max);
        list.getElementsByClassName('flowTemp')[0].innerHTML = Math.round(weatherInfo.list["0"].main.temp_min);
        list.getElementsByClassName('flowTemp')[1].innerHTML = Math.round(weatherInfo.list["0"].main.temp_min);
        list.getElementsByClassName('fprecipt')[0].innerHTML = Math.round(weatherInfo.list["0"].main.humidity);
        list.getElementsByClassName('fprecipt')[1].innerHTML = Math.round(weatherInfo.list["0"].main.humidity);
        list.getElementsByClassName('fwindSpeed')[0].innerHTML = Math.round(weatherInfo.list["0"].wind.speed);
        list.getElementsByClassName('fwindSpeed')[1].innerHTML = Math.round(weatherInfo.list["0"].wind.speed);
        list.getElementsByClassName('fwindChill')[0].innerHTML = Math.round(weatherInfo.list["0"].wind.deg);
        list.getElementsByClassName('fwindChill')[1].innerHTML = Math.round(weatherInfo.list["0"].wind.deg);


        
} // end function




            
            
    
        