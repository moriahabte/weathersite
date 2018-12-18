const app = new Vue({
    el: '#app',
    data: {

        results: [],
        times: [],
        city: [],
        country: [],
    },
    methods: {
        getWeather: function (event) {
            var input = document.getElementById('myText');
            var cityName = input.value;
            fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&mode=json&appid=e9994137768d4ded66d98ad90e240c39&units=metric').then(function (response) {
                console.log(1);
                response.json().then(onConversionToJsonSuccessful);

            })
            // `event` is the native DOM event

        }
    }
})





function onConversionToJsonSuccessful(json) {
    console.log("success!!!!", json);
    data = json;

    app.times = data.list;
    app.city = data.city.name;
    app.country = data.city.country;
}
