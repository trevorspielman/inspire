function WeatherController() {
	var wc = this;
	var weatherService = new WeatherService();
	var weatherElem = document.getElementById('weather')

	weatherService.getWeather(function (weather) {
		console.log(weather);
		var weatherTemplate = ``
		var temp = weather.main
		weatherTemplate += `
			<div class="col-2">
			<h3>Current: ${temp.temp}</h3>
			<p>High: ${temp.temp_max}</p>
			<p>Low: ${temp.temp_min}</p>
			</div>
			<div class="col-2">
			<img src="http://openweathermap.org/img/w/${weather.weather[0].icon}.png" alt="${weather.description}">
			<p>${weather.weather[0].description}</p>
			</div>
			`

		weatherElem.innerHTML = weatherTemplate
	})

}
