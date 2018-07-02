var weatherObject = new XMLHttpRequest();
weatherObject.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?id=4156210&appid=49ff59e45f2f814c5595aee9ab322e82&units=imperial',true);

weatherObject.send();

weatherObject.onload =  function() {
    var weatherInfo = JSON.parse(weatherObject.responseText);
        console.log(weatherInfo);
        var list = document.getElementsByClassName("main")[0];
    //Franklin weather
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
    
    //Greenville weather
        list.getElementsByClassName('ghighTemp')[0].innerHTML = Math.round(weatherInfo.list["0"].main.temp_max);
        list.getElementsByClassName('ghighTemp')[1].innerHTML = Math.round(weatherInfo.list["0"].main.temp_max);
        list.getElementsByClassName('glowTemp')[0].innerHTML = Math.round(weatherInfo.list["0"].main.temp_min);
        list.getElementsByClassName('glowTemp')[1].innerHTML = Math.round(weatherInfo.list["0"].main.temp_min);
        list.getElementsByClassName('gprecipt')[0].innerHTML = Math.round(weatherInfo.list["0"].main.humidity);
        list.getElementsByClassName('gprecipt')[1].innerHTML = Math.round(weatherInfo.list["0"].main.humidity);
        list.getElementsByClassName('gwindSpeed')[0].innerHTML = Math.round(weatherInfo.list["0"].wind.speed);
        list.getElementsByClassName('gwindSpeed')[1].innerHTML = Math.round(weatherInfo.list["0"].wind.speed);
        list.getElementsByClassName('gwindChill')[0].innerHTML = Math.round(weatherInfo.list["0"].wind.deg);
        list.getElementsByClassName('gwindChill')[1].innerHTML = Math.round(weatherInfo.list["0"].wind.deg);
        } // end function




            
            
    
        