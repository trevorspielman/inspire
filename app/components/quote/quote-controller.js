function QuoteController(){

	var qs = new QuoteService()
	var quoteElem = document.getElementById('quote')
	var authorElem = document.getElementById('author')

	qs.getQuote(function(quote){
		quoteTemplate = `
		<div class="col-2" id="author">
		<p><strong>${quote.author}</strong></p>
		<i class="fas fa-random" onclick="app.controllers.quoteController.refreshQuote(event)"></i>
		</div>
		<div class="col-10">
		<p><em>${quote.quote}</em></p>
		</div>
		`
		quoteElem.innerHTML = quoteTemplate
	})
	
	this.refreshQuote = function refreshQuote(event){
		event.preventDefault()
		qs.getQuote(function(quote){})
	}
	
}
