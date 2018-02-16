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
			`
		weather.weather.forEach(weather => {
			weatherTemplate += `
			<div class="col-2">
			<img src="http://openweathermap.org/img/w/${weather.icon}.png" alt="${weather.description}">
			<p>${weather.description}</p>
			</div>
			`
		})

		weatherElem.innerHTML = weatherTemplate
	})

}
