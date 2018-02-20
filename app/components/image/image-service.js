function ImageService() {
	var url = '//bcw-getter.herokuapp.com/?url=';
	var url2 = 'http://www.splashbase.co/api/v1/images/random'
	var apiUrl = url + encodeURIComponent(url2);


	this.getImage = function getImage(callWhenDone) {
		$.get(apiUrl)
			.then(imageRes => {
				imageRes = JSON.parse(imageRes)
				//console.log('Image Data:', imageRes)
				callWhenDone(imageRes)
			})
	}
}
