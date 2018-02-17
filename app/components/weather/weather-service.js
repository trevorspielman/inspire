function WeatherService() {
	var url = '//bcw-getter.herokuapp.com/?url=';
	var url2 = 'http://api.openweathermap.org/data/2.5/weather?q=boise&&APPID=bd82255fd0a21fa1238699b9eda2ee35'
	var apiUrl = url + encodeURIComponent(url2);

	this.getWeather = function (callWhenDone, output) {
		$.get(apiUrl, function (res, output) {
			res = JSON.parse(res)
			localStorage.setItem('weather', JSON.stringify(res))
			console.log(res)
			// if(output == 'fare'){
			// 	weather.main[temp] = (weather.main[temp] * 1.8 - 459.67)
			// }
			// if(output == 'cel'){
			// 	weather.main[temp] = (weather.main[temp] - 273.15)
			// }
			callWhenDone(res, output)
		})
	}

	this.unitAdjustment = function unitAdjustment(output){
		getWeather(output)
		console.log(getWeather)
	}
}
