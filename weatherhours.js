//function when you click the button
function getWeather(){
//clear the html of previous searches    
$('.weatherResponse').html('');
$('.temp').html('');
//get the value of the input and store in cityName    
var cityName = $('#cityName').val();   
//get the get json of the searched city     
//var apiCall = 'http://api.openweathermap.org/data/2.5/forecast?q=London,us&units=metric';
var apiCall = 'http://api.openweathermap.org/data/2.5/forecast?q='  + cityName + '&mode=json&appid=e9994137768d4ded66d98ad90e240c39&units=metric'

//get json and name function to handle it
    $.getJSON(apiCall, weatherCallback);
//define what this function does en what the name of the json will be as a parameter   
function weatherCallback(WeatherData){
    console.log(WeatherData);
    var cityName = WeatherData.city.name;
    var countryCode = WeatherData.city.country;
    for(i=0;i<3;i++){
        
    var description = WeatherData.list[i].weather["0"].description;
    var temp = WeatherData.list[i].main.temp;
    var icon = WeatherData.list[i].weather["0"].icon;
    $('.weatherResponse').append(cityName + " " + countryCode + ", "+ description);
    $('.temp').append(temp + " ℃");
    
    document.getElementById("weatherIcon").setAttribute("src", "http://openweathermap.org/img/w/"+ icon + ".png") ;
    }
}
}