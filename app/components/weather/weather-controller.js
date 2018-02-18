function WeatherController() {
	var weatherService = new WeatherService();
	var weatherElem = document.getElementById('weather')


	function drawWeather(weather, output) {
		var weatherTemplate = ``
		var temp = weather.main
		output == 'fare' ? temp.temp = (temp.temp * 1.8 - 459.67).toFixed(0) + `&#8457` : temp.temp = (temp.temp - 273.15).toFixed(0) + `&#8451`
		output == 'fare' ? temp.temp_min = (temp.temp_min * 1.8 - 459.67).toFixed(0) : temp.temp_min = (temp.temp_min - 273.15).toFixed(0)
		output == 'fare' ? temp.temp_max = (temp.temp_max * 1.8 - 459.67).toFixed(0) : temp.temp_max = (temp.temp_max - 273.15).toFixed(0)
		weatherTemplate += `
		<div class="col-6">
		<h4 class="m-1">${temp.temp}</h4>
			<p>Low: ${temp.temp_min}</p>
			<p>High: ${temp.temp_max}</p>
			</div>
			<div class="col-6">
			<img src="http://openweathermap.org/img/w/${weather.weather[0].icon}.png" alt="${weather.description}">
			<p>${weather.weather[0].description}</p>
			<i onclick="app.controllers.weatherController.unitAdjustment('fare')" >&#8457</i>
			<i onclick="app.controllers.weatherController.unitAdjustment('cel')">&#8451</i>
		</div>
			`

		weatherElem.innerHTML = weatherTemplate
	}

	this.unitAdjustment = function unitAjustment(output) {
		weatherService.getWeather(drawWeather, output)
	}

		weatherService.getWeather(drawWeather, 'fare')


}
