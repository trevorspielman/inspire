function ImageController() {
	var imageService = new ImageService()
	var imageElem = document.getElementById('bgImage')

	function getImage() {
		imageElem.classList.add('hidden')
		imageService.getImage(drawImage)
	}
	
	function drawImage(imageRes){
		imageElem.style.backgroundImage = `url(${imageRes.url})`
		imageElem.style.backgroundRepeat = 'no-repeat'
		imageElem.style.backgroundSize = 'cover'
		imageElem.style.transition = 'transition: all .3s linear'
		imageElem.classList.remove('hidden')
	}
	
	this.refreshBackground = function refreshBackground(event){
		event.preventDefault()
		imageService.getImage(drawImage)
	}

	getImage()
}


