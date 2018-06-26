var weatherObject = new XMLHttpRequest();
weatherObject.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?id=4156210&appid=49ff59e45f2f814c5595aee9ab322e82&units=imperial',true);

weatherObject.send();

weatherObject.onload =  function() {
    var weatherInfo = JSON.parse(weatherObject.responseText);
        console.log(weatherInfo);
    document.getElementById("current-temp").innerHTML= weatherInfo.list["0"].main.temp;
} // end function
