//function when you click the button
function getWeather(){
//clear the html of previous searches    
$('.weatherResponse').html('');
$('.temp').html('');
//get the value of the input and store in cityName    
var cityName = $('#cityName').val();   
//get the get json of the searched city     
var apiCall = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName +  '&appid=502cde14860d1f742032174a4062cfe8&units=metric';
//get json and name function to handle it
    $.getJSON(apiCall, weatherCallback);
//define what this function does en what the name of the json will be as a parameter   
function weatherCallback(WeatherData){
    var cityName = WeatherData.name;
    var country = WeatherData.sys.country;
    var description = WeatherData.weather[0].description;
    var temp = WeatherData.main.temp;
    var icon = WeatherData.weather["0"].icon;
    $('.weatherResponse').append(cityName + " " + country + ", "+ description);
    $('.temp').append(temp + " ℃");
    
    document.getElementById("weatherIcon").setAttribute("src", "http://openweathermap.org/img/w/"+ icon + ".png") ;
    console.log(WeatherData);
}
}