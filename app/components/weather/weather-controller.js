function WeatherController() {
	var wc = this;
	var weatherService = new WeatherService();
	var weatherElem = document.getElementById('weather')

	weatherService.getWeather(function (weather, output) {
		console.log(weather, output);
		var weatherTemplate = ``
		var temp = weather.main
		if(output == 'fare'){
			temp[temp] = (temp[temp] * 1.8 - 459.67)
		}
		if(output == 'cel'){
			temp[temp] = (temp[temp] - 273.15)
		}
		weatherTemplate += `
		<div class="col-6">
		<h4 class="m-1">${(temp.temp * 1.8 - 459.67).toFixed(0)} &#8457</h4>
			<p>Low: ${temp.temp_min} High: ${temp.temp_max}</p>
			<p onclick="app.controllers.weatherController.unitAdjustment('fare')" >&#8457</p>
			<p onclick="app.controllers.weatherController.unitAdjustment('cel')">&#8451</p>
		</div>
		<div class="col-6">
			<img class="m-1" src="http://openweathermap.org/img/w/${weather.weather[0].icon}.png" alt="${weather.description}">
			<p class="m-1">${weather.weather[0].description}</p>
		</div>
			`

		weatherElem.innerHTML = weatherTemplate
	})

	this.unitAdjustment = function unitAjustment(output){
		weatherService.getWeather(output)

	}

}
