/*--Below is the windchill code that will collect data from the html to calculate windchill. Work in progress!

var high = parseInt(document.getElementById("#highTemp").value);
var newVal = parseInt($(".score").text())
var low = 70;
var w = 4;
*/

var t = (89+ 70) / 2;
var a = 35.74 + 0.6215 * t;
var b = 35.75 * Math.pow(4, 0.16);
var c = 0.4275 * t * Math.pow(4, 0.16);
var d = a - b + c;

document.getElementById("windChill").innerHTML = parseFloat(d.toFixed(0));





//Add a windchill.js file to your script folder on the weather site that uses the wind speed and the average temperature between the high and the low predictions to compute and display the wind chill temperature as a new weather data item on to display with the rest of the data. where f is the wind chill factor in Fahrenheit, t is the air average temperature in Fahrenheit, and s is the wind speed in miles per hour. 
//f = 35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16