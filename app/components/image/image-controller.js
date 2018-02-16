function ImageController() {
	var imageService = new ImageService()
	var imageElem = document.getElementById('bgImage')

	function getImage() {
		imageService.getImage(drawImage)
	}
	
	function drawImage(imageRes){
		console.log(imageRes)
		imageElem.style.backgroundImage = `url(${imageRes.url})`
		imageElem.style.backgroundRepeat = 'no-repeat'
		imageElem.style.backgroundSize = 'cover'
	}
	
	

	getImage()
}


