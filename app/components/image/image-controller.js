function ImageController() {
	var imageService = new ImageService()
	var imageElem = document.getElementById('bgImage')

	function getImage() {
		imageService.getImage(drawImage)
	}
	
	function drawImage(imageRes){
		imageElem.style.backgroundImage = `url(${imageRes.large_url})`
		imageElem.style.backgroundRepeat = 'no-repeat'
		imageElem.style.backgroundSize = 'cover'
	}
	
	

	getImage()
}


